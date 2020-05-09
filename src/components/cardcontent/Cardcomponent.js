import React from 'react';
import { Card } from 'antd';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

  class CardComponent extends React.Component {
      render () {
            return (
                <Card title="Card Title">
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle}>
                    Content
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                </Card>
            )
      }
  }

  export default CardComponent