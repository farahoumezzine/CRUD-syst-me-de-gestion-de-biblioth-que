//CRUD API
const express = require ("express");
const router= express.Router();
const Livre= require("../models/Livre");

//create
router.post("/livre",async (req,res) => {
  try{
      const newLivret = new Livre (req.body);
      await newLivret.save()
      .then((savedLivre) => {
          console.log(savedLivre);
          res.status(201).json({msg: "livre succefully saved"});
      })
     
  }catch(error){
      console.log(error);
      res.status(500).json({message: "unable to save livre"});
  }
  
  })

  //tester
  /*
  router.get("/livre", async (req, res) => {
    try {
       console.log("Hello world");
       res.status(201).json({msg: " succefully "});

    } catch (error) {
      console.error('Error fetching livres:', error);
      res.status(500).json({ msg: "Unable to get livres", error: error.message });
    }
  });*/


    // Read all livre
    router.get("/livre", async (req, res) => {
    try {
        //optimize the query
      const livres = await Livre.find().lean().exec();
      res.status(200).json({ livres });
    } catch (error) {
      console.error('Error fetching livres:', error);
      res.status(500).json({ msg: "Unable to get livres", error: error.message });
    }
  });


    //read single livre
    //670ecc7e8a556b4fa7ee42af
    router.get("/livre/:id", async(req,res) => {
        try {
            const id = req.params.id;

          const livres = await Livre.findById(id).lean().exec();
          res.status(200).json({ livres });
        } catch (error) {
          console.error('Error fetching livres:', error);
          res.status(500).json({ msg: "Unable to get livres", error: error.message });
        }
    });



    //update
    //
    router.put("/livre/:id", async(req,res)=> {
        try {
            const id = req.params.id;
            const {titre, auteur, annee, genre, nbpages} = req.body;

            const Updatelivre = await Livre.findByIdAndUpdate(id, {titre, auteur, annee, genre, nbpages},{new: true})
            .lean().exec();
          res.status(200).json({ livre : Updatelivre });
        } catch (error) {
          console.error('Error fetching livres:', error);
          res.status(500).json({ msg: "Unable to update livres", error: error.message });
        }

    });


  
    router.delete("/livre/:id", async(req, res) => {
        try {
            const id = req.params.id;
            const deletedLivre = await Livre.findByIdAndDelete(id).lean().exec();
            if (!deletedLivre) {
                return res.status(404).json({ msg: "Livres not found" });
            }
    
            res.status(200).json({ livre : deletedLivre, msg: "Livres deleted" });
            } catch (error) {
                console.error('Error deleting  Livre:', error);
                res.status(500).json({ msg: "Unable to delete Livre", error: error.message
                    }
                    );
                    }
                    });



              
module.exports=router;