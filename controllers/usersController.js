// @ts-check

const mongoClient = require('./mongoController');

const db = {
  getUsers: async () => {
    const client = await mongoClient.connect();
    const user = client.db('kdt4').collection('user');

    const usersCursor = user.find({});
    const usersResult = await usersCursor.toArray();
    console.log(usersResult);
    if (usersResult.length === 0) throw new Error('실패');
    return usersResult;
  },
};

module.exports = db;
