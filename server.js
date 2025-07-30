/*const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});





//////////////////////////////////////////////////////////////

//const express = require('express');
//const path = require('path');
/*const mysql = require('mysql');
const bodyParser = require('body-parser');

//const app = express();
//const PORT = 3000;

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '9763845234', // your password, leave blank if using XAMPP default
  database: 'portfolio_db'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

// Route to handle contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const query = 'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.send('Something went Wrong!');
    } else {
      console.log('✅ Contact form data saved');
      res.redirect('\thanku.html');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

*/
//const express = require('express');
//const path = require('path');
/*const mysql = require('mysql');
const bodyParser = require('body-parser');

//const app = express();
//const PORT = 3000;

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '9763845234',
  database: 'portfolio_db'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

// Route to handle contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const query = 'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.send('Something went Wrong!');
    } else {
      console.log('✅ Contact form data saved');
      res.redirect('/thanku.html'); // ✅ fixed path
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
*/

/*
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '9763845234',
  database: 'portfolio_db'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection error:', err);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

// Route to serve index.html directly on /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to handle contact form submission
/*app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const query = 'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('❌ Error inserting data:', err);
      res.send('Something went wrong!');
    } else {
      console.log('✅ Contact form data saved');
      res.redirect('/thanku.html');
    }
  });
});
*/
// Start server
/*app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});*/

/*
app.post('/contact', (req, res) => {
  const { name, email, address, phone, message } = req.body;

  const query = 'INSERT INTO contact (name, email, address, phone, message) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, email, address, phone, message], (err, result) => {
    if (err) {
      console.error('❌ Insert error:', err);
      res.send('Something went wrong!');
    } else {
      console.log('✅ Contact form data saved');
      res.redirect('/thanku.html');
    }
  });
});
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


*/
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '9763845234',
  database: 'portfolio_db'
});

db.connect((err) => {
  if (err) {
    console.error('❌ DB error:', err);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

// GET home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST: contact form
app.post('/contact', (req, res) => {
  const { name, email, address, phone, message } = req.body;

  const query = 'INSERT INTO contact (name, email, address, phone, message) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, email, address, phone, message], (err, result) => {
    if (err) {
      console.error('❌ Insert error:', err);
      res.send('Something went wrong!');
    } else {
      console.log('✅ Contact form data saved');
      res.redirect('/thanku.html'); // thanku.html should be in public folder
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

