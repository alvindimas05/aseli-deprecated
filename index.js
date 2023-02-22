const app = require("./routes");

var env = process.env;
app.listen(env.PORT, () => console.log("Listening on " + env.PORT));