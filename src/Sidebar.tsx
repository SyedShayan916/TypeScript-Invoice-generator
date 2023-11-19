import React from 'react';
import { DownOutlined,} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space, Divider } from 'antd';
import { generatePDF } from './InvoiceDisplay';


const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: 'Print',
    key: '1',

  },
  {
    label: 'Download',
    key: '2',

  }
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const sidebar: React.CSSProperties = {

    padding:'0 40px',
    margin:'-20'
}
const Sidebar: React.FC = () => {
  const handlePrint = () => {
    generatePDF('invoice-container');
  };
    return(
    <>
        <div style={sidebar}>

            <h2>Print Invouce</h2>
              
              <Divider />
              <div style={{display:'flex'}}>
                <Button onClick={handlePrint} type="primary" style={{margin:' 0 5px '}}>
                Print 
                </Button>
                <Dropdown menu={menuProps} >
                  <Button style={{margin:' 0 5px '}}>
                    <Space>
                    Download/Print
                    <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>

              </div>
        </div>
    </>
    )
}

export default Sidebar;