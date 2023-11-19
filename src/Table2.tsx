import React from "react";

interface InputProps {list:any}
const Table2: React.FC <InputProps>= ({list}) => {
    return(
        <>
        <table style={{background:'rgb(241 241 241)', borderRadius:'10px',}}>
            <thead style={{textAlign:'left' ,color:'black'}}>
                <tr style={{background:'rgb(241 241 241)',}}>
                    <th style={{padding:'7px 5px'}}>Description</th>
                    <th style={{padding:'8px 6px'}}>Quantity</th>
                    <th style={{padding:'8px 6px'}}>Rate</th>
                    <th style={{padding:'8px 2px'}}>Tax (%)</th>
                    <th style={{padding:'8px 6px'}}>Amount</th>
                </tr>
            </thead>
            <tbody>
                {list.map(({ id, description,quantity,rate,tax,amount}) => (
                    <React.Fragment key={id}>
                    <tr style={{background:'white',borderRadius:'120px'}}>
                      <td style={{
                                width:'54.85%',
                                background:'white',
                                padding:'5px',
                                borderRadius:'10px',
                                transition: 'border-color 0.3s',
                                fontSize: '12px',
                                border:'none',
                                
                            }}>{description}</td>
                      <td style={{
                                width:"13.7125%",
                                padding:'5px',
                                background:'white',
                                borderRadius:'10px',
                                
                                border:'none',

                                transition: 'border-color 0.3s',
                                fontSize: '12px',
                                textAlign:'center'
                            }}>{quantity}</td>
                      <td style={{
                                width:"13.7125%",
                                border:'none',
                                padding:'5px',
                                background:'white',
                                borderRadius:'10px',
                                fontSize: '12px',
                                textAlign:'center'
                            }}>{rate}</td>
                      <td style={{
                                width:"13.7125%",
                                transition: 'border-color 0.3s',
                                fontSize: '12px',
                                padding:'5px',
                                background:'white',
                                borderRadius:'10px',
                                textAlign:'center',
                                border:'none',
                                }}>{tax}</td>
                      <td style={{
                                fontSize: '12px',
                                width:"13.7125%",
                                padding:'5px',
                                background:'white',
                                borderRadius:'10px',
                                textAlign:'center',
                                border:'none',
                                }}> {amount}</td>
                    </tr>
                    </React.Fragment>
                  ))}
                
            </tbody>
        </table>
        </>
    );
};
export default Table2;