// InvoiceDisplay.tsx
import React from 'react';
// import Tablee from './Tablee';
import html2pdf from 'html2pdf.js';
import Table2 from './Table2';


interface InvoiceDisplayProps {
  imageUrl: string;
  invoiceTitle: string;
  companyName: string;
  yourName: string;
  companyAddress: string;
  cityStateZip: string;
  country: string;
  clientCompanyName: string;
  clientAddress: string;
  clientCityStateZip: string;
  clientCountry: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  note: string;
  notes: string;
  tandc: string;
  tandcs: string;
  
}

const generatePDF = (targetId: string) => {
  const input = document.getElementById(targetId);

  if (input) {
    html2pdf(input, {
      image: { type: 'png', quality: 10 },
    });
  }
};


const InvoiceDisplay: React.FC<InvoiceDisplayProps> = ({
  imageUrl,
  invoiceTitle,
  companyName,
  yourName,
  companyAddress,
  cityStateZip,
  country,
  clientCompanyName,
  clientAddress,
  clientCityStateZip,
  clientCountry,
  invoiceNumber,
  invoiceDate,
  dueDate,
  note,
  notes,
  tandc,
  tandcs,
}) => {

  // const [description,setDescription] = useState("") 
  // const [quantity,setQuantity] = useState("") 
  // const [rate,setRate] = useState("") 
  // const [tax,setTax] = useState("") 
  // const [amount,setAmount] = useState("") 

  // const butn:React.CSSProperties={
  //   display:'none'
  // }
  // const brdr:React.CSSProperties={
  //   border:'none'  }
  return (
    <>
    <div id="invoice-container" style={{ padding: '40px' }}>
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
      <Table2></Table2>
      <div>
        <p style={{ fontWeight: 'lighter', fontSize: 'small' }}>
          {note || 'Note'} <br />
          {notes || 'It was great doing business with you.'} <br />
          <br />
          {tandc || 'Terms & Conditions'} <br />
          {tandcs || 'Please make the payment by the due date.'}
        </p>
      </div>
    </div>
    <button onClick={() => generatePDF('invoice-container')}>Download PDF</button>
    </>
  );
};
export { generatePDF }
export default InvoiceDisplay;