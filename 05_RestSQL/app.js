//File 05_RestSQL/app.js
const express = require("express");
const app = express();
const mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  port: 3306,
  database: 'rest_db'
});

db.connect(function (err) {
  if (err) {
    console.error('Failed at connecting to the SQL database');
    throw err;
  }
  console.log("Connected to the SQL database");
});

// >>> Helper functions
function printReqSummary(request) {
  console.log(`Handling ${request.method} ${request.originalUrl}`);
}

// Get patient from database with given id
function getPatient(id, onSuccess, onFailure) {
  return db.query('SELECT * FROM patients WHERE id = ?', [id], function (err, results, fields) {
    if (results.length == 0) {
      onFailure()
    } else {
      onSuccess(results[0]);
    }
  });
}

// Check if database contains any patients
function hasPatients(onHasPatients, onZeroPatients) {
  db.query('SELECT COUNT(*) as count FROM patients', function (err, results, fields) {
    if (results[0].count > 0) {
      onHasPatients();
    } else {
      onZeroPatients();
    }
  })
}

// GET / -- Show main page
app.get("/", function (request, response) {
  printReqSummary(request);
  response.status(200).send(
    `<h1>REST + Database</h1><ul>
        <li>Show all patients (GET /patient )</li>
        <li>Show specific patient (GET /patient/:id)</li>
        <li>Add new patient (POST /patient?name=:NAME&surname=:SURNAME)</li>
        <li>Modify existing patient (PUT /patient/:id?name=:NAME&surname=:SURNAME)</li>
        <li>Remove patient (DELETE /patient/:id)</li></ul>`
  );
});

// GET /patient -- Show all patients
app.get("/patient", function (request, response) {
  printReqSummary(request);
  hasPatients(
    () => {
      db.query('SELECT * FROM patients', function (error, results, fields) {
        response.status(200).send(JSON.stringify(results));
      })
    },
    () => {
      response.status(404).send({ error: "No patients are registered" });
    });
});

// GET /patient/:id -- Show patient with :id
app.get("/patient/:id", function (request, response) {
  printReqSummary(request);
  hasPatients(
    () => {
      const id = Number(request.params.id);
      getPatient(
        id,
        (patient) => {
          response.status(200).send(JSON.stringify(patient));
        }, () => {
          response.status(404).send({ error: "No patient with given id" });
        });
    },
    () => {
      response.status(404).send({ error: "No patients are registered" });
    })
});

// POST /patient?name=:NAME&surname=:SURNAME -- Add new patient
app.post("/patient", function (request, response) {
  printReqSummary(request);
  const name = request.query.name;
  const surname = request.query.surname;
  if (name === undefined || surname === undefined) {
    response.status(400).send({
      error: "Invalid request - missing queries (name and/or surname)"
    });
  } else {
    const newPatient = { name: name, surname: surname };
    db.query("INSERT INTO patients SET ?", newPatient, function (err, result) {
      if (err) throw err;
      newPatient.id = result.insertId;
      response.status(200).send(newPatient);
    });
  }
});

// PUT /patient/:id?name=:NAME&surname=:SURNAME -- modify patient with :id
app.put("/patient/:id", function (request, response) {
  const id = Number(request.params.id);
  const name = request.query.name;
  const surname = request.query.surname;
  if (name === undefined || surname === undefined) {
    response.status(400).send({
      error: "Invalid request - missing queries (name and/or surname)"
    });
  } else {
    const updatedPatient = { id: id, name: name, surname: surname };
    db.query("UPDATE patients SET name = ?, surname = ? WHERE id = ?", [updatedPatient.name, updatedPatient.surname, updatedPatient.id], function (err, results, fields) {
      if (err) {
        response.status(500).send({ error: "Error while updating a patient" });
      } else if (results.affectedRows == 0) {
        response.status(404).send({ error: "No patient with given id" });
      } else {
        response.status(200).send(updatedPatient);
      }
    });
  }
});

// DELETE /patient/:id -- Remove patient with :id
app.delete("/patient/:id", function (request, response) {
  printReqSummary(request);
  const id = Number(request.params.id);

  db.query('DELETE FROM patients WHERE id = ?', id, function (err, results, fields) {
    if (err) {
      response.status(500).send({ error: "Error while deleting a patient" });
    } else if (results.affectedRows == 0) {
      response.status(404).send({ error: "No patient with given id" });
    } else {
      response.status(200).send({ message: "Patient removed successfully" });
    }
  })
});

app.listen(3000);
