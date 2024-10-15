const express = require('express');
const livreRouter = require('./routes/Livre'); 
const mongoose = require('mongoose');
const Livre = require('./models/Livre');
const bodyParser= require ("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
res.send('Bienvenue sur API BIB!');
});
app.use("/bibliotheque", livreRouter);

//connection base
const connecttoDB= async()=> {
    try {
        await mongoose.connect('mongodb://localhost:27017/bib', {
            useNewUrlParser: true, // Ensures that Mongoose uses MongoDB’s new URL parser.
            useUnifiedTopology: true //more robust connection handling
        });
        console.log("connected to mongoDB");
    }catch(error){
        console.log(error);
    }
}
connecttoDB();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });