const mongoose = require("mongoose");

let dbUrl = process.env.ATLASDB_URL;

// let dbUrl =  mongodb://127.0.0.1:27017/shreeshyam
connectToDB().then(() => {console.log("Connected to DB")}).catch(err => console.log("Connection Failed\n", err));

async function connectToDB() {
    await mongoose.connect(dbUrl);
}

module.exports = connectToDB;