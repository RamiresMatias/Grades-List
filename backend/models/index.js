import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.port = 3000;

export { db };
