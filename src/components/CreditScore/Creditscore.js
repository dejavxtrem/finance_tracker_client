import React from 'react';
import { Card } from 'antd';
import './creditscore.css'

class Creditscore extends React.Component {
    render () {
        return (
            <div className="creditcss">
            <Card title="Credit Score Card" style={{ width: 300}} headStyle={{fontFamily: 'Libre Baskerville'}} bodyStyle={{fontweight: 700}}>
            <p>FICO: 757</p>
            <p>Very Good</p>
            <p>Date: Weds 13th 2020</p>
            </Card>
            </div>
        )
    }
}

export default Creditscore;