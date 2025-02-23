const express = require("express");
const app = express();
const dbConnection = require('./config/database');
const User = require('./models/userModels');
const cors = require('cors')
app.use(express.json());
app.use(cors())
const connected = dbConnection();
connected.then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
        console.log("server is running");
    });
}).catch(err => {
    console.error("Failed to connect to database:", err);
});

app.get('/', (req, res) => {

    res.send("API is healthy");
});

app.post('/signup', async (req, res) => {
    try {
        const userData = req.body;
        // console.log(userData);
       const user =  await User.create(userData);
      if(user){
        res.json("User created successfully");
      }
    } catch (error) {
        res.status(500).json(error.message);
    }
});

app.post('/login',async(req,res)=>{
        try {
            const data = req.body;
            const {email, password} = data;
           
            const authenticatedUser = await User.findOne({email:email});
            if (!authenticatedUser) {
                throw new Error("user not found ");  
            }
           if (authenticatedUser.password === password) {
            res.json("wellcome user "+authenticatedUser.name+"  You are loged in successfully ");
           }
            else{
                throw new Error("pasword is incorrect");
                
            }
        } catch (error) {
            res.json(error.message)
        }
})