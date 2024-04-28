// src/Forms/PaymentForm.jsx
import React, { useState } from 'react';
import { logInfo, logError } from '../logger'; // Assuming there's a logger function

function PaymentForm({ onPaymentSuccess, onPaymentCancel }) {
    const [currency, setCurrency] = useState('usd');
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [paymentInProgress, setPaymentInProgress] = useState(false);

    const handlePayment = async () => {
        setPaymentInProgress(true);
        // Implement your API call logic here
        try {
            // Simulate API call
            const response = await fetch('/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ currency, amount, email, description })
            });
            const paymentIntent = await response.json();
            logInfo(`Payment Intent Created: ${paymentIntent.id}`);
            onPaymentSuccess(paymentIntent);
        } catch (error) {
            logError(`Failed to create Payment Intent: ${error}`);
            setPaymentInProgress(false);
        }
    };

    const cancelPayment = () => {
        setPaymentInProgress(false);
        onPaymentCancel();
    };

    return (
        <form>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="aud">AUD</option>
            </select>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount in cents" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Client Email" />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <button type="button" onClick={handlePayment} disabled={paymentInProgress}>Collect Card Payment</button>
            <button type="button" onClick={cancelPayment} disabled={!paymentInProgress}>Cancel Payment</button>
        </form>
    );
}

export default PaymentForm;
