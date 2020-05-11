import React from 'react'
import MyContext from './ContextDetails';

// let apiKEY = process.env.REACT_APP_RAPID_API_KEY

class MyProvider extends React.Component {
    state = {
            amazonDetails: {},
            twitterDetails: {},
            googleDetails: {}
      }

      componentDidMount = () => {
        this.getStockData()
        // this.getTwitterData()
        // this.getGoogleData()
  }

  getStockData = () => {
    fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AMZN&apikey=UWNAMLQ2G73D7EZM', {
      "method": "GET",
    }).then(data => data.json(), err => console.log(err))
      .then(parsedData => this.setState({amazonDetails: parsedData}), err => console.log('parsedData', err))
  }

//   getTwitterData = () => {
//     fetch('https://alpha-vantage.p.rapidapi.com/query?datatype=json&function=GLOBAL_QUOTE&symbol=TWTR', {
//       "method": "GET",
//       headers: {
//        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
//        'x-rapidapi-key': `${apiKEY}`
 
 
//       }
//     }).then(data => data.json(), err => console.log(err))
//       .then(parsedData => this.setState({twitterDetails: parsedData}), err => console.log('parsedData', err))
//   }
 
//   getGoogleData = () => {
//     fetch('https://alpha-vantage.p.rapidapi.com/query?datatype=json&function=GLOBAL_QUOTE&symbol=CSCO', {
//       "method": "GET",
//       headers: {
//        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
//        'x-rapidapi-key': `${apiKEY}`
 
 
//       }
//     }).then(data => data.json(), err => console.log(err))
//       .then(parsedData => this.setState({googleDetails: parsedData}), err => console.log('parsedData', err))
//   }

   render () {
       return (
        <MyContext.Provider  value={this.state}>
             {this.props.children}
        </MyContext.Provider>
       )
   }

}

export default MyProvider;