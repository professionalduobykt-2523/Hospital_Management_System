const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose')
const app = express()
const port = 5000


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Connect to the MongoDB

mongoose.connect(
  "mongodb+srv://USERNAME:PASSWORD@cluster0.fgcgb6v.mongodb.net/Data_Store?retryWrites=true&w=majority&appName=Cluster0"
)

  .then(() => {
    console.log("✅ MongoDB Atlas Connected Successfully")
  })

  .catch((err) => {
    console.log("❌ Connection Error:", err)
  });


  // Create Schema



const patientsSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },

  Age: {
    type: Number,
    required: true
  },

  Disease: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }

})

const patient = mongoose.model("patient", patientsSchema);



/*-------------------------------------------------------------------------------
                                 ROUTERS
---------------------------------------------------------------------------------*/


//GET REQUEST

app.get('/', (req, res) => {
  res.send("index.html")
})


//GET REQUEST

app.get('/record', async (req, res) => {
  const Patients = await patient.find();
  res.json(Patients)
})



//PUT REQUEST


app.get('/record/:id', async (req, res) => {

  const record = await patient.findById(req.params.id)

  if (record) {
    res.json(record);
  }

  else {
    res.status(404).send({ message: "Data Note Found" });
  }

});



//POST REQUEST


app.post('/record', async (req, res) => {

  const Name = req.body.Name;
  const Age = req.body.Age;
  const Disease = req.body.Disease;


  const data = new patient({
    Name,
    Age,
    Disease
  })


  await data.save()

  res.json(data);

});


//DELETE REQUEST


app.delete("/record/delete/:id", async (req, res) => {

  const newData = await patient.findByIdAndDelete(req.params.id)

  res.send({ message: "Data Deleted Successfully" });

});



app.listen(port, () => {
  console.log(`server runnning at http://localhost:${port}`);
})

