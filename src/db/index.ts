import mongoose from "mongoose";

let database;

export const initDb = async () => {
  if (process.env.MONGODB_URL) {
    const db = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    database = db;

    return database;
  }

  throw Error("MONGODB_URL env variable is not declared in .env");
};
