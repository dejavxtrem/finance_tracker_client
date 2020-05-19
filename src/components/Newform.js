import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import './newform.css'


class NewForm extends React.Component {
    state = {
        bankname: "",
        accountnumber: "",
        routingnumber: "",
        bankiban: ""
      };

      handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value})
      }

      handleSubmit = (event)=> {
        console.log('form submitted')
        event.preventDefault();
        fetch("http://localhost:3000/users/1/bankinformations", {
          method: "POST",
          body: JSON.stringify({ bankname: this.state.bankname,
        accountnumber: this.state.accountnumber, routingnumber: this.state.routingnumber,
        bankiban: this.state.bankiban}),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => console.log(res.json()))
          .then(console.log('hello'))
          // .then(resJson => {
          //   this.props.handleAddHoliday(resJson);
          //   this.setState({
          //       bankname: "",
          //       accountnumber: " ",
          //       routingnumber: '',
          //       bankiban: " "
          //   });
          // })
          .catch(error => console.error({ Error: error }));
      };


    render () {
        return (
            <div className="formclass">
                  <form onSubmit={this.handlesubmit} layout={this.vertical}>
                  <Form.Item label="Bankname">
                    <Input placeholder="bankname" id ="bankname" name="bankname" onChange={this.handleChange} value={this.state.bankname}/>
                    </Form.Item>
                    <Form.Item label="AccountNumber">
                    <Input placeholder="accountnumber" id="accountnumber" name="accountnumber" onChange={this.handleChange} value={this.state.accountnumber}/>
                    </Form.Item>
                    <Form.Item label="Routing">
                    <Input placeholder="routingnumber" id="routingnumber" name="routingnumber" onChange={this.handleChange} value={this.state.routingnumber} />
                    </Form.Item>
                    <Form.Item label="BankIban">
                    <Input placeholder="bankiban" id="bankiban"  name="bankiban" onChange={this.handleChange} value={this.state.bankiban}/>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </form>
            </div>
          
        )
    }
}


export default NewForm;