const express = require('express');
const app = express();
const port = 8080;
const path = require('path');


app.use(express.static(path.join(__dirname, 'public') ));


app.use((req, res)=>{

  res.status(404);
  res.send('<h1>Error 404:  Resource not found</h1>')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
