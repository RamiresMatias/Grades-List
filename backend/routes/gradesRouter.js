import express from "express";
import { gradesModel } from "../models/gradesModel.js";

const app = express();
app.use(express.json());

app.get("/grade", async (req, res) => {
  try {
    let grades = await gradesModel.find({});

    res.send(grades);
  } catch (error) {
    console.log(error);
  }
});

app.get("/grade/:id", async (req, res) => {

  try {
    let grades = await gradesModel.find({ _id: req.params.id });

    res.send(grades);
  } catch (error) {
    console.log(error);
  }

})

app.post("/grade", async (req, res) => {
  try {

    const grade = new gradesModel(req.body);

    await grade.save();

    res.send(grade);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/grade/:id", async (req, res) => {

  try {

    const student = await gradesModel.findByIdAndUpdate(req.params.id, req.body, { new: true }
    );

    if (!student) {
      res.status(404).send("Documento não encontrado!");
    }

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }

});



export { app as gradesRouter };
