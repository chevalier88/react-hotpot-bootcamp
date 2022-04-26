import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function BillForm() {
  // Control the form input value using a state variable name.
  const [bills, setBills] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault(); // prevents refreshing?
    console.log('asdsa');
    console.log(event.target.Bill.value);
    const newBills = [...bills];
    newBills.push(event.target.Bill.value);
    setBills(newBills);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Bill</Form.Label>
          <Form.Control placeholder="Bill input" name="Bill" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
      <br />
      <br />
      Bills So Far:
      {' '}
      <ul>
        {bills.map((bill) => (
          <li key={bill.toString()}>
            {bill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Example() {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
    e.preventDefault();
    console.log('refresh prevented');
  };

  return (
    <div>
      <form>
        <button onClick={showFormHandler}>Create New Bill</button>
      </form>

      {showForm && (
      <BillForm />
      )}
    </div>
  );
}

export default function App() {
  return (

    <div>
      <Example />
    </div>
  );
}
