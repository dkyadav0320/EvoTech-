const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const cors = require ("cors");

//const App = require('../src/App.js');

const app =express();
const PORT = process.env.PORT||5000;
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost/surveyApp",{useNewUrlParser:true, useUnifiedTopology:true});
const surveySchema=new mongoose.Schema (
    {
        name: String,
        gender:String,
        nationality:String,
        email:String,
        phoneNumber:Number,
        address:String,
        message:String,
    });

    const survey= mongoose.model("Survey", surveySchema);
    app.post("/api/surveys", async (req,res) => {
        try {
            const {name, gender, nationality, email, phoneNumber, address, message} =req.body;
            const survey = new Survey ({name, gender, nationality, email, phoneNumber, address, message});
            await survey.save();
            res.status(201).json({message:"Survey Submitted Successfully!!"});
        }
        catch(error) {
            console.error(error);
            res.status(500).json({message:"Internal Server Error!!"});
        }
    });
    app.get("/api/surveys", async(req,res) => {
        try{
            const surveys=await Survey.find();
            res.status(200).json(surveys);
        }
        catch(error) {
            console.error(error);
            res.status(500).json({message:"Internal Server Error!!"});
        }
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });