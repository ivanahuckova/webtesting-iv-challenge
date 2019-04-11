const db = require('../data/dbConfig');
const request = require('supertest');
const Flowers = require('./flowersModel');

describe('flowersModel', () => {
  beforeEach(async () => {
    await db('flowers').truncate();
  });
  afterEach(async () => {
    await db('flowers').truncate();
  });
  describe('insert', () => {
    it('inserts flower in the db', async () => {
      const newFlower = await Flowers.insert({ flower: 'Dandelion' });
      expect(newFlower.flower).toBe('Dandelion');
    });
    it('inserts 2 flower in the db', async () => {
      const newFlower1 = await Flowers.insert({ flower: 'Dandelion' });
      const newFlower2 = await Flowers.insert({ flower: 'Tulip' });
      expect(newFlower1.flower).toBe('Dandelion');
      expect(newFlower2.flower).toBe('Tulip');
    });
  });

  describe('remove', () => {
    it('deletes flower in the db', async () => {
      const newFlower1 = await Flowers.insert({ flower: 'Dandelion' });
      await Flowers.insert({ flower: 'Tulip' });
      await Flowers.remove(newFlower1.id);
      const allFlowers = await db('flowers');
      expect(allFlowers).toHaveLength(1);
    });
    it('deletes flower in the db', async () => {
      const newFlower1 = await Flowers.insert({ flower: 'Dandelion' });
      const newFlower2 = await Flowers.insert({ flower: 'Rose' });
      await Flowers.insert({ flower: 'Tulip' });
      await Flowers.remove(newFlower1.id);
      await Flowers.remove(newFlower2.id);
      const allFlowers = await db('flowers');
      expect(allFlowers).toHaveLength(1);
    });
  });
});
