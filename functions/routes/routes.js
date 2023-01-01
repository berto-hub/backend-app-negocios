const {Router} = require('express');
const { firestore } = require('firebase-admin');
const admin = require('firebase-admin');

const app = Router();

/*admin.initializeApp({
    credential: admin.credential.cert('./permissions.json'),
})*/

const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

//Users
app.get('/showUsers', async(req, res) => {
    try{
        const query = db.collection('users');
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            name: doc.data().name,
            teamId: doc.data().teamId,
            password: doc.data().password,
        }));

        return res.status(200).json(response);
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

//My profile
app.get('/myProfile/:email/:password', async(req, res) => {
    try{
        const query = db.collection('users')
            .where("email", "==", req.params.email)
            .where("password", "==", req.params.password);
        const querySnapshot = await query.get();

        //const response = querySnapshot.data();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            /*image: doc.data().image,
            name: doc.data().name,
            businessName: doc.data().businessName,
            profCategory: doc.data().profCategory,
            presentation: doc.data().presentation,
            CIF: doc.data().CIF,
            address: doc.data().address,
            CP: doc.data().CP,
            location: doc.data().location,
            IVA: doc.data().IVA,
            IBAN: doc.data().IBAN,
            //bills: [doc.data().bills],
            baseReward: doc.data().baseReward,*/
            idTeam: doc.data().idTeam,
            idUser: doc.data().idUser,
            opportunities: doc.data().opportunities,
            conversations: doc.data().conversations,
            image: doc.data().image,
            name: doc.data().name,
            email: doc.data().email,
            telephone: doc.data().telephone,
            businessName: doc.data().businessName,
            tradename: doc.data().tradename,
            profCategory: doc.data().profCategory,
            community: doc.data().community,
            presentation: doc.data().presentation,
            //
            CIF: doc.data().CIF,
            address: doc.data().address,
            CP: doc.data().CP,
            location: doc.data().location,
            IVA: doc.data().IVA,
            IBAN: doc.data().IBAN,
            //bills: [doc.data().bills],
            baseReward: doc.data().baseReward,
            //
            keywords: doc.data().keywords,
            password: doc.data().password,
            cardNumber: doc.data().cardNumber,
            cardType: doc.data().cardType,
            cardMonthExpir: doc.data().cardMonthExpir,
            cardYearExpir: doc.data().cardYearExpir,
            cvc: doc.data().cvc,
            typeBaseReward: doc.data().typeBaseReward,
            role: doc.data().role,
            reward: doc.data().reward,
        }));

        return res.status(200).json({profile: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.get('/getProfile/:id', async(req, res) => {
    try{
        const query = db.collection('users')
            .doc(req.params.id);
        const querySnapshot = await query.get();

        //const response = querySnapshot.data();
        const docs = querySnapshot.docs;
        /*const response = docs.map(doc => ({
            id: doc.id,
            image: doc.data().image,
            name: doc.data().name,
            businessName: doc.data().businessName,
            profCategory: doc.data().profCategory,
            presentation: doc.data().presentation,
            CIF: doc.data().CIF,
            address: doc.data().address,
            CP: doc.data().CP,
            location: doc.data().location,
            IVA: doc.data().IVA,
            IBAN: doc.data().IBAN,
            //bills: [doc.data().bills],
            baseReward: doc.data().baseReward,
            //id: doc.id,
            opportunities: [],
            tradename: doc.data().tradename,
            community: doc.data().community,
            presentation: doc.data().presentation,
            //
            //keywords: [doc.data().keywords],
            password: doc.data().password,
            cardNumber: doc.data().cardNumber,
            cardType: doc.data().cardType,
            cardMonthExpir: doc.data().cardMonthExpir,
            cardYearExpir: doc.data().cardYearExpir,
            cvc: doc.data().cvc,
        }));*/

        console.log(querySnapshot.docs);
        return res.status(200).json({
            profile: 
                querySnapshot.data()
        });
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.get('/getUsers', async (req, res) => {
    try{
        var query = db.collection('users')
            //.startAfter(["7X74vGcrLOEe94rNnL1i"])//******Mirar esto melon*********
            .limit(10);
        
        //if(lastVisible == )

        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            /*image: doc.data().image,
            name: doc.data().name,
            businessName: doc.data().businessName,
            profCategory: doc.data().profCategory,
            presentation: doc.data().presentation,
            CIF: doc.data().CIF,
            address: doc.data().address,
            CP: doc.data().CP,
            location: doc.data().location,
            IVA: doc.data().IVA,
            IBAN: doc.data().IBAN,
            //bills: [doc.data().bills],
            baseReward: doc.data().baseReward,*/
            idTeam: doc.data().idTeam,
            idUser: doc.data().idUser,
            opportunities: doc.data().opportunities,
            conversations: doc.data().conversations,
            image: doc.data().image,
            name: doc.data().name,
            email: doc.data().email,
            telephone: doc.data().telephone,
            businessName: doc.data().businessName,
            tradename: doc.data().tradename,
            profCategory: doc.data().profCategory,
            community: doc.data().community,
            presentation: doc.data().presentation,
            //
            CIF: doc.data().CIF,
            address: doc.data().address,
            CP: doc.data().CP,
            location: doc.data().location,
            IVA: doc.data().IVA,
            IBAN: doc.data().IBAN,
            //bills: [doc.data().bills],
            baseReward: doc.data().baseReward,
            //
            keywords: doc.data().keywords,
            password: doc.data().password,
            cardNumber: doc.data().cardNumber,
            cardType: doc.data().cardType,
            cardMonthExpir: doc.data().cardMonthExpir,
            cardYearExpir: doc.data().cardYearExpir,
            cvc: doc.data().cvc,
            typeBaseReward: doc.data().typeBaseReward,
            role: doc.data().role,
            reward: doc.data().reward,
        }));

        return res.status(200).json({profile: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/showMoreUsers/:count', async (req, res) => {
    try{
        var query = db.collection('users');
            //.startAfter()//******Mirar esto melon*********
            //.limit(3);
        
        //if(lastVisible == )
        //const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        //console.log("last", lastVisible);

        //const querySnapshot = await query.get();
        //const docs = querySnapshot.docs;

        const documentSnapshot = await query.get();

        var lastDocument = documentSnapshot.docs[parseInt(req.params.count)-1];
        const querySnapshot = await query.startAfter(lastDocument).limit(10).get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            /*image: doc.data().image,
            name: doc.data().name,
            businessName: doc.data().businessName,
            profCategory: doc.data().profCategory,
            presentation: doc.data().presentation,
            CIF: doc.data().CIF,
            address: doc.data().address,
            CP: doc.data().CP,
            location: doc.data().location,
            IVA: doc.data().IVA,
            IBAN: doc.data().IBAN,
            //bills: [doc.data().bills],
            baseReward: doc.data().baseReward,*/
            idTeam: doc.data().idTeam,
            idUser: doc.data().idUser,
            opportunities: doc.data().opportunities,
            conversations: doc.data().conversations,
            image: doc.data().image,
            name: doc.data().name,
            email: doc.data().email,
            telephone: doc.data().telephone,
            businessName: doc.data().businessName,
            tradename: doc.data().tradename,
            profCategory: doc.data().profCategory,
            community: doc.data().community,
            presentation: doc.data().presentation,
            //
            CIF: doc.data().CIF,
            address: doc.data().address,
            CP: doc.data().CP,
            location: doc.data().location,
            IVA: doc.data().IVA,
            IBAN: doc.data().IBAN,
            //bills: [doc.data().bills],
            baseReward: doc.data().baseReward,
            //
            keywords: doc.data().keywords,
            password: doc.data().password,
            cardNumber: doc.data().cardNumber,
            cardType: doc.data().cardType,
            cardMonthExpir: doc.data().cardMonthExpir,
            cardYearExpir: doc.data().cardYearExpir,
            cvc: doc.data().cvc,
            typeBaseReward: doc.data().typeBaseReward,
            reward: doc.data().reward,
        }));

        return res.status(200).json({profile: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/getProfileName/:name', async(req, res) => {
    try{
        const query = db.collection('users')
            .startAt([req.params.name])
            .endAt([req.params.name + "\uf8ff"]);
            
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            /*image: doc.data().image,
            name: doc.data().name,
            businessName: doc.data().businessName,
            profCategory: doc.data().profCategory,
            presentation: doc.data().presentation,
            CIF: doc.data().CIF,
            address: doc.data().address,
            CP: doc.data().CP,
            location: doc.data().location,
            IVA: doc.data().IVA,
            IBAN: doc.data().IBAN,
            //bills: [doc.data().bills],
            baseReward: doc.data().baseReward,*/
            idTeam: doc.data().idTeam,
            idUser: doc.data().idUser,
            opportunities: doc.data().opportunities,
            conversations: doc.data().conversations,
            image: doc.data().image,
            name: doc.data().name,
            email: doc.data().email,
            telephone: doc.data().telephone,
            businessName: doc.data().businessName,
            tradename: doc.data().tradename,
            profCategory: doc.data().profCategory,
            community: doc.data().community,
            presentation: doc.data().presentation,
            //
            CIF: doc.data().CIF,
            address: doc.data().address,
            CP: doc.data().CP,
            location: doc.data().location,
            IVA: doc.data().IVA,
            IBAN: doc.data().IBAN,
            //bills: [doc.data().bills],
            baseReward: doc.data().baseReward,
            //
            keywords: doc.data().keywords,
            password: doc.data().password,
            cardNumber: doc.data().cardNumber,
            cardType: doc.data().cardType,
            cardMonthExpir: doc.data().cardMonthExpir,
            cardYearExpir: doc.data().cardYearExpir,
            cvc: doc.data().cvc,
            typeBaseReward: doc.data().typeBaseReward,
        }));

        return res.status(200).json({profile: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.patch('/sendRewardUser/:id', async(req, res) => {
    try{
        const doc = await db.collection('users')
            //.where("email", "==", req.params.email)
            .doc(req.params.id)
            .update(
                {
                    reward: req.body.reward,
                }
            );
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.patch('/editTeamUser/:id', async(req, res) => {
    try{
        const doc = await db.collection('users')
            //.where("email", "==", req.params.email)
            .doc(req.params.id)
            .update(
                {
                    idTeam: req.body.idTeam,
                }
            );
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.patch('/editUserTeam/:id', async(req, res) => {
    try{
        const doc = await db.collection('teams')
            //.where("email", "==", req.params.email)
            .doc(req.params.id)
            .update(
                {
                    users: req.body.users,
                    numUsers: req.body.numUsers,
                }
            );
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.get('/rewardsWin/:id', async(req, res) => {
    try{
        const query = db.collection('rewards')
            .where("idReward", "==", req.params.id);
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;
        
        //console.log(querySnapshot.docs);
        return res.status(200).json({
            reward: 
                querySnapshot.data()
        });
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.patch('/updateBaseReward/:id', async(req, res) => {
    try{
        const doc = await db.collection('users')
            //.where("email", "==", req.params.email)
            .doc(req.params.id)
            .update(
                {
                    baseReward: req.body.baseReward,
                    typeBaseReward: req.body.typeBaseReward,
                }
            );
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

/*async function getAncientOpors(id){
    let opors = [];

    try{
        const query = db.collection('users')
            .doc(id);
        const querySnapshot = await query.get();
        //const response = querySnapshot.data();
        const docs = querySnapshot.docs;

        opors.push(querySnapshot.data().opportunities);
        console.log(opors);
        return opors;
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
};*/

app.patch('/profileOpor/:id', async(req, res) => {
    try{
        const doc = await db.collection('users')
            //.where("email", "==", req.params.email)
            .doc(req.params.id)
            .update(
                {
                    opportunities: req.body.opportunities,
                }
            );
        //console.log(getAncientOpors());
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.patch('/createConver/:id',  async(req, res) => {
    try{
        const doc = await db.collection('users')
            //.where("email", "==", req.params.email)
            .doc(req.params.id)
            .update(
                {
                    conversations: req.body.conversations,
                }
            );
        //console.log(getAncientOpors());
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.patch('/profileKeys/:id', async(req, res) => {
    try{
        const doc = await db.collection('users')
            //.where("email", "==", req.params.email)
            .doc(req.params.id)
            .update(
                {
                    keywords: req.body.keywords,
                }
            );
        //console.log(getAncientOpors());
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.put('/profileConver/:id', async(req, res) => {
    try{
        const doc = await db.collection('users')
            .doc(req.params.id)
            .update(
                {
                    conversations: req.body.conversations,
                }
            );
        
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.put('/profileReward/:id', async(req, res) => {
    try{
        const doc = await db.collection('users')
            .doc(req.params.id)
            .update(
                {
                    reward: req.body.reward,
                }
            );
        
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.get('/showProfiles', async(req, res) => {
    try{
        const query = db.collection('users');
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            idTeam: doc.data().idTeam,
            idUser: doc.data().idUser,
            opportunities: doc.data().opportunities,
            conversations: doc.data().conversations,
            image: doc.data().image,
            name: doc.data().name,
            email: doc.data().email,
            telephone: doc.data().telephone,
            businessName: doc.data().businessName,
            tradename: doc.data().tradename,
            profCategory: doc.data().profCategory,
            community: doc.data().community,
            presentation: doc.data().presentation,
            //
            CIF: doc.data().CIF,
            address: doc.data().address,
            CP: doc.data().CP,
            location: doc.data().location,
            IVA: doc.data().IVA,
            IBAN: doc.data().IBAN,
            //bills: [doc.data().bills],
            baseReward: doc.data().baseReward,
            //
            keywords: doc.data().keywords,
            password: doc.data().password,
            cardNumber: doc.data().cardNumber,
            cardType: doc.data().cardType,
            cardMonthExpir: doc.data().cardMonthExpir,
            cardYearExpir: doc.data().cardYearExpir,
            cvc: doc.data().cvc,
            typeBaseReward: doc.data().typeBaseReward,
        }));

        return res.status(200).json({profiles: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
})

app.patch('/editMyProfile/:id', async(req, res) => {
    try{
        const document = await db.collection('users')
            //.where("email", "==", req.params.email)
            .doc(req.params.id)
            .update({...req.body})
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.patch('/editImageProfile/:id', async(req, res) => {
    try{
        const document = await db.collection('users')
            //.where("email", "==", req.params.email)
            .doc(req.params.id)
            .update({
                image: req.body.image,
            })
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.post("/createUser", async(req, res) => {
    try{
        await db.collection('users')
        .doc()
        .create(
            {
                image: req.body.image,
                name: req.body.name,
                email: req.body.email,
                telephone: req.body.telephone,
                businessName: req.body.businessName,
                tradename: req.body.tradename,
                profCategory: req.body.profCategory,
                community: req.body.community,
                presentation: req.body.presentation,
                typeBaseReward: req.body.typeBaseReward,
                //
                CIF: req.body.CIF,
                address: req.body.address,
                CP: req.body.CP,
                location: req.body.location,
                IVA: req.body.IVA,
                IBAN: req.body.IBAN,
                //bills: [req.body.bills],
                baseReward: req.body.baseReward,
                //
                //keywords: [req.body.keywords],
                password: req.body.password,
                cardNumber: req.body.cardNumber,
                cardType: req.body.cardType,
                cardMonthExpir: req.body.cardMonthExpir,
                cardYearExpir: req.body.cardYearExpir,
                cvc: req.body.cvc,
                reward: req.body.reward,
                opportunities: req.body.opportunities,
                keywords: req.body.keywords,
                idTeam: req.body.idTeam,
                conversations: req.body.conversations,
            }
        );
        /*
        {
    "image": "https://daniel.com",
    "name": "Daniel",
    "email": "dani@gmail.com",
    "telephone": "766756568",
    "businessName": "Holi SL",
    "tradename": "",
    "profCategory": "Administrador",
    "community": "Win-Win",
    "presentation": "Hola buenas encantado, soy Daniel.",
    "CIF": "876567788896",
    "address": "c/Mario",
    "CP": "20450",
    "location": "Madrid",
    "IVA": "7878090",
    "IBAN": "7634587",
    "baseReward": "$",
    "password": "hello123",
    "cardNumber": "6573434348",
    "cardType": "Visa",
    "cardMonthExpir": "Dicember",
    "cardYearExpir": "2022",
    "cvc": "65767687"
}
        */

        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

//Rewards
app.post('/createReward', async(req, res) => {
    try{
        var todayTimestamp = firestore.Timestamp.now();

        const doc = await db.collection('rewards')
            //.where("email", "==", req.params.email)
            .doc()
            .create(
                {
                    idReward: req.body.idReward,
                    idSender: req.body.idSender,
                    idReceiver: req.body.idReceiver,
                    date: todayTimestamp,
                    reward: req.body.reward,
                    comment: req.body.comment,
                    stars: req.body.stars,
                }
            );
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.get('/getReward/:idReward', async (req, res) => {
    try{
        var query = db.collection('rewards')
            .where("idReward", "==", req.params.idReward);

        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            idReward: doc.data().idReward,
            idSender: doc.data().idSender,
            idReceiver: doc.data().idReceiver,
            date: doc.data().date.toDate(),
            reward: doc.data().reward,
            comment: doc.data().comment,
            stars: doc.data().stars,
        }));

        return res.status(200).json({rewards: response[0]});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/showRewards', async (req, res) => {
    try{
        var query = db.collection('rewards')
            .orderBy("date", "desc")
            //.startAfter(["7X74vGcrLOEe94rNnL1i"])//******Mirar esto melon*********
            .limit(10);
        
        //if(lastVisible == )

        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            idReward: doc.data().idReward,
            idSender: doc.data().idSender,
            idReceiver: doc.data().idReceiver,
            date: doc.data().date.toDate(),
            reward: doc.data().reward,
            comment: doc.data().comment,
            stars: doc.data().stars,
        }));//.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime());

        return res.status(200).json({rewards: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

//Teams
app.get('/getTeam/:id', async(req, res) => {
    try{
        const query = db.collection('teams')
            .doc(req.params.id);
        const querySnapshot = await query.get();

        //const response = querySnapshot.data();
        const docs = querySnapshot.docs;
           
        console.log(querySnapshot.docs);
        return res.status(200).json({
            team: 
                querySnapshot.data()
        });
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.get('/getTeams', async(req, res) => {
    try{
        const query = db.collection('teams').limit(10);
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            image: doc.data().image,
            name: doc.data().name,
            users: doc.data().users,
            numUsers: doc.data().numUsers,
                /*memDocs.where('id', 'in', doc.data().members)
                .map(mem => ({
                    name: mem.data().name
                }))*/
                /*doc.data().members.map((id) => {
                    const mem = db.ref('users/' + id).get().docs;
                    mem.name;
                }),*/
        }));
        console.log(response);

        return res.status(200).json({team: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.get('/getMoreTeams/:count', async (req, res) => {
    try{
        var query = db.collection('teams');
            //.startAfter()//******Mirar esto melon*********
            //.limit(3);
        
        //if(lastVisible == )
        //const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        //console.log("last", lastVisible);

        //const querySnapshot = await query.get();
        //const docs = querySnapshot.docs;

        const documentSnapshot = await query.get();

        var lastDocument = documentSnapshot.docs[parseInt(req.params.count)-1];
        const querySnapshot = await query.startAfter(lastDocument).limit(10).get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            image: doc.data().image,
            name: doc.data().name,
            users: doc.data().users,
            numUsers: doc.data().numUsers,
        }));

        return res.status(200).json({team: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.post("/createTeam", async(req, res) => {
    try{
        await db.collection('teams')
        .doc()
        .create(
            {
                name: req.body.name,
                id: req.body.id,
                membersId: [req.body.membersId],
            }
        );

        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
})

/*app.post('/profile', async (req, res) =>{
    try{
        await db.collection('profile')
        .doc()
        .create(
            {
                name: req.body.name,
                email: req.body.email,
                telephone: req.body.telphone,
                businessName: req.body.businessName,
                tradename: req.body.tradename,
                profCategory: req.body.profCategory,
                community: req.body.community,
                presentation: req.body.presentation,
                keywords: req.body.keyword,
                password: req.body.password,
                cardNumber: req.body.cardNumber,
                cardType: req.body.cardType,
                cardMonthExpir: req.body.cardmonthExpir,
                cardYearExpir: req.body.cardYearExpir,
                cvc: req.body.cvc,
                IBANnumber: req.body.IBANnumber,
            });

        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
})*/

//Eventos
app.post('/createEvent', async (req, res) =>{
    try{
        var todayTimestamp = firestore.Timestamp.now();

        await db.collection('events')
        .doc()
        .create(
            {
                date: todayTimestamp,
                user: req.body.user,
                title: req.body.title,
                idEvent: req.body.idEvent,
                description: req.body.description,
                dateStart: req.body.dateStart,
                dateEnd: req.body.dateEnd,
                address: req.body.address,
                contactName: req.body.contactName,
                telephone: req.body.telephone,
                image: req.body.image,
                assistants: req.body.assistants,
            });

        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/showEvents', async (req, res) =>{
    try{
        const query = db.collection('events');
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            image: doc.data().image,
            title: doc.data().title,
            dateStart: doc.data().dateStart,
            dateEnd: doc.data().dateEnd,
            description: doc.data().description,
            assistants: 0,
        }))

        return res.status(200).json({events: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/getEventId/:idEvent', async(req, res) => {
    try{
        const query = db.collection('events')
            .where("idEvent", "==", req.params.idEvent);
        const querySnapshot = await query.get();

        //const response = querySnapshot.data();
        const docs = querySnapshot.docs;
           
        const response = docs.map(doc => ({
            id: doc.id,
            idEvent: doc.data().idEvent,
            date: doc.data().date.toDate(),
            user: doc.data().user,
            image: doc.data().image,
            title: doc.data().title,
            dateStart: doc.data().dateStart,
            dateEnd: doc.data().dateEnd,
            description: doc.data().description,
            assistants: doc.data().assistants,
            address: doc.data().address,
            contactName: doc.data().contactName,
            telephone: doc.data().telephone,
        }));
        //Queda guyardar esto con el response en el status esto
        return res.status(200).json({
            event: response[0]
        });
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.put('/assistantsUpdate/:id', async (req, res) =>{
    try{
        const document = await db.collection('events')
            //.where("email", "==", req.params.email)
            .doc(req.params.id)
            .update({
                assistants: req.body.assistants,
            });
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

//Wall
app.get('/getWall', async (req, res) => {
    try{
        var query = db.collection('wall')
            //.where("idTeam", "in", req.params['[idTeams]'])
            .orderBy("date", "desc")
            //.startAfter(["7X74vGcrLOEe94rNnL1i"])//******Mirar esto melon*********
            .limit(10);
        
        //if(lastVisible == )

        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            idTeam: doc.data().idTeam,
            idElement: doc.data().id,
            type: doc.data().type,
            date: doc.data().date.toDate(),
        }));//.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime());

        return res.status(200).json({wall: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.post('/setWall', async (req, res) =>{

    var todayTimestamp = firestore.Timestamp.now();

    try{
        await db.collection('wall')
        .doc()
        .create(
            {
                id: req.body.id,
                type: req.body.type,
                date: todayTimestamp,
                idTeam: req.body.idTeam,
            });

        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/showMoreWall/:count', async (req, res) => {
    try{
        var query = db.collection('wall')
            //.where("idTeam", "in", req.params.idTeams)
            .orderBy("date", "desc");
            //.startAfter()//******Mirar esto melon*********
            //.limit(3);
        
        //if(lastVisible == )
        //const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        //console.log("last", lastVisible);

        //const querySnapshot = await query.get();
        //const docs = querySnapshot.docs;

        const documentSnapshot = await query.get();

        var lastDocument = documentSnapshot.docs[parseInt(req.params.count)-1];
        const querySnapshot = await query.startAfter(lastDocument).limit(10).get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            idElement: doc.data().id,
            idTeam: doc.data().idTeam,
            type: doc.data().type,
            date: doc.data().date.toDate(),
        }));//.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime());

        return res.status(200).json({wall: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

//Poner id o date del primero de la lista sin actulizar
app.get('/showUpdateWall/:count', async (req, res) => {
    try{
        var query = db.collection('wall')
            .orderBy("date", "desc");

        var idDoc;
        var firstDocument;

        const documentSnapshot = await query.get();
        documentSnapshot.forEach((doc) => {
            if(doc.id == req.params.count){
                idDoc = doc.id;
                firstDocument = doc.data().date;
            }
        });
        
        const querySnapshot = await query.endBefore(firstDocument).get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            idElement: doc.data().id,
            type: doc.data().type,
            date: doc.data().date.toDate(),
        }));//.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime());

        return res.status(200).json({wall: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

//Ofertas
app.post('/createOffer', async (req, res) =>{
    /*var today = new Date().toUTCString();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
    dd = '0' + dd;
    }

    if (mm < 10) {
    mm = '0' + mm;
    }*/

    const makeRandomId= (length) => {
        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
       }
       return result;
    };

    var todayTimestamp = firestore.Timestamp.now();
    
    //today = dd + '/' + mm + '/' + yyyy;
    try{
        await db.collection('offers')
        .doc()
        .create(
            {
                //idOffer: req.body.idOffer,
                user: req.body.user,
                idOffer: req.body.idOffer,
                title: req.body.title,
                description: req.body.description,
                reward: req.body.reward,
                typeReward: req.body.typeReward,
                image: req.body.image,
                video: req.body.video,
                date: todayTimestamp,
            });

        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/getOfferId/:idOffer', async(req, res) => {
    try{
        const query = db.collection('offers')
            .where("idOffer", "==", req.params.idOffer);
        const querySnapshot = await query.get();

        //const response = querySnapshot.data();
        const docs = querySnapshot.docs;
           
        const response = docs.map(doc => ({
            id: doc.id,
            idOffer: doc.data().idOffer,
            user: doc.data().user,
            image: doc.data().image,
            video: doc.data().video,
            title: doc.data().title,
            date: doc.data().date.toDate(),
            description: doc.data().description,
            reward: doc.data().reward,
            typeReward: doc.data().typeReward,
        }));
        //Queda guyardar esto con el response en el status esto
        return res.status(200).json({
            offer: response[0]
        });
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.get('/getOffer/:id', async(req, res) => {
    try{
        const query = db.collection('offers')
            .doc(req.params.id);
        const querySnapshot = await query.get();

        //const response = querySnapshot.data();
        const docs = querySnapshot.docs;
           
        /*const response = docs.map(doc => ({
            user: doc.data().user,
            image: doc.data().image,
            video: doc.data().video,
            title: doc.data().title,
            date: doc.data().date.toDate(),
            description: doc.data().description,
            reward: doc.data().reward,
            typeReward: doc.data().typeReward,
        }));*/
        //Queda guyardar esto con el response en el status esto
        return res.status(200).json({
            offer: querySnapshot.data()
        });
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

app.get('/getOfferUser/:user', async(req, res) => {
    try{
        const query = db.collection('offers')
            .where("user", "==", req.params.user)
            .orderBy("date", "desc")
            .limit(10);
        const querySnapshot = await query.get();

        //const response = querySnapshot.data();
        const docs = querySnapshot.docs;
           
        const response = docs.map(doc => ({
            id: doc.id,
            idOffer: doc.data().idOffer,
            user: doc.data().user,
            image: doc.data().image,
            video: doc.data().video,
            title: doc.data().title,
            date: doc.data().date.toDate(),
            description: doc.data().description,
            reward: doc.data().reward,
            typeReward: doc.data().typeReward,
        }));

        return res.status(200).json({
            offer: 
                response
        });
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}),

//showMoreOffersUser
app.get('/showMoreOffers/:user/:count', async (req, res) => {
    try{
        var query = db.collection('offers')
            .where("user", "==", req.params.user)
            .orderBy("date", "desc");
            //.startAfter()//******Mirar esto melon*********
            //.limit(3);
        
        //if(lastVisible == )
        //const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        //console.log("last", lastVisible);

        //const querySnapshot = await query.get();
        //const docs = querySnapshot.docs;

        const documentSnapshot = await query.get();

        var lastDocument = documentSnapshot.docs[parseInt(req.params.count)-1];
        const querySnapshot = await query.startAfter(lastDocument).limit(10).get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            idOffer: doc.data().idOffer,
            user: doc.data().user,
            image: doc.data().image,
            video: doc.data().video,
            title: doc.data().title,
            date: doc.data().date.toDate(),
            description: doc.data().description,
            reward: doc.data().reward,
            typeReward: doc.data().typeReward,
        }));//.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime());

        return res.status(200).json({offer: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/showOffers', async (req, res) => {
    try{
        var query = db.collection('offers')
            .orderBy("date", "desc")
            //.startAfter(["7X74vGcrLOEe94rNnL1i"])//******Mirar esto melon*********
            .limit(10);
        
        //if(lastVisible == )

        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            user: doc.data().user,
            idOffer: doc.data().idOffer,
            image: doc.data().image,
            video: doc.data().video,
            title: doc.data().title,
            date: doc.data().date.toDate(),
            description: doc.data().description,
            reward: doc.data().reward,
            typeReward: doc.data().typeReward,
        }));//.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime());

        return res.status(200).json({offers: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/showMoreOffers/:count', async (req, res) => {
    try{
        var query = db.collection('offers')
            .orderBy("date", "desc");
            //.startAfter()//******Mirar esto melon*********
            //.limit(3);
        
        //if(lastVisible == )
        //const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        //console.log("last", lastVisible);

        //const querySnapshot = await query.get();
        //const docs = querySnapshot.docs;

        const documentSnapshot = await query.get();

        var lastDocument = documentSnapshot.docs[parseInt(req.params.count)-1];
        const querySnapshot = await query.startAfter(lastDocument).limit(10).get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            user: doc.data().user,
            idOffer: doc.data().idOffer,
            image: doc.data().image,
            video: doc.data().video,
            title: doc.data().title,
            date: doc.data().date.toDate(),
            description: doc.data().description,
            reward: doc.data().reward,
            typeReward: doc.data().typeReward,
        }));//.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime());

        return res.status(200).json({offers: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

//Poner id o date del primero de la lista sin actulizar
app.get('/showUpdateOffers/:count', async (req, res) => {
    try{
        var query = db.collection('offers')
            .orderBy("date", "desc");
            //.startAfter()//******Mirar esto melon*********
            //.limit(3);
        
        //if(lastVisible == )
        //const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        //console.log("last", lastVisible);

        //const querySnapshot = await query.get();
        //const docs = querySnapshot.docs;

        var idDoc;
        var firstDocument;

        const documentSnapshot = await query.get();
        documentSnapshot.forEach((doc) => {
            if(doc.id == req.params.count){
                idDoc = doc.id;
                firstDocument = doc.data().date;
            }
        })

        //****Buscar hasta el documentSnaphsot****
        //var firstDocument = documentSnapshot.docs;
        
        const querySnapshot = await query.endBefore(firstDocument).get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            user: doc.data().user,
            idOffer: doc.data().idOffer,
            image: doc.data().image,
            video: doc.data().video,
            title: doc.data().title,
            date: doc.data().date.toDate(),
            description: doc.data().description,
            reward: doc.data().reward,
            typeReward: doc.data().typeReward,
        }));//.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime());

        return res.status(200).json({offers: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

//Actualizar ofertas y oportunidades, el apartado de idOpor(en ofertas) que 
//es un array que se le añade otra opor y el de idOffer(en oportunidades) que 
//se pone la offer a la que se envía.


//Oportunidades ******************************************
app.post('/createOpportunity', async (req, res) =>{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
    dd = '0' + dd;
    }

    if (mm < 10) {
    mm = '0' + mm;
    }

    today = dd + '/' + mm + '/' + yyyy;

    var todayTimestamp = firestore.Timestamp.now();

    try{
        await db.collection('opportunities')
        .doc()
        .create(
            {
                idOpor: req.body.idOpor,
                idOffer: req.body.idOffer,
                idUser: req.body.idUser,
                description: req.body.description,
                name: req.body.name,
                telephone: req.body.telephone,
                email: req.body.email,
                date: todayTimestamp,
                state: "Pendiente",
            });

        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.patch('/updateOpportunityState/:id', async(req, res) =>{
    try{
        const document = await db.collection('opportunities')
            //.where("email", "==", req.params.email)
            .doc(req.params.id)
            .update({
                state: req.body.state,
            });
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/getOpportunity/:idOpor', async (req, res) =>{
    try{
        const query = db.collection('opportunities')
            .orderBy("date", "desc")
            .where("idOpor", "==", req.params.idOpor)
            
            //.limit(3);
        const querySnapshot = await query.get();

        //const response = querySnapshot.data();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            idOpor: doc.data().idOpor,
            idOffer: doc.data().idOffer,
            idUser: doc.data().idUser,
            description: doc.data().description,
            name: doc.data().name,
            telephone: doc.data().telephone,
            email: doc.data().email,
            date: doc.data().date.toDate(),
            state: doc.data().state,
        }));

        console.log(docs[0].data());
        return res.status(200).json({
            opportunity: response[0]
        });
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/showMoreOpportunities/:idOpor/:count', async (req, res) => {
    try{
        var query = db.collection('opportunities')
            .where("user", "==", req.params.idOpor)
            //.orderBy("date", "desc");
        
        //if(lastVisible == )
        //const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        //console.log("last", lastVisible);

        //const querySnapshot = await query.get();
        //const docs = querySnapshot.docs;

        const documentSnapshot = await query.get();

        var lastDocument = documentSnapshot.docs[parseInt(req.params.count)-1];
        const querySnapshot = await query.startAfter(lastDocument).limit(10).get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            idOpor: doc.data().idOpor,
            idOffer: doc.data().idOffer,
            idUser: doc.data().idUser,
            description: doc.data().description,
            name: doc.data().name,
            telephone: doc.data().telephone,
            email: doc.data().email,
            date: doc.data().date.toDate(),
            state: doc.data().state,
        }));//.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime());

        return res.status(200).json({opportunity: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/getOpportunityUser/:idUser', async (req, res) =>{
    try{
        const query = db.collection('opportunities')
            .where("idUser","==",req.params.idUser)
            .orderBy("date", "desc")
            .limit(10);
        const querySnapshot = await query.get();

        //const response = querySnapshot.data();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            idOpor: doc.data().idOpor,
            idOffer: doc.data().idOffer,
            idUser: doc.data().idUser,
            description: doc.data().description,
            name: doc.data().name,
            telephone: doc.data().telephone,
            email: doc.data().email,
            date: doc.data().date.toDate(),
            state: doc.data().state,
        }));

        console.log(docs[0].data());
        return res.status(200).json({
            opportunity: response
        });
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/moreOpportunitiesUser/:idUser/:count', async (req, res) => {
    try{
        var query = db.collection('opportunities')
            .where("idUser", "==", req.params.idUser)
            .orderBy("date", "desc");
        
        //if(lastVisible == )
        //const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        //console.log("last", lastVisible);

        //const querySnapshot = await query.get();
        //const docs = querySnapshot.docs;

        const documentSnapshot = await query.get();

        var lastDocument = documentSnapshot.docs[parseInt(req.params.count)-1];
        const querySnapshot = await query.startAfter(lastDocument).limit(10).get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            idOpor: doc.data().idOpor,
            idOffer: doc.data().idOffer,
            idUser: doc.data().idUser,
            description: doc.data().description,
            name: doc.data().name,
            telephone: doc.data().telephone,
            email: doc.data().email,
            date: doc.data().date.toDate(),
            state: doc.data().state,
        }));//.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime());

        return res.status(200).json({opportunity: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/getOpportunityOffer/:idOffer', async (req, res) =>{
    try{
        const query = db.collection('opportunities')
            .where("idOffer","==",req.params.idOffer)
            .orderBy("date", "desc")
            .limit(5);
        const querySnapshot = await query.get();

        //const response = querySnapshot.data();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            idOpor: doc.data().idOpor,
            idOffer: doc.data().idOffer,
            idUser: doc.data().idUser,
            description: doc.data().description,
            name: doc.data().name,
            telephone: doc.data().telephone,
            email: doc.data().email,
            date: doc.data().date.toDate(),
            state: doc.data().state,
        }));

        console.log(docs[0].data());
        return res.status(200).json({
            opportunity: response
        });
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/moreOpportunitiesOffer/:idOffer/:count', async (req, res) => {
    try{
        var query = db.collection('opportunities')
            .where("idOffer","==",req.params.idOffer)
            .orderBy("date", "desc");
        
        //if(lastVisible == )
        //const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        //console.log("last", lastVisible);

        //const querySnapshot = await query.get();
        //const docs = querySnapshot.docs;

        const documentSnapshot = await query.get();

        var lastDocument = documentSnapshot.docs[parseInt(req.params.count)-1];
        const querySnapshot = await query.startAfter(lastDocument).limit(5).get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            idOpor: doc.data().idOpor,
            idOffer: doc.data().idOffer,
            idUser: doc.data().idUser,
            description: doc.data().description,
            name: doc.data().name,
            telephone: doc.data().telephone,
            email: doc.data().email,
            date: doc.data().date.toDate(),
            state: doc.data().state,
        }));//.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime());

        return res.status(200).json({opportunity: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/showOpportunity', async (req, res) =>{
    try{
        const query = db.collection('opportunities');
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            receiver: doc.data().receiver,
            contactName: doc.data().contactName,
            telephone: doc.data().telephone,
            date: doc.data().date,
            description: doc.data().description,
            titleOffer: doc.data().description,
            state: doc.data().state,
            payment: doc.data().payment,
            reward: doc.body.reward,
            comment: doc.body.comment,
        }))

        return res.status(200).json({opportunities: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

//Mensajes
app.post('/createMessage', async (req, res) =>{
    var today = new Date();
    var h = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    var fecha;
    var hora;

    var todayTimestamp = firestore.Timestamp.now();

    if (dd < 10) {
    dd = '0' + dd;
    }

    if (mm < 10) {
    mm = '0' + mm;
    }

    if (h < 10) {
    h = '0' + h;
    }

    if (min < 10) {
    min = '0' + min;
    }

    if (sec < 10) {
    sec = '0' + sec;
    }

    fecha = 
        dd + '/' + mm + '/' + yyyy + "-" + h + ':' + min + ':' + sec;

    try{
        await db.collection('messages')
        .doc()
        .create(
            {
                idConversation: req.body.idConversation,
                sender: req.body.sender,
                receiver: req.body.receiver,
                text: req.body.text,
                date: todayTimestamp,
                //hour: hora,
            }
        );
        //console.log("date:" + fecha + "hour: " + hora);
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/getMessConver/:idConversation', async (req, res) =>{
    try{
        const query = db.collection('messages')
            .where("idConversation", "==", req.params.idConversation)
            .orderBy("date", "desc")
            .limit(10);

        const querySnapshot = await query.get();

        //const response = querySnapshot.data();
        const docs = querySnapshot.docs;
        
        const response = docs.map(doc => ({
            id: doc.id,
            idConversation: doc.data().idConversation,
            sender: doc.data().sender,
            receiver: doc.data().receiver,
            text: doc.data().text,
            date: doc.data().date.toDate(),
        }));

        //console.log(docs[0].data());
        return res.status(200).json({
            messages: response
        });
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/getMoreMessages/:idConversation/:count', async (req, res) => {
    try{
        var query = db.collection('messages')
            .where("idConversation", "==", req.params.idConversation)
            .orderBy("date", "desc");

        const documentSnapshot = await query.get();

        var lastDocument = documentSnapshot.docs[parseInt(req.params.count)-1];
        const querySnapshot = await query.startAfter(lastDocument).limit(10).get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            idConversation: doc.data().idConversation,
            sender: doc.data().sender,
            receiver: doc.data().receiver,
            text: doc.data().text,
            date: doc.data().date.toDate(),
        }));//.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime());

        return res.status(200).json({messages: response});
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/getMessages/:idSender/:idReceiver', async (req, res) =>{
    try{
        const query = db.collection('messages')
            .where("sender", "==", req.params.idSender)
            .where("receiver", "==", req.params.idReceiver)
            .orderBy("date", "desc")
            .limit(10);

        const querySnapshot = await query.get();

        //const response = querySnapshot.data();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            sender: doc.data().sender,
            receiver: doc.data().receiver,
            text: doc.data().text,
            date: doc.data().date.toDate(),
        }));

        //console.log(docs[0].data());
        return res.status(200).json({
            messages: response
        });
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.post('/createConversation', async (req, res) => {
    var todayTimestamp = firestore.Timestamp.now();
    
    const makeRandomId= (length) => {
        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
       }
       return result;
    };

    try{
        await db.collection('conversations')
        .doc()
        .create(
            {
                idConver: req.body.idConver,
                user1: req.body.user1,
                user2: req.body.user2,
                lastMessage: req.body.lastMessage,
                messageDate: todayTimestamp,
            }
        );
        //console.log("date:" + fecha + "hour: " + hora);
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/getConversConver/:idConver', async (req, res) =>{
    try{
        const query = db.collection('conversations')
            .where("idConver", "==", req.params.idConver)
            .orderBy("messageDate", "desc")
            ;//.limit(1);
        const querySnapshot = await query.get();

        //const response = querySnapshot.data();
        const docs = querySnapshot.docs;

        /*const response = docs.map(doc => ({
            id: doc.id,
            user: doc.data().user,
            lastMessage: doc.data().lastMessage,
            messageDate: doc.data().messageDate,
        }));*/

        const response = docs.map(doc => ({
            id: doc.id,
            idConver: doc.data().idConver,
            user1: doc.data().user1,
            user2: doc.data().user2,
            lastMessage: doc.data().lastMessage,
            messageDate: doc.data().messageDate.toDate(),
        }));

        //console.log(response);
        return res.status(200).json({
            conversations: response,
        });
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/getMoreConversConver/:idConver/:count', async (req, res) =>{
    try{
        const query = db.collection('conversations')
            .where("idConver", "==", req.params.idConver)
            .orderBy("messageDate", "desc");
        const documentSnapshot = await query.get();

        //const response = querySnapshot.data();
        var lastDocument = documentSnapshot.docs[parseInt(req.params.count)-1];
        const querySnapshot = await query.startAfter(lastDocument).limit(10).get();
        const docs = querySnapshot.docs;

        /*const response = docs.map(doc => ({
            id: doc.id,
            user: doc.data().user,
            lastMessage: doc.data().lastMessage,
            messageDate: doc.data().messageDate,
        }));*/

        const response = docs.map(doc => ({
            id: doc.id,
            idConver: doc.data().idConver,
            user1: doc.data().user1,
            user2: doc.data().user2,
            lastMessage: doc.data().lastMessage,
            messageDate: doc.data().messageDate.toDate(),
        }));

        //console.log(response);
        return res.status(200).json({
            conversations: response,
        });
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.put('/lastMessageUpdate/:id', async (req, res) =>{
    try{
        var todayTimestamp = firestore.Timestamp.now();

        const document = await db.collection('conversations')
            //.where("email", "==", req.params.email)
            .doc(req.params.id)
            .update({
                lastMessage: req.body.lastMessage,
                messageDate: todayTimestamp,
            });
        return res.status(204).json();
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/showMessages', async (req, res) =>{
    try{
        const query = db.collection('messages');
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            receiver: doc.data().receiver,
            contactName: doc.data().contactName,
            telephone: doc.data().telephone,
            date: doc.data().date,
            description: doc.data().description,
            titleOffer: doc.data().description,
            state: doc.data().state,
            payment: doc.data().payment,
            reward: doc.body.reward,
            comment: doc.body.comment,
        }))

        return res.status(200).json(response);
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
});

module.exports = app;