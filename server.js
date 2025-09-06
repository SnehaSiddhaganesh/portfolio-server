const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// ================== Middleware ==================
app.use(express.static(path.join(__dirname, 'public')));  // serve static files (index.html, css, js, etc.)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================== MySQL connection ==================
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '9763845234',   // ⚠️ replace with your MySQL password
  database: 'portfolio_db'
});

db.connect((err) => {
  if (err) {
    console.error('❌ DB connection error:', err);
  } else {
    console.log('✅ Connected to MySQL Database');
  }
});

// ================== CONTACT FORM ==================
app.post('/contact', (req, res) => {
  const { contact_name, contact_email, contact_address, contact_phone, contact_message } = req.body;

  if (!contact_name || !contact_email || !contact_message) {
    return res.status(400).send('⚠️ Required fields missing in contact form');
  }

  const query = `
    INSERT INTO contact (name, email, address, phone, message) 
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [contact_name, contact_email, contact_address, contact_phone, contact_message], (err, result) => {
    if (err) {
      console.error('❌ Contact Insert Error:', err);
      return res.status(500).send('Something went wrong while saving contact!');
    }
    console.log('✅ Contact form data saved');
    res.redirect('/thanku.html');   // this file must exist in public/
  });
});

// ================== ADVICE FORM ==================
app.post('/advice', (req, res) => {
  const { recommendation, advice_name, designation } = req.body;

  if (!recommendation || !advice_name || !designation) {
    return res.status(400).send('⚠️ Required fields missing in advice form');
  }

  const query = `
    INSERT INTO advice (recommendation, name, designation) 
    VALUES (?, ?, ?)
  `;

  db.query(query, [recommendation, advice_name, designation], (err, result) => {
    if (err) {
      console.error('❌ Advice Insert Error:', err);
      return res.status(500).send('Something went wrong while saving advice!');
    }
    console.log('✅ Advice form data saved');
    res.redirect('/advthanku.html');   // this file must exist in public/
  });
});

// ================== Default Route ==================
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ================== Start Server ==================
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
