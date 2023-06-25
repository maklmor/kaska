

export const Checkboxes = props => {
  const { fieldName, items, onChange, paymentHandle } = props

  const payment = e => {
    paymentHandle(val => e.target.checked ? val + 15 : val - 15 )
  }

  const renderCheckbox = item => (
    <label>
      {item.title}
      <input name={item.value} type='checkbox' onChange={onChange || payment} key={item.value} />
    </label>
  )

  return (
    <div className='checkboxes' >
      <div className='fieldName'>{fieldName}</div>
      {items.map(renderCheckbox)}
    </div>
  )
}