var express = require("express");
var app = express();

/* Load database related modules */
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
/* Store database in db.json file */
const adapter = new FileSync("04_RestDatabase/db.json");
const db = low(adapter);

/* Fill database with empty "patient" array */
db.defaults({ patient: [] }).write();

app.get("/", function(request, response) {
  printReqSummary(request);
  response
    .status(200)
    .send(
      "<h2>REST + Database</h2><ul>" +
        "<li>Show all patients (GET /patient )</li>" +
        "<li>Show specific patient (GET /patient/:id)</li>" +
        "<li>Add new patient (POST /patient?name=:NAME&surname=:SURNAME)</li>" +
        "<li>Modify existing patient (PUT /patient/:id?name=:NAME&surname=:SURNAME)</li>" +
        "<li>Remove patient (DELETE /patient/:id)</li></ul>"
    );
});

/* GET /patient -- Show all patients */
app.get("/patient", function(request, response) {
  printReqSummary(request);
  if (anyPatients()) {
    const patients = db.get("patient").value();
    response.status(200).send(JSON.stringify(patients));
  } else {
    response.status(404).send({ error: "No patients are registered" });
  }
});

/* GET /patient/:id -- Show patient with :id */
app.get("/patient/:id", function(request, response) {
  printReqSummary(request);
  if (anyPatients()) {
    const id = Number(request.params.id);
    const patient = getPatient(id);
    if (patient !== undefined) {
      response.status(200).send(JSON.stringify(patient));
    } else {
      response.status(404).send({ error: "No patient with given id" });
    }
  } else {
    response.status(404).send({ error: "No patients are registered" });
  }
});

/* POST /patient?name=:NAME&surname=:SURNAME -- Add new patient */
app.post("/patient", function(request, response) {
  printReqSummary(request);
  const name = request.query.name;
  const surname = request.query.surname;
  if (name === undefined || surname === undefined) {
    response.status(400).send({ error: "Missing data (name and/or surname)" });
  } else {
    const newId = generatePatientId();
    const newPatient = { id: newId, name: name, surname: surname };
    db
      .get("patient")
      .push(newPatient)
      .write();
    response.status(200).send(newPatient);
  }
});

/* PUT /patient/:id?name=:NAME&surname=:SURNAME -- modify patient with :id */
app.put("/patient/:id", function(request, response) {
  const id = Number(request.params.id);
  const patient = getPatient(id);
  if (patient === undefined) {
    response.status(404).send({ error: "No patient with given id" });
  } else {
    const name = request.query.name;
    const surname = request.query.surname;
    if (name === undefined || surname === undefined) {
      response
        .status(400)
        .send({ error: "Missing data (name and/or surname)" });
    } else {
      const updatedPatient = { id: patient.id, name: name, surname: surname };
      db
        .get("patient")
        .find(patient)
        .assign(updatedPatient)
        .write();
      response.status(200).send(updatedPatient);
    }
  }
});

/* DELETE /patient/:id -- Remove patient with :id */
app.delete("/patient/:id", function(request, response) {
  printReqSummary(request);
  const id = Number(request.params.id);
  const patient = getPatient(id);
  if (patient === undefined) {
    response.status(404).send({ error: "No patient with given id" });
  } else {
    db
      .get("patient")
      .remove({ id: id })
      .write();
    response.status(200).send({ message: "Patient removed successfully" });
  }
});

app.listen(3000);

function printReqSummary(request) {
  console.log(`Handling ${request.method} ${request.originalUrl}`);
}

function getPatient(id) {
  return db
    .get("patient")
    .find({ id: id })
    .value();
}

function anyPatients() {
  return (
    db
      .get("patient")
      .size()
      .value() > 0
  );
}

function generatePatientId() {
  if (anyPatients()) {
    const lastPatient = db
      .get("patient")
      .last()
      .value();
    return lastPatient.id + 1;
  } else {
    return 1;
  }
}
