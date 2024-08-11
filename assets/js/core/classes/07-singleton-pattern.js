console.log(
  '%cSingleton Pattern - MongoDB Connection',
  'color: #1e3a8a; font-weight: bold;'
);

/**
 * Singleton class for managing a MongoDB connection.
 * Ensures that only one instance of the MongoConnection class exists.
 * @class
 */
class MongoConnection {
  /**
   * Holds the single instance of the MongoConnection class.
   * @type {MongoConnection|null}
   * @private
   */
  static #instance = null;

  /**
   * Creates an instance of MongoConnection.
   * @param {string} connectionString - The connection string for the MongoDB database.
   * @throws {Error} Throws an error if an attempt is made to create a second instance.
   */
  constructor(connectionString) {
    if (MongoConnection.#instance) {
      return MongoConnection.#instance;
    }

    this.connectionString = connectionString;
    this.isConnected = false;
    MongoConnection.#instance = this;
  }

  /**
   * Connects to the MongoDB database.
   * Simulates a connection if not already connected.
   */
  connect() {
    if (this.isConnected) {
      console.log('Already connected to the database.');
      return;
    }

    // Simulate connection to MongoDB
    console.log(`Connecting to the database at ${this.connectionString}`);
    this.isConnected = true;
    console.log('Connected to the database.');
  }

  /**
   * Disconnects from the MongoDB database.
   * Simulates disconnection if not already disconnected.
   */
  disconnect() {
    if (!this.isConnected) {
      console.log('Already disconnected from the database.');
      return;
    }

    // Simulate disconnection from MongoDB
    console.log('Disconnecting from the database...');
    this.isConnected = false;
    console.log('Disconnected from the database.');
  }
}

// Usage example
const dbConnection1 = new MongoConnection('mongodb://localhost:27017/database');
dbConnection1.connect();

const dbConnection2 = new MongoConnection('mongodb://localhost:27017/anotherdatabase');
dbConnection2.connect(); // This will not create a new connection

console.log('Connection string of the first instance:', dbConnection1.connectionString);
console.log('Connection string of the second instance:', dbConnection2.connectionString);
console.log(
  'Are both connections the same instance?',
  dbConnection1 === dbConnection2 // Expected: true
);

dbConnection1.disconnect();
dbConnection2.disconnect(); // This will not actually disconnect since it is already disconnected
