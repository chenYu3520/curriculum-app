const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('public')); // Serve static files from 'public' directory

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
