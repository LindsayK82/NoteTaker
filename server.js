const express = require('express');
const path = require('path');

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// -----------------------------------

app.use(htmlRoutes);
app.use("/api", apiRoutes);


// app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/paths', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//---------------------------------------

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
