import React from 'react'
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance Web Development',
          type: 'deposit',
          category: 'Dev',
          amount: 42000,
          createdAt: new Date('2021-12-31 09:30:00')
        },
        {
          id: 2,
          title: 'Freelance Web Development',
          type: 'deposit',
          category: 'Dev',
          amount: 15000,
          createdAt: new Date('2021-12-24 10:00:00')
        },
        {
          id: 3,
          title: 'Freelance Back-end Development',
          type: 'deposit',
          category: 'Dev',
          amount: 18500,
          createdAt: new Date('2021-08-15 09:15:00')
        },
        {
          id: 4,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Escritório',
          amount: 3500,
          createdAt: new Date('2021-11-10 12:00:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
      
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


