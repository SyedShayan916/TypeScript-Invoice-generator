import React, { useState } from 'react';



const Leftbar: React.FC = () => {
  const [hoveredSub, setHoveredSub] = useState<number | null>(null);
  
  const handleSubHeadingHover = (index: number) => {
    setHoveredSub(index);
  };

  const handleSubHeadingLeave = () => {
    setHoveredSub(null);
  };
  const renderSubheading = (index: number, label: string) => (
    <li
      key={index}
      onMouseEnter={() => handleSubHeadingHover(index)}
      onMouseLeave={handleSubHeadingLeave}
      style={{
        width:'100%',
        color: 'white',
        backgroundColor: hoveredSub === index ? "#333" : 'transparent',
        padding: '8px',
        marginRight:'180px',
        cursor: 'pointer',
        background:''
      }}
    >
      {label}
    </li>
  );
  const heading: React.CSSProperties={
    background:'rgb(44, 41, 41)',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
    paddingLeft:'30px',
  }

  return (
    <>
    <div style={{background:'rgb(44, 41, 41)',display:'flex',alignItems: 'flex-start', paddingLeft:'60px',}}>
      <h3 style={{ color: 'white',marginBottom: '0px' }}> Finance Free Apps</h3>    
    </div>
    <div style={heading}>
      <h3 style={{ color: 'white',marginBottom: '0px' }}> Billing</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
          {renderSubheading(1, 'Create Invoices')}
          {renderSubheading(2, 'Generate Estimates')}
          {renderSubheading(3, 'Create Receipts')}
          {renderSubheading(4, 'Revenue Forecast')}
      </ul>
    </div>
    <div style={heading}>
      <h3 style={{ color: 'white',marginBottom: '0px' }}> Finance & Payroll</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
          {renderSubheading(5, 'HMRC Furlough Claim Calculator')}
          {renderSubheading(6, 'Income Tax Calculator')}
          {renderSubheading(7, 'Paycheck Calculator')}
      </ul>
    </div>
    <div style={heading}>
      <h3 style={{ color: 'white',marginBottom: '0px' }}> Inventory</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
          {renderSubheading(8, 'SKU Generator')}
          {renderSubheading(9, 'Purchase Order Generator')}
          {renderSubheading(10, 'Calculate Reorder Point')}
          {renderSubheading(11, 'Economic Order Quantity')}
          {renderSubheading(12, 'Break-even Point Calculator')}
          {renderSubheading(13, 'Inventory Turnover Ratio')}
          {renderSubheading(14, 'Packing Slip Generator')}
          {renderSubheading(15, 'BarCode Generator')}
      </ul>
    </div>
    <div style={heading}>
      <h3 style={{ color: 'white',marginBottom: '0px' }}> Expense</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
          {renderSubheading(16, 'Generate Expense Reports')}
      </ul>
    </div>
    </>
  );
};

export default Leftbar;


