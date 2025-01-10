const mongoose = require("mongoose");
const initData = require("./data.js");
const Hackathon = require("../models/hackathon.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/chat";

main()
  .then(() => {
    console.log("connected to DB");
  })

  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Hackathon.deleteMany({});
  await Hackathon.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();