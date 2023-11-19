import { Button, Card, Divider, Input } from 'antd';

import React, { useState } from 'react';



const Table = (btn: React.CSSProperties | undefined) => {
  const [items, setItems] = useState([
    { 
      description: '',
      quantity: 0,
      rate: 0,
      taxRate: 0,
      amount: 0,
      tax:0
    },
  ]);

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [name]: value };

    const quantity = parseFloat(newItems[index].quantity);
    const rate = parseFloat(newItems[index].rate);
    const taxRate = parseFloat(newItems[index].tax);
    const tax = (quantity * taxRate).toFixed(2);
    const amount = (quantity * rate).toFixed(2);

    newItems[index].taxRate = Number(tax);
    newItems[index].amount = Number(amount);

    setItems(newItems);
  };
 

  const handleDeleteRow = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  const handleAddRow = () => {
    setItems([...items, { 
      description: '',
      quantity: 0,
      rate: 0,
      taxRate: 0,
      amount: 0,
      tax:0 
    }]);
  };

  const subtotal = items.reduce((acc, item) => acc + parseFloat(item.amount), 0);
  const taxTotal = items.reduce((acc, item) => acc + parseFloat(item.taxRate), 0);
  const total = subtotal + taxTotal;




  return (
    <>
    <div style={{  display: 'flex',flexDirection: 'column'}}>
      <table style={{background:'rgb(241 241 241)', borderRadius:'10px',padding:'3px'}}>
        <thead style={{textAlign:'left' ,color:'black'}}>
          
          <tr style={{background:'rgb(241 241 241)'}}>
            <th style={{padding:'8px 6px'}}>Description</th>
            <th style={{padding:'8px 6px'}}>Quantity</th>
            <th style={{padding:'8px 6px'}}>Rate</th>
            <th style={{padding:'8px 6px'}}>Tax (%)</th>
            <th style={{padding:'8px 6px'}}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <Input
                  style={{
                    marginRight:'180px',
                    width: '100%',
                    transition: 'border-color 0.3s',
                    fontSize: '11px',
                    border:'none',
                  }}
                  type="text"
                  name="description"
                  value={item.description}
                  onChange={(e) => handleInputChange(index, e)} />

              </td>
              <td>
                <Input
                  placeholder={'placeholder'}
                  style={{
                    display:'flex',
                    border:'none',
                    width: '100%',
                    transition: 'border-color 0.3s',
                    fontSize: '12px',
                  }}
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleInputChange(index, e)} />
              </td>
              <td>
                <Input
                  placeholder={'placeholder'}
                  style={{
                    width: '100%',
                    border:'none',
                    fontSize: '12px',

                  }}
                  type="number"
                  name="rate"
                  value={item.rate}
                  onChange={(e) => handleInputChange(index, e)} />
              </td>
              <td>
                <Input
                  placeholder={'placeholder'}
                  style={{
                    width: '100%',
                    transition: 'border-color 0.3s',
                    fontSize: '12px',
                    border:'none',
                  }}
                  type="number"
                  name="tax"
                  value={item.tax}
                  onChange={(e) => handleInputChange(index, e)} />
                  
              </td>


              <td>{item.amount}</td>
              <td>
                <span
                style={btn}
                  className="delete-button"
                  onClick={() => handleDeleteRow(index)}
                >
                  &times;
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div style={{display:'flex',justifyContent:' space-between'}}>

      <Button style={btn} type="link"onClick={handleAddRow}>Add Row</Button>

      <Card style={{ marginTop: '20px',}}>
        <div style={{display:'flex' ,}}>

        <div style={{padding:'0 20px'}}>
        <p>Subtotal:</p>
        <p>Tax:</p>
        <Divider/>
        <p>Total:</p>
        </div>
        
        <div style={{padding:'0 20px'}}>
        <p>${subtotal.toFixed(2)}</p>
        <p>${taxTotal.toFixed(2)}</p>
        <Divider/>
        <p>${total.toFixed(2)}</p>
        </div>
        </div>
      </Card>
    </div>
    </>
  );
};

export default Table;