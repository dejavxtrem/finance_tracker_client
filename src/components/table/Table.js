import React from 'react';
//import { Table, Tag, Space, Radio, Divider } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Card } from 'antd';
import './table.css'



class TableComponent extends React.Component {

  
    render () {
        return (
          <Row gutter={32} className="forexdata">
          <Col span={8}>
            <div>
            <Card title="FXExchange" bordered={false} style={{ width: 300 }} className="forexdata">
              <p>FXCHANGE: {this.props.forexData[0].symbol}</p>
               <p>RATE: {this.props.forexData[0].rate}</p>
               <p>Exchange: USA/CANADA</p>
            </Card>
            </div>
          </Col>

          <Col span={8}>
            <div>
            <Card title="FXExchange" bordered={false} style={{ width: 300 }}className="forexdata">
                <p>FXCHANGE: {this.props.forexData[1].symbol}</p>
                <p>RATE: {this.props.forexData[1].rate}</p>
                <p>Exchange: USA/UNITED KINGDOM</p>
            </Card>
            </div>
          </Col>


          <Col span={8}>
            <div>
            <Card title="FXExchange" bordered={false} style={{ width: 300 }} className="forexdata">
                <p>FXCHANGE: {this.props.forexData[2].symbol} </p>
                <p>RATE: {this.props.forexData[2].rate} </p>
                <p>Exchange: USA/JAPAN</p>
            </Card>
            </div>
          </Col>
        </Row>
        )
    }
}

export default TableComponent;