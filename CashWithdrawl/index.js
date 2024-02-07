// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {
    cash: 2000,
  }

  denominateAmount = amount => {
    const {cash} = this.state
    const money = parseInt(amount)
    const denomination = cash - money
    this.setState({
      cash: denomination,
    })
  }

  render() {
    const {denominationsList} = this.props
    const {cash} = this.state
    return (
      <div className="bg-container">
        <div className="withdraw-container">
          <div className="profile-container">
            <p className="profile">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{cash}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="amount-options">
            {denominationsList.map(eachDenom => (
              <DenominationItem
                id={eachDenom.id}
                value={eachDenom.value}
                denominateAmount={this.denominateAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
