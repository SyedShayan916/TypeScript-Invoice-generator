import React, { useState  } from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Invoice from './Invoice';
import Sidebar from './Sidebar';
import Leftbar from './Leftbar';

const { Header, Sider, Content } = Layout;
const conatiner: React.CSSProperties = {
  backgroundColor:'#fafafa',
  justifyContent: 'center',
  minHeight: '280px',
  padding:'25px',
  background: 'colorBgContainer',
  display:'flex'
}


const Navbar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {token: { colorBgContainer },} = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <div className="sidebar" style={{minHeight: '100vh',backgroundColor:'#2c2929',paddingRight: collapsed ? '0px':'100px'}}>

      <Sider trigger={null} collapsible collapsed={collapsed} style={{ display: collapsed ? 'none' : 'block' }}>
        <div className="demo-logo-vertical" />
        <Menu
          style={{
            backgroundColor:'#2c2929',
            color:'white'

        
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
          
          ]}
        />
         <Leftbar />
      
      </Sider>
    
      </div>
      <Layout>
        <Header style={{ paddingLeft: 0, background: colorBgContainer ,display:'flex',lineHeight:'17px',justifyContent: 'space-between', alignItems: 'center',height: '48px',borderColor:'#bfc8de',}}>
          <div style={{display:'flex',alignItems: 'center',borderColor:'#bfc8de',}}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              color:"black",
              fontSize: '16px',
              width: 65,
              height: 48,
              borderColor:'#bfc8de',
              borderRadius:'0'
            }}
          />
             <h4 style={{display:'flex',flexDirection: 'column',paddingLeft: 10}}>
                Free Invoice Generator
                <a href="#" style={{color:'black',fontWeight:'lighter'}}>by Zoho Invoice</a>
             </h4>
          </div>
          <div style={{display:'flex',alignItems: 'center',}}>

            <a href="" style={{paddingRight:'10px'}}>Check out Zoho Invoice</a>
            <Button type='primary' style={{padding:"15px 10px",height:'0px',display:'flex', alignItems:'center',background:'#f0483e'}}>Sign up.It's Free!</Button>
        
          </div>
          
        </Header>
        <Content style={conatiner}>

          <Invoice />
          <Sidebar/>
          
        </Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;
