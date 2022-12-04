// @ts-check
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
'mongodb+srv://areum:ahdtlf!237@cluster0.uf6iqgu.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
