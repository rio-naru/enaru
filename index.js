const express = require('express');
const app = express();
const port = 3000;
const indexRouter = require('./src/routes/index');

app.use(express.static('public'));
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});