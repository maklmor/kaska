import cx from 'classnames'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Checkboxes } from '../components/Checkboxes'
import { TextField } from '../components/TextField'
import { ERROR_MESSAGE, FOOD_DATA, SLEEPING_OPTIONS_ITEMS } from '../staticData'
import { getCounter, isNullOrEmpty, sendForm, updateCounter } from '../utils'
import { Radios } from '../components/Radios'
import { ImageCube } from '../components/ImageCube'

import './HomePage.css'

export const HomePage = props => {
  const [total, setTotal] = useState(0)
  const [errorCode, setErrorCode] = useState(0)
  const [isFormValid, setIsFormValid] = useState(true)
  const [numberOfRegistered, setNumberOfRegistered] = useState(null)
  const numberOfRegisteredLabel = isNullOrEmpty(numberOfRegistered) ? 'loading...' : 32 - numberOfRegistered
  const navigate = useNavigate()

  useEffect(() => {
    getCounter().then(value => setNumberOfRegistered(value || 0))
  }, [])

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
    if (!sendForm({...formJson, total })) {
      setErrorCode(2)
      return
    }
    updateCounter(numberOfRegistered + 1)
    navigate('/confirmation', { replace: false, state: { total }})
  }

  const validateForm = formJson => {
    const isValidForm = Object.values(formJson).find(isNullOrEmpty) === undefined
    setIsFormValid(isValidForm)
    return isValidForm
  }

  return (
    <div className='whole-page'>
      <h1>Operacia: Kaska</h1>
      <h3>14. - 16.7.2023, Jasenska dolina</h3>
      <img className='date-change-warning' src='FIRE_30deg.gif' alt='POZOR !!! ZMENA DATUMU' />


      <form method='post' onSubmit={handleSubmitClick}>
        <div className='text-fields'>
          <TextField fieldName='Meno:' />
          <TextField fieldName='Kontakt:' />
        </div>
        <Checkboxes fieldName={`Lôžka:  (ostava ${numberOfRegisteredLabel} posteli)`} items={SLEEPING_OPTIONS_ITEMS} paymentHandle={setTotal} />
        {FOOD_DATA.map(day => <Radios fieldName={day.fieldName} data={day} paymentHandle={setTotal} key={day.fieldName} />)}
        <div className='total'>
          <h2>{`${total}€`}</h2>
        </div>
        <h2>Na co sa mozte tesit:</h2>
        <ImageCube />
        <div className='submit-button-div'>
          <h4 className={cx('error-message', { hidden: isFormValid })}>{ERROR_MESSAGE[errorCode]}</h4>
          <button className='submit' type="submit">PRIDEM SA ROZJEBAT</button>
        </div>
      </form>
    </div>
  )
}