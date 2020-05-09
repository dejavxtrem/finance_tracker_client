import React from 'react';
import "./Dashboard.css"
import { Layout, Menu } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Card } from 'antd';
import TableComponent from '../table/Table'
import CardComponent from '../cardcontent/Cardcomponent'


import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';


{/* Content Stling */}
const { Header, Sider, Content } = Layout;
const style = { background: '#0092ff', padding: '8px 0' };
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};



class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="sidelayout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Banks
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Credit Card
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              Expenses
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {/* Row One for content details */}
            <Row gutter={32}>
              <Col span={8}>
                <div>
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                    <p>Card content</p>
                   <p>Card content</p>
                    <p>Card content</p>
                </Card>
                </div>
              </Col>

              <Col span={8}>
                <div>
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                    <p>Card content</p>
                   <p>Card content</p>
                    <p>Card content</p>
                </Card>
                </div>
              </Col>


              <Col span={8}>
                <div>
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                </div>
              </Col>
            

              
  
            </Row>

            <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
            </Divider>
           {/* Table content for stocks price */}
           <TableComponent/>
            {/* Card content for stocks price */}
            <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
            </Divider>
            <CardComponent/>
          

          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default SiderDemo  