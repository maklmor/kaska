import cx from 'classnames'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Checkboxes } from '../components/Checkboxes'
import { TextField } from '../components/TextField'
import { ERROR_MESSAGE, SLEEPING_OPTIONS_ITEMS } from '../staticData'
import { isNullOrEmpty, sendForm } from '../utils'
import './HomePage.css'

export const HomePage = () => {
  const [total, setTotal] = useState(0)
  const [errorCode, setErrorCode] = useState(0)
  const [isFormValid, setIsFormValid] = useState(true)
  const navigate = useNavigate()


  const handleSubmitClick = e => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())

    console.log(formData, formJson, Object.values(formJson).find(isNullOrEmpty) === undefined)

    if (!validateForm(formJson)) { // This prevents user from sending a faulty form
      setErrorCode(1)
      return
    }
    if (!sendForm(formJson)) {
      setErrorCode(2)
      return
    }
    navigate('/confirmation')
  }

  const validateForm = formJson => {
    const isValidForm = Object.values(formJson).find(isNullOrEmpty) === undefined
    setIsFormValid(isValidForm)
    return isValidForm
  }

  return (
    <div>
      <h1>Operacia: Kaska</h1>
      <h3>7. - 9.7.2023, Jasenska dolina</h3>

      <form method='post' onSubmit={handleSubmitClick}>
        <TextField fieldName='Meno:' />
        {/* <br/> */}
        <TextField fieldName='Kontakt:' />
        <Checkboxes fieldName='Lôžka:' items={SLEEPING_OPTIONS_ITEMS} paymentHandle={setTotal} />
        <div className='total'>
          <h2>{`${total}€`}</h2>
        </div>
        <button type="submit">PRIDEM SA ROZJEBAT</button>
      </form>
      <h4 className={cx('error-message', { hidden: isFormValid })}>{ERROR_MESSAGE[errorCode]}</h4>

    </div>
  )
}