import { MongoClient } from 'mongodb';
import fs from 'fs';

// MongoDB connection details
const url = "mongodb+srv://aryanbhoi1962:bhoi12345@cluster0.0vabk.mongodb.net/";
const client = new MongoClient(url);

// Database and Collection names
const dbName = "test";
const collectionName = "books";

// Read data.json file
const data = JSON.parse(fs.readFileSync('./list.json', 'utf8'));

async function insertData() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Insert data into the collection
        const result = await collection.insertMany(data);

        console.log(`${result.insertedCount} documents were inserted`);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

insertData();
