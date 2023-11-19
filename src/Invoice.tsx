import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload, Card, Input, Divider, Button } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import {v4 as uuidv4} from 'uuid'
import TextArea from 'antd/es/input/TextArea';
import html2pdf from 'html2pdf.js';
import Table2 from './Table2';

interface IProps {

  tax:number;
  amount:number;
}


const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};



const generatePDF = (targetId: string) => {
  const input = document.getElementById(targetId);

  if (input) {
    html2pdf(input, {
      image: { type: 'png', quality: 10 },
    });
  }
};


const Invoice: React.FC <IProps>= () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
      if (info.file.status === 'uploading') {
        setLoading(true);
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj as RcFile, (url) => {
          setLoading(false);
          setImageUrl(url);
        });
      }
    };
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    const container: React.CSSProperties ={
    width:'650px',
    borderColor:'#bfc8de',
    }

    



    const [invoiceTitle,setinvoiceTitle] = useState("Set Inovice Title")
    const [companyName,setcompanyName] = useState("Company Name")
    const [yourName,setyourName] = useState("Your Name")
    const [companyAddress,setcompanyAddress] = useState("Comapny's Dddress")
    const [cityStateZip,setcityStateZip] = useState("Country's Zip Code")
    const [country,setcountry] = useState("Country")
    const [clientCompanyName,setclientCompanyName] = useState("Client's Company Name")
    const [clientAddress,setclientAddress] = useState("Client Address")
    const [clientCityStateZip,setclientCityStateZip] = useState("Client's Zip Code")
    const [clientCountry,setclientCountry] = useState("Client's country")
    const [invoiceNumber,setinvoiceNumber] = useState("0000")
    const [invoiceDate,setinvoiceDate] = useState("--/--/--")
    const [dueDate,setdueDate] = useState("--/--/--")
    const [note,setnote] = useState("Note")
    const [notes,setnotes] = useState("It was great doing business with you.")
    const [tandc,settandc] = useState("Please make the payment by the due date.")
    const [tandcs,settandcs] = useState("Terms & Conditions")
    const [description, setdescription] = useState("");
    const [quantity, setquantity] = useState("");
    const [rate, setrate] = useState("");
    const [tax, settax] = useState("");
    const [list, setlist] = useState([]);
    const [total1,settotal] = useState("")

    const amount = (quantity * rate)
    
    let subtotal = 0
    let taxTotal = 0
    let total = 0
     subtotal += (quantity * rate)
     taxTotal += (quantity * tax);
     total += subtotal + taxTotal;

    const handleDeleteRow = (id) => setlist(list.filter((row) => row.id !== id))

    const handleAddRow = (e: { preventDefault: any; }) =>{
      e.preventDefault
      const newItems = {
        id:  uuidv4(),
        description,
        quantity,
        rate,
        tax,
        amount
      }
      setdescription ("")
      setquantity("")
      setrate ("")
      settax ("")
      setlist([...list, newItems])
      console.log(list,description)
    }
    
      return (
    <>
    <div>
      <div>
        <Card style={container}>
            <div style={{display:'flex',justifyContent: 'space-between',paddingLeft:'20px',}}>
                <div style={{display:'flex'}}>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                    
                    <div style={{marginLeft:'-80px',marginTop:'15px' ,fontSize:'small'}}>

                    <p>Upload Logo <br />
                    240 x 240 pixels @ 72 DPI,
                    Maximum size of 1MB.</p>
                
                    </div>
                </div>
                  
                <Input
                  placeholder={"INVOICE"}
                  value={invoiceTitle}
                  style={{
                  width: '290px',
                  transition: 'border-color 0.3s',
                  border:'none',
                  fontSize:'35px',
                  color:'black',
                  textAlign:'left'
                  }}
                  onChange={(e) =>setinvoiceTitle (e.target.value) }
      
                  />
            </div>
            <div style={{padding:'20px 0'}}>
                <Input
                  placeholder={"Your Company"}
                  value={companyName}
                  style={{
                  width: '290px',
                  display:'flex',
                  padding:'2px',
                  paddingLeft:'5px',
                  margin:'3px 17px',
                  transition: 'border-color 0.3s',
                  fontSize:'13px',
                  textAlign:'left',
                  border:'none'

                  }}
                  onChange={(e) =>setcompanyName (e.target.value) }
                  />
                <Input
                  placeholder={"Your Name"}
                  value={yourName}
                  style={{
                  width: '290px',
                  display:'flex',
                  padding:'2px',
                  paddingLeft:'5px',
                  margin:'3px 17px',
                  transition: 'border-color 0.3s',
                  fontSize:'13px',
                  textAlign:'left',
                  border:'none'

                  }}
                  onChange={(e) =>setyourName (e.target.value)}
                  />

                <Input
                  placeholder={"Company's Adress"}
                  value={companyAddress}
                  style={{
                  width: '290px',
                  display:'flex',
                  padding:'2px',
                  paddingLeft:'5px',
                  margin:'3px 17px',
                  transition: 'border-color 0.3s',
                  fontSize:'13px',
                  textAlign:'left',
                  border:'none'

                  }}
                  onChange={(e) =>setcompanyAddress (e.target.value)}
                  />

                <Input
                  placeholder={"City,State Zip"}
                  value={cityStateZip}
                  style={{
                  width: '290px',
                  display:'flex',
                  padding:'2px',
                  paddingLeft:'5px',
                  margin:'3px 17px',
                  transition: 'border-color 0.3s',
                  fontSize:'13px',
                  textAlign:'left',
                  border:'none'

                  }}
                  onChange={(e) =>setcityStateZip (e.target.value)}
                  />
              
                <Input
                  placeholder={"U.S.A"}
                  value={country}
                  style={{
                  width: '290px',
                  display:'flex',
                  padding:'2px',
                  paddingLeft:'5px',
                  margin:'3px 17px',
                  transition: 'border-color 0.3s',
                  fontSize:'13px',
                  textAlign:'left',
                  border:'none'

                  }}
                  onChange={(e) =>setcountry (e.target.value)}
                  />
            </div>
            <div style={{padding:'40px 0',display:'flex',justifyContent: 'space-between'}}>         
                  <div style={{marginRight:'-30px',fontWeight:'bold'}}>
                    <p style={{padding:'0px 22px',fontWeight:'bold'}}>Bill To:</p>

                    
                    <Input
                      placeholder={"Your Client's Company"}
                      style={{
                      width: '290px',
                      display:'flex',
                      padding:'2px',
                      paddingLeft:'5px',
                      margin:'3px 17px',
                      transition: 'border-color 0.3s',
                      fontSize:'13px',
                      textAlign:'left',
                      border:'none'

                      }}
                      value={clientCompanyName}
                      onChange={(e) =>setclientCompanyName (e.target.value)}
                      />
                    
                    <Input
                      placeholder={"Client's Address"}
                      style={{
                      width: '290px',
                      display:'flex',
                      padding:'2px',
                      paddingLeft:'5px',
                      margin:'3px 17px',
                      transition: 'border-color 0.3s',
                      fontSize:'13px',
                      textAlign:'left',
                      border:'none'

                      }}
                      value={clientAddress}
                      onChange={(e) =>setclientAddress (e.target.value)}
                      />
                  
                    <Input
                      placeholder={"City, State Zip"}
                      style={{
                      width: '290px',
                      display:'flex',
                      padding:'2px',
                      paddingLeft:'5px',
                      margin:'3px 17px',
                      transition: 'border-color 0.3s',
                      fontSize:'13px',
                      textAlign:'left',
                      border:'none'

                      }}
                      value={clientCityStateZip}
                      onChange={(e) =>setclientCityStateZip (e.target.value)}
                      />
                  
                    <Input
                      placeholder={"U.S.A"}
                      style={{
                      width: '290px',
                      display:'flex',
                      padding:'2px',
                      paddingLeft:'5px',
                      margin:'3px 17px',
                      transition: 'border-color 0.3s',
                      fontSize:'13px',
                      textAlign:'left',
                      border:'none'

                      }}
                      value={clientCountry}
                      onChange={(e) =>setclientCountry (e.target.value)}
                      />
                  </div>            
                  <div style={{paddingLeft:'10px',display:'flex', marginBottom:'-10px'}}>
                      <div>
                        <p style={{fontWeight:'bold'}}>Incoice#: </p>
                        <p style={{fontWeight:'bold'}}>Invoice Date: </p>
                        <p style={{fontWeight:'bold'}}>Due Date: </p>
                      </div>
                      <div>

                        <p>
                        <Input
                          placeholder={"INV-12"}
                          style={{
                          width: '150px',
                          display:'flex',
                          padding:'2px',
                          paddingLeft:'5px',
                          margin:'3px 14px',
                          transition: 'border-color 0.3s',
                          fontSize:'13px',
                          textAlign:'left',
                          border:'none'

                          }}
                          value={invoiceNumber}
                          onChange={(e) =>setinvoiceNumber (e.target.value)}
                          /> 
                        </p>
                        <p>
                        <Input
                          placeholder={"Nov 16, 2023"}
                          style={{
                          width: '150px',
                          display:'flex',
                          padding:'2px',
                          paddingLeft:'5px',
                          margin:'3px 14px',
                          transition: 'border-color 0.3s',
                          fontSize:'13px',
                          textAlign:'left',
                          border:'none'

                          }}
                          value={invoiceDate}
                          onChange={(e) =>setinvoiceDate (e.target.value)}
                          />
                        </p> 
                        <p>
                        <Input
                          placeholder={"Nov 16, 2023"}
                          style={{
                          width: '150px',
                          display:'flex',
                          padding:'2px',
                          paddingLeft:'5px',
                          margin:'3px 14px',
                          transition: 'border-color 0.3s',
                          fontSize:'13px',
                          textAlign:'left',
                          border:'none'

                          }}
                          value={dueDate}
                          onChange={(e) =>setdueDate (e.target.value)}
                          />
                        </p>
                      </div>
                  </div>           
            </div>


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
                {list.map(({ id, description,quantity,rate,tax,amount}) => (
                    <React.Fragment key={id}>
                    <tr style={{borderRadius:'120px'}}>
                      <td style={{background:'white',borderRadius:'7px',paddingLeft:'10px'}}>{description}</td>
                      <td style={{background:'white',borderRadius:'7px',paddingLeft:'10px'}}>{quantity}</td>
                      <td style={{background:'white',borderRadius:'7px',paddingLeft:'10px'}}>{rate}</td>
                      <td style={{background:'white',borderRadius:'7px',paddingLeft:'10px'}}>{tax}</td>
                      <td style={{background:'white',borderRadius:'7px',textAlign:'center'}} className='amount'> {amount}</td>
                      <td className="delete-button" onClick={() => handleDeleteRow(id)}>&times;</td>
                    </tr>
                    </React.Fragment>
                  ))}
                <tr>
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
                          value={description}
                          onChange={(e) => setdescription(e.target.value)} />

                    </td>
                    <td>
                        <Input
                          placeholder={'Quantity'}
                          style={{
                            display:'flex',
                            border:'none',
                            width: '100%',
                            transition: 'border-color 0.3s',
                            fontSize: '12px',
                          }}
                          type="number"
                          name="quantity"
                          value={quantity}
                          onChange={(e) => setquantity(e.target.value)} />
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
                          value={rate}
                          onChange={(e) => setrate(e.target.value)} />
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
                          value={tax}
                          onChange={(e) => settax(e.target.value)} />
                          
                    </td>
                    <td style={{fontSize: '12px',
                                padding:'5px',
                                background:'white',
                                borderRadius:'10px',
                                textAlign:'center',
                                border:'none',
                                }}>{amount}</td>
                     <td>
                      
              </td>           
                </tr>
              </tbody>
            </table>


            <div style={{display:'flex',justifyContent:' space-between'}}>

              <Button type="link" onClick={handleAddRow} >Add Row</Button>

            </div>

            <div style={{padding:'120px 0px'}}>
              <div style={{padding:'20px 0px'}}>
                <Input 
                placeholder="Notes" 
                style={{
                  borderColor:'white'
                }}
                value={note}
                onChange={(e) =>setnote(e.target.value)}
                />
                <TextArea 
                placeholder="It was great doing business with you." 
                autoSize  
                style={{
                  borderColor:'white'
                }}
                value={notes}
                onChange={(e) =>setnotes (e.target.value)}
                />
              </div>
              <div style={{
                padding:'20px 0px'
              }}>
                <Input 
                placeholder="Terms & Conditions" 
                style={{
                  borderColor:'white'
                }}
                value={tandc}
                onChange={(e) =>settandc (e.target.value)}
                />
                <TextArea 
                placeholder="Please make the payment by the due date." 
                autoSize style={{
                  borderColor:'white'
                }} 
                value={tandcs}
                onChange={(e) =>settandcs (e.target.value)}
                  />
              </div>
            </div>            
        </Card>
      </div>


      <div style={{display:"none"}}>
      <Card >  
      <div id="invoice-container" style={{padding:'40px'}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {imageUrl && <img src={imageUrl} alt="Invoice Logo" style={{ width: '200px', marginBottom: '20px' }} />}
          <div>
            <h2>{invoiceTitle || 'Invoice'}</h2>
            <p>
              <strong>Invoice#:</strong> {invoiceNumber || 'N/A'}
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: 'large', fontWeight: 'bold' }}>{companyName || 'Company Name'}</p>
            <p>
              {yourName || 'Your Name'} <br />
              {companyAddress || 'Company Address'} <br />
              {cityStateZip || 'City State Zip'} <br />
              {country || 'Country'}
            </p>

            <h3>Bill To:</h3>
            <p>
              {clientCompanyName || 'Client Company Name'} <br />
              {clientAddress || 'Client Address'} <br />
              {clientCityStateZip || 'Client City State Zip'} <br />
              {clientCountry || 'Client Country'}<br />
            </p>
          </div>
          <div>
            <p>
              <strong>Invoice Date:</strong> {invoiceDate || 'N/A'} <br />
              <strong>Due Date:</strong> {dueDate || 'N/A'}
            </p>
          </div>
        </div>


        <Table2 list={list} ></Table2>
             
        <div style={{paddingTop:'120px'}}>
          <p style={{ fontWeight: 'lighter', fontSize: 'small' }}>
            {note || 'Note'} <br />
            {notes || 'It was great doing business with you.'} <br />
            <br />
            {tandc || 'Terms & Conditions'} <br />
            {tandcs || 'Please make the payment by the due date.'}
          </p>
        </div>
      <button  style={{display:'none'}} onClick={() => generatePDF('invoice-container') }>Download PDF</button>
      </div>
      </Card>
      </div>
    </div>
    </>
  );
};
export { generatePDF }
export default Invoice;
