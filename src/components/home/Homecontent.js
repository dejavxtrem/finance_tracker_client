import React from 'react';
import { Layout } from 'antd';
import CardRowOne from '../Cardrowone';
import TableComponent from '../table/Table';
import CardComponent from '../cardcontent/Cardcomponent';
import {Divider } from 'antd';
import './homecomponent.css'
const { Header, Sider, Content } = Layout;


class HomeComponent extends React.Component 
{
    render () {
        return (
        
                    <Content>
                    
                    <CardRowOne stockData ={this.props.stockData} microData ={this.props.microData} googleData={this.props.googleData}/>
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                    </Divider>
                    <TableComponent forexData={this.props.forexData}/>
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                    </Divider>
                    <CardComponent cryptoData={this.props.cryptoData}/>
                    
                    </Content>
    
        )
    }
}

export default HomeComponent;