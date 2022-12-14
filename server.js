const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// our middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static('public'));

// Spin up server
app.listen(PORT, ()=> console.log(`Your app is running at http://localhost:${PORT}`));