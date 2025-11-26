const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('responds with greeting', async () => {
    const res = await request(app).get('/').expect(200);
    expect(res.text).toBe('Hello from eyad project');
  });
});
