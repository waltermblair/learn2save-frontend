import React from 'react';
import axios from 'axios';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {accountID: 1,
                  balance: 0};
  }

  componentDidMount() {
    let url = process.env.REACT_APP_API_URL + process.env.REACT_APP_API_GET_ACCOUNT_PATH + this.state.accountID;
    console.log(`calling api @ ${url}`);
    axios.get(url)
      .then(res => {
        console.log("received data: " + res.data);
        const account = res.data;
        this.setState({balance: account.balance})
      })
  }

  render() {
    return (
      <div>Current Balance: {this.state.balance}</div>
    )
  }

}

export default Account;