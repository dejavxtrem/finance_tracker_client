import React from 'react';
import { Table, Tag, Space } from 'antd';
import './bankinformation.css'
import NewForm from '../Newform'


class BankInfo extends React.Component {
  
 columns = [
    {
      title: 'Bank',
      dataIndex: 'Bank',
      render: text => <a>{text}</a>,
      className: 'tablehead'
    },
    {
      title: 'Account',
      dataIndex: 'Account',
      render: text => <a>{text}</a>,
      className: 'tablehead'
    },
    {
      title: 'Routing',
      dataIndex: 'Routing',
      render: text => <a>{text}</a>,
      className: 'tablehead'
    },
    {
      title: 'IBAN',
      dataIndex: 'IBAN',
      render: text => <a>{text}</a>,
      className: 'tablehead'
    }
  ];


    render () {
    
      let dataSource = []
    if (this.props.userData.bankinformations) {
      dataSource = [
        {
          key: '1',
          Bank: this.props.userData.bankinformations[0].bankname,
          Account: this.props.userData.bankinformations[0].accountnumber,
          Routing: this.props.userData.bankinformations[0].routingnumber,
          IBAN: this.props.userData.bankinformations[0].bankiban,
        },
        {
          key: '2',
          Bank: this.props.userData.bankinformations[1].bankname,
          Account: this.props.userData.bankinformations[1].accountnumber,
          Routing: this.props.userData.bankinformations[1].routingnumber,
          IBAN: this.props.userData.bankinformations[1].bankiban,
        },
        { key: '3',
          Bank: this.props.userData.bankinformations[2].bankname,
          Account: this.props.userData.bankinformations[2].accountnumber,
          Routing: this.props.userData.bankinformations[2].routingnumber,
          IBAN: this.props.userData.bankinformations[2].bankiban,
        },
        { key: '4',
          Bank: this.props.userData.bankinformations[3].bankname,
          Account: this.props.userData.bankinformations[3].accountnumber,
          Routing: this.props.userData.bankinformations[3].routingnumber,
          IBAN: this.props.userData.bankinformations[3].bankiban,
        },
        { key: '5',
          Bank: this.props.userData.bankinformations[4].bankname,
          Account: this.props.userData.bankinformations[4].accountnumber,
          Routing: this.props.userData.bankinformations[4].routingnumber,
          IBAN: this.props.userData.bankinformations[4].bankiban,
        },
        { key: '6',
        Bank: this.props.userData.bankinformations[5].bankname,
        Account: this.props.userData.bankinformations[5].accountnumber,
        Routing: this.props.userData.bankinformations[5].routingnumber,
        IBAN: this.props.userData.bankinformations[5].bankiban,
      },
      { key: '7',
        Bank: this.props.userData.bankinformations[6].bankname,
        Account: this.props.userData.bankinformations[6].accountnumber,
        Routing: this.props.userData.bankinformations[6].routingnumber,
        IBAN: this.props.userData.bankinformations[6].bankiban,
      },
      ]
    }
       
      
      //{this.props.userData.name
        return (
          <>
            <Table columns={this.columns} dataSource={dataSource} size="middle"  pagination= {false} className="tablecontent"/>
            <NewForm baseURL={this.props.baseURL}/>
          </>
        )
    }
}

export default BankInfo;