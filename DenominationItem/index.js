// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, denominateAmount} = props
  const withdraw = () => {
    denominateAmount(value)
  }
  return (
    <li>
      <button type="button" className="value" onClick={withdraw}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
