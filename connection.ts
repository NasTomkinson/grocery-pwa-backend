import { MongoClient } from "npm:mongodb";

class Connection {
  url: string;
  client: any;
  dbName: string;
  db: object | null;

  constructor(name: string) {
    this.url = "mongodb://localhost:27017";
    this.client = new MongoClient(this.url);
    this.dbName = "db-grocery";
    this.db = null;

    this.initialiseDB();
  }

  ready() {
    return this.db != null;
  }

  async initialiseDB() {
    this.client.connect();
    this.db = this.client.db(this.dbName);

    console.log("DB Initalised");
  }

  async insertInto(collection: string, data: [object]) {
    const currentCollection = this.db.collection(collection);
    await currentCollection.insertMany(data);

    return "Added records to db";
  }

  async selectCollection(collection: string, data: [object]) {
    const record = await this.db.collection(collection).find({}).toArray();

    return record
  }

  async selectRecord(collection: string, data: object) {
    const record = await this.db.collection(collection).find(data).toArray()

    return record
  }
}

export default Connection;
