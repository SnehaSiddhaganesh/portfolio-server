

const express = require('express');
const path = require('path');
const mysql = require('mysql2/promise'); // promise version
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// ================== Middleware ==================
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================== Railway MySQL Pool ==================
const pool = mysql.createPool({
  uri: 'mysql://root:cPFVbAwapSSsxddqYCOHzImvhYJCxpQO@ballast.proxy.rlwy.net:33318/railway',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ================== Initialize Tables ==================
async function initDB() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        address VARCHAR(255),
        phone VARCHAR(50),
        message TEXT
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS advice (
        id INT AUTO_INCREMENT PRIMARY KEY,
        recommendation TEXT,
        advice_name VARCHAR(255),
        designation VARCHAR(255)
      )
    `);

    console.log("✅ Tables ready (contacts, advice)");
  } catch (err) {
    console.error("❌ DB Init Error:", err);
  }
}

// Initialize DB tables
initDB();

// ================== CONTACT FORM ==================
app.post('/contact', async (req, res) => {
  const { contact_name, contact_email, contact_address, contact_phone, contact_message } = req.body;

  if (!contact_name || !contact_email || !contact_message) {
    return res.status(400).send('⚠️ Required fields missing in contact form');
  }

  try {
    await pool.query(
      `INSERT INTO contacts (name, email, address, phone, message) VALUES (?, ?, ?, ?, ?)`,
      [contact_name, contact_email, contact_address, contact_phone, contact_message]
    );
    console.log('✅ Contact form data saved');
    res.redirect('/thanku.html');
  } catch (err) {
    console.error('❌ Contact Insert Error:', err);
    res.status(500).send('Something went wrong while saving contact!');
  }
});

// ================== ADVICE FORM ==================
app.post('/advice', async (req, res) => {
  const { recommendation, advice_name, designation } = req.body;

  if (!recommendation || !advice_name || !designation) {
    return res.status(400).send('⚠️ Required fields missing in advice form');
  }

  try {
    await pool.query(
      `INSERT INTO advice (recommendation, advice_name, designation) VALUES (?, ?, ?)`,
      [recommendation, advice_name, designation]
    );
    console.log('✅ Advice form data saved');
    res.redirect('/advthanku.html');
  } catch (err) {
    console.error('❌ Advice Insert Error:', err);
    res.status(500).send('Something went wrong while saving advice!');
  }
});

// ================== Default Route ==================
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ================== Start Server ==================
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

