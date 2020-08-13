const db = require('../data/dbConfig');

async function insert(flower) {
  const [id] = await db('flowers').insert(flower);
  return await db('flowers')
    .where({ id })
    .first();
}

async function remove(id) {
  return await db('flowers')
    .where({ id })
    .del();
}

async function all() {
  return await db('flowers');
}
module.exports = {
  all,
  insert,
  remove
};
