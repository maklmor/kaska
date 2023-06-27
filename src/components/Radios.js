import { useState } from 'react'
import './Radios.css'

export const Radios = props => {
  const { data, fieldName, paymentHandle } = props
  const { title, items,  defaultValue } = data
  const [currentValue, setCurrentValue] = useState(defaultValue)
  const prices = items.reduce((obj, item) => (obj[item.value] = item.price, obj), {})

  const handleOptionClick = e => {
    paymentHandle(price => price - prices[currentValue] + prices[e.target.value])
    setCurrentValue(e.target.value)
  }

  const renderRadios = item => (
    <label className='radio-label' key={item.title}>
      {item.title}
      <input
        name={fieldName}
        value={item.value}
        checked={currentValue === item.value}
        onClick={handleOptionClick}
        type='radio'
        required
        readOnly
        />
    </label>
  )

  return (
    <div className='radios'>
      <div className='title'>{title}</div>
      <hr/>
      {items.map(renderRadios)}
    </div>
  )
}