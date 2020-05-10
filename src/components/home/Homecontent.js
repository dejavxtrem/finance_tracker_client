import React from 'react';
import { Layout } from 'antd';
import CardRowOne from '../Cardrowone';
import TableComponent from '../table/Table';
import CardComponent from '../cardcontent/Cardcomponent';
import {Divider } from 'antd';
const { Header, Sider, Content } = Layout;


class HomeComponent extends React.Component 
{
    render () {
        return (
        
                    <Content>
                        
                    <CardRowOne/>
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                    </Divider>
                    <TableComponent/>
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                    </Divider>
                    <CardComponent/>
                    
                    </Content>
    
        )
    }
}

export default HomeComponent;