import React from "react"
import { createContext, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
  }

  // interface TransactionInput {
  //   title: string;
  //   amount: number;
  //   type: string;
  //   category: string;
  // }

  // type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
interface TransactionsProviderProps {
  children: React.ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  );

export function TransactionsProvider({ children } : TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);  

  useEffect(() => {
    api.get("transactions")
      .then((response) => setTransactions(response.data.transactions));    
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  return (  
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

