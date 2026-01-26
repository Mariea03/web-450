

const request = require('supertest');
const express = require('espress');
const salesRouter = require('../sales');
const { mongo } = require('../../../utils/mongo');

jest.mock('../../../utils/mongo');

const app = express();
app.use('/reports/sales', salesRouter);

describe('GET /reports/sales/salesperson', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return sales grouped by salesperson', async () => {
    mongo.mockImplementations(async (cb) => {
      await cb({
        collection: () => ({
          aggregate: () => ({
            toArray: async () => ([
              { salesperson: 'Daphne Greene', totalSales: 12000 },
              { salesperson: 'Stephen Kirk', totalSales: 6500 }
            ])
          })
        })
      });
    });


   const res = await request(app).get('/reports/sales/salesperson');

   expect(res.status).toBe(200);
   expect(res.body.length).toBe(2);
  });

  it('should handle errors gracefully', async ()=> {
    mongo.mockImplementation(() => {
     throw new Error('DB failure');
    });

    const res = await request(app).get('/reports/sales/salesperson');
    expect(res.status).toBe(500);
  });
});

