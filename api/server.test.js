const server = require('./server.js');
const request = require('supertest');

describe('server', () => {
  describe('GET endpoints', () => {
    it('returns the right response status when hitting /', () => {
      return request(server)
        .get('/')
        .expect(200);
    });
    it('returns the right response status when hitting /flowers', () => {
      return request(server)
        .get('/flowers')
        .expect(200);
    });
  });

  describe('DELETE endpoints', () => {
    it('returns the right response status when hitting /', () => {
      return request(server)
        .del('/flowers')
        .expect(202);
    });
  });

  describe('POST endpoints', () => {
    it('returns the right response status when hitting /', () => {
      return request(server)
        .post('/flowers')
        .send({ flower: 'flower' })
        .expect(201);
    });
  });
});
