const url = "mongodb+srv://thengeatharva963:Atharva%40963@cluster0.vxk41.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoose = require("mongoose");

async function dbConnection() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
    }
}

module.exports = dbConnection;


