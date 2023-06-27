import './Checkboxes.css'

export const Checkboxes = props => {
  const { fieldName, items, onChange, paymentHandle } = props

  const payment = e => {
    paymentHandle(val => e.target.checked ? val + 15 : val - 15 )
  }

  const renderCheckbox = item => (
    <label key={item.value} >
      {item.title}
      <input name={item.value} type='checkbox' onChange={onChange || payment} />
    </label>
  )

  return (
    <div className='checkboxes' >
      <div className='title'>{fieldName}</div>
      <div className='items'>
        {items.map(renderCheckbox)}
      </div>
    </div>
  )
}