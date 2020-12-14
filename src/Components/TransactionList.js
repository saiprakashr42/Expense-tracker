import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';


export default function TransactionList() {
    //  const context = useContext(GlobalContext);
    //instead pulling out trasacntions as context.transactions we destructure as follow

    const { transactions } = useContext(GlobalContext);


    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    )
}
