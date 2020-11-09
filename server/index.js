const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
  users: 'root',
  host: 'localhost',
  password: '',
  databases: 'anggotaSystem'
});

app.post('/create', (req, res) => {
  const nama = req.body.nama;
  const alamat = req.body.alamat;
  const umur = req.body.umur;
  const sekolah = req.body.sekolah;

  db.query(
    "INSERT INTO anggota (nama, alamat, umur, sekolah) VALUES (?,?,?,?)",
    [nama, alamat, umur, sekolah], (err, result) => {
      if (err) {
        console.log(err)
      }else {
        res.send("Values Inserted")
      }
    }
  );

});

app.listen(8080, () => {
  console.log("runnin on port 8080!")
});
