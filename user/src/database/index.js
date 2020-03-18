require("dotenv").config();
const mongoose = require("mongoose");
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/users";
mongoose.connect(mongoUri, {
  userNewUrlParser: true,
  useUnifiedTopology: true
});
