import React from 'react';
import { Row, Col, Divider } from 'antd';
import { Card } from 'antd';
import MyContext from '../ContextDetails';

class CardRowOne extends React.Component {
    render () {
        return (
           
            <Row gutter={32}>
            <Col span={8}>
              <div>
              <Card title={this.props.stockData.companyName} bordered={false} style={{ width: 300 }}>
                <p>Ticker: {this.props.stockData.symbol}</p>
                 <p>Price: {this.props.stockData.delayedPrice}</p>
                  <p>Exchange: {this.props.stockData.primaryExchange} </p>
              </Card>
              </div>
            </Col>

            <Col span={8}>
              <div>
              <Card title={this.props.microData.companyName} bordered={false} style={{ width: 300 }}>
                  <p>Ticker: {this.props.microData.symbol}</p>
                  <p>Price: {this.props.microData.delayedPrice}</p>
                  <p>Exchange: {this.props.microData.primaryExchange}</p>
              </Card>
              </div>
            </Col>


            <Col span={8}>
              <div>
              <Card title={this.props.googleData.companyName} bordered={false} style={{ width: 300 }}>
                  <p>Ticker: {this.props.googleData.companyName}</p>
                  <p>Price: {this.props.googleData.delayedPrice}</p>
                  <p>Exchange: {this.props.googleData.primaryExchange}</p>
              </Card>
              </div>
            </Col>
          </Row>
        )
            
        
    }
}

export default CardRowOne;