
import React from 'react';
import HomeComponent from '../home/Homecontent'
import { Link, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import "./Dashboard.css"


import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import { Layout, Menu, } from 'antd';

//import { Card } from 'antd';
//import TableComponent from '../table/Table'
//import CardComponent from '../cardcontent/Cardcomponent'
import BankInfo from '../bankinformation/BankAccount'
import CreditCardInfo from '../creditcardinfo/Creditcard'
import ExpensesInfo from '../expenses/Expenses'
//import CardRowOne from '../Cardrowone';



{/* React-Router */}









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
    isempty: true

  };

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // };

  // componentWillMount =() => {
  //   this.hideCompo()
  // }

  // hideCompo = () => {
  //    this.setState({
  //      isempty: !this.state.isempty
  //    })
    

  // }

  // reloadPage = () => {
     
  // }

  render() {
    return (
      <Layout className="sidelayout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" SelectedKeys={['1']}>
            <Menu.Item key="/" icon={<UserOutlined />}>
            <Link to="/home" className='colorlink'>Home</Link>
            </Menu.Item>

            <Menu.Item key="/bank" icon={<VideoCameraOutlined />} >
            <Link to="/bank" className='colorlink'>Bank</Link>
            </Menu.Item>
            <Menu.Item key="/creditcard" icon={<UploadOutlined />} >
            <Link to="/creditcard" className='colorlink'>Creditcard</Link>
            </Menu.Item>
            <Menu.Item key="/expense" icon={<UploadOutlined />} >
            <Link to="/expense" className='colorlink'>Expenses</Link>
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
            {/* router */}
            <Switch>
            <Route   exact path="/home" render={(props) => <HomeComponent {...props} stockData ={this.props.stockData} microData ={this.props.microData} googleData={this.props.googleData}/> } />
            <Route   path="/bank" render={(props) => <BankInfo  {...props}/> } />
            <Route   path="/creditcard" render={(props) => <CreditCardInfo  {...props}/> } />
            <Route   path="/expense" render={(props) => < ExpensesInfo {...props}/> } />    
            </Switch>

          
          
          
            
          </Content>
        </Layout>
      </Layout>

    );
  }
}


export default SiderDemo