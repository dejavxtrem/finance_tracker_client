import React from 'react';
import { Table, Tag, Space } from 'antd';
import './expenses.css';


class ExpensesInfo extends React.Component {
 

 columns = [
          {
            title: 'Bill',
            dataIndex: 'Bill',
            render: text => <a>{text}</a>,
            className: 'tablehead'
          },
          {
            title: 'Company',
            dataIndex: 'Company',
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
            title: 'DueDate',
            dataIndex: 'DueDate',
            render: text => <a>{text}</a>,
            className: 'tablehead'
          }
      ];
      
      
    render () {
     // console.log(this.props)
      let dataSource = []
      if (this.props.userData.creditcards) {
        dataSource = [
          {
            key: '1',
            Bill: this.props.userData.billexpenses[0].billtype,
            Company: this.props.userData.billexpenses[0].companyname,
            Amount: this.props.userData.billexpenses[0].amount,
            DueDate: this.props.userData.billexpenses[0].due_date,
          },
          {
            key: '2',
            Bill: this.props.userData.billexpenses[1].billtype,
            Company: this.props.userData.billexpenses[1].companyname,
            Amount: this.props.userData.billexpenses[1].amount,
            DueDate: this.props.userData.billexpenses[1].due_date,
          },
          {
            Bill: this.props.userData.billexpenses[2].billtype,
            Company: this.props.userData.billexpenses[2].companyname,
            Amount: this.props.userData.billexpenses[2].amount,
            DueDate: this.props.userData.billexpenses[2].due_date,
          },
          {
            Bill: this.props.userData.billexpenses[3].billtype,
            Company: this.props.userData.billexpenses[3].companyname,
            Amount: this.props.userData.billexpenses[3].amount,
            DueDate: this.props.userData.billexpenses[3].due_date,
          },
          {
            Bill: this.props.userData.billexpenses[4].billtype,
            Company: this.props.userData.billexpenses[4].companyname,
            Amount: this.props.userData.billexpenses[4].amount,
            DueDate: this.props.userData.billexpenses[4].due_date,
          }
        ]
      }
        return (
            <Table columns={this.columns} dataSource={dataSource} pagination={false} className="creditcardcontent"/>
        )
    }
}

export default ExpensesInfo;