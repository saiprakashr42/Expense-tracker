import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuid } from 'uuid';


export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);


    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: uuid(),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setText('');
        setAmount(0);


    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type='text'
                        placeholder="Enter here.."
                        value={text}
                        onChange={event => setText(event.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Amount<br />
                       (negative-expense, positive-income )
                    </label>


                    <input
                        type="number"
                        placeholder="Enter Amount.."
                        value={amount}
                        onChange={event => setAmount(event.target.value)}
                    />

                </div>

                <button className="btn">Add transaction</button>


            </form>
        </>
    )
}
