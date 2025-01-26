import { MongoClient } from "mongodb";

// Reading isn't too dangerous at the moment, so it's just here as a backup.
const connectionString = process.env.ATLAS_URI ||
    "mongodb+srv://readAny:readAny@photoportfolio.jzp2j.mongodb.net/?retryWrites=true&w=majority&appName=PhotoPortfolio";
const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
} catch(e) {
    console.error(e);
}

let db = conn.db("photos");

export default db;