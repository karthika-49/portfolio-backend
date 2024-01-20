const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/view-resume', (req, res) => {
  const resumePath = path.join(__dirname, 'public', 'FTW.pdf');
  res.sendFile(resumePath);
});

app.get('/download-resume', (req, res) => {
  const resumePath = path.join(__dirname, 'public', 'FTW.pdf');
  res.download(resumePath, 'Karthika_Resume.pdf');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
