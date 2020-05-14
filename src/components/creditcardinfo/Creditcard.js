import React from 'react';
import { Table, Tag, Space } from 'antd';
import { Spin } from 'antd';
import './creditcard.css'


class CreditCardInfo extends React.Component {
  columns = [
    {
      title: 'Creditcard',
      dataIndex: 'Creditcard',
      render: text => <a>{text}</a>,
      className: 'tablehead'
    },
    {
      title: 'Merchant',
      dataIndex: 'Merchant',
      render: text => <a>{text}</a>,
      className: 'tablehead'
    },
    {
      title: 'Amount $',
      dataIndex: 'Amount',
      render: text => <a>{text}</a>,
      className: 'tablehead'
    },
    {
      title: 'Number',
      dataIndex: 'Number',
      render: text => <a>{text}</a>,
      className: 'tablehead'
    }
  ];
      
    render () {
      console.log(this.props.userData)
      let dataSource = []
      if (this.props.userData.creditcards) {
        dataSource = [
          {
            key: '1',
            Creditcard: this.props.userData.creditcards[0].creditcard_company,
            Merchant: this.props.userData.creditcards[0].merchant_name,
            Amount: this.props.userData.creditcards[0].amount,
            Number: this.props.userData.creditcards[0].creditcard_number,
          },
          {
            key: '2',
            Creditcard: this.props.userData.creditcards[1].creditcard_company,
            Merchant: this.props.userData.creditcards[1].merchant_name,
            Amount: this.props.userData.creditcards[1].amount,
            Number: this.props.userData.creditcards[1].creditcard_number,
          },
          {
            Creditcard: this.props.userData.creditcards[2].creditcard_company,
            Merchant: this.props.userData.creditcards[2].merchant_name,
            Amount: this.props.userData.creditcards[2].amount,
            Number: this.props.userData.creditcards[2].creditcard_number,
          },
          {
            Creditcard: this.props.userData.creditcards[3].creditcard_company,
            Merchant: this.props.userData.creditcards[3].merchant_name,
            Amount: this.props.userData.creditcards[3].amount,
            Number: this.props.userData.creditcards[3].creditcard_number,
          }
        ]
      }

        return (
          <>
            <Table columns={this.columns}  dataSource={dataSource} size="middle" loading={false} pagination={false}  className="creditcardcontent"/>
          </>
        )
    
}
}

export default CreditCardInfo;