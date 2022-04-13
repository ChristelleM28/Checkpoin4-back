require("dotenv").config();
const app = require("./app)");

const port = process.env.port || 5000;

const server = app.listen(port, (err) => {
  if(err) {
    console.eror(`ERROR: ${err.message}`);
  } else {
    console.log(`server is listening on port ${port}`);
  }
});