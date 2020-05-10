import React from 'react';
import { Row, Col, Divider } from 'antd';
import { Card } from 'antd';

class CardRowOne extends React.Component {
    render () {
        return (
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
        )
            
        
    }
}

export default CardRowOne;