import './TextField.css'

export const TextField = props => {
  const { fieldName, onChange } = props

  return (
    <div className='text-field'>
      <label>
        {fieldName}
        <div>
          <input name={fieldName} type='text' onChange={onChange} />
        </div>
      </label>
    </div>
  )
}