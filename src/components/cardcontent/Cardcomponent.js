import React from 'react';
import { Card } from 'antd';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

  class CardComponent extends React.Component {
      render () {
            return (
                <Card title="CrptoCurrency">
                    <Card.Grid style={gridStyle}>{this.props.cryptoData[0].price}: {this.props.cryptoData[0].symbol}</Card.Grid>
                    <Card.Grid hoverable={true} style={gridStyle}>
                    {this.props.cryptoData[1].price}: {this.props.cryptoData[1].symbol}
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>{this.props.cryptoData[2].price}: {this.props.cryptoData[2].symbol}</Card.Grid>
                    <Card.Grid style={gridStyle}>{this.props.cryptoData[3].price}: {this.props.cryptoData[3].symbol}</Card.Grid>

                </Card>
            )
      }
  }

  export default CardComponent