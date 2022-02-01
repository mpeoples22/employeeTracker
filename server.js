const inputCheck = require('./utils/inputCheck');
const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app =  express();
//epress middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
// Connect to database
const db = mysqul.createConnection(
    {
      host: 'localhost',
      //username
      user: 'root',
      //mysql password
      //password:'',
      database: 'personel'
    } ,
    console.log('Connected to the personel database.')
);
//get employees
app.get('/api/employees', (req, res) => {
    const sql = 'SELECT * FROM employees';

    db.query(sql, (err, rows)=> {
        if(err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});
// Create a condidate
app.post('/api/employees',({ body }, res)=> {
    const errors = inputCheck(body, 'first_name', 'last_name', 'in_management');
    if (errors) {
        res.status(400).json({ error: error});
        return;
    }
    const sql = `INSERT INTO employees (first_name, last_name, in_management)
    VALUES (?,?,?)`;
    const params = [body.first_name, body.last_name, body.in_management];

    db.query(sql, params, (err, result) => {
        if (err) {
        res.status(400).json({ error: err.message});
        return;
        }
      res.json({
          message: 'success',
          data: body
        });
    });      
});
//Default res(not found)
app.use((req, res) =>{
    res.status(404).end();
  });
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});