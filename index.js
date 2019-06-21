const express = require('express');

const app = express();
app.listen(5000, () => {
  console.log(`Example app listening on port 5000`)
});

app.use(express.static(__dirname +`public`));

app.get(`/`, (request, response) => {
  response.sendFile(__dirname + `/public/portfolio.html`);
});
