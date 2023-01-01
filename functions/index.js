const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
//var http = require("http");
const app = express();
//var server = http.createServer(app);
//var io = require("socket.io")(server);

//app.use(express.json());

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});

app.use(cors({origin: true}));
//app.use(cors());

/*io.on("Connection", (socket) => {
    console.log("connected");
});

server.listen(port, "0")*/

app.get("/hello", (req, res) => {
    return res.status(200).json({message: "Hello World"});
});

app.use(require("./routes/routes"));

exports.app = functions.https.onRequest(app);