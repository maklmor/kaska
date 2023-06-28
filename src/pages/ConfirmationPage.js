import { useLocation } from 'react-router'
import './ConfirmationPage.css'

export const ConfirmationPage = props => {
  const location = useLocation()
  const total = location?.state?.total || '(cenu sa nepodarilo nacitat)'
  console.log(location)
  return (
    <div className='whole-page'>
      <h1 className='confirmation-text'>
        Registracia bola uspesna 🚀✅
      </h1>
      <hr />
      <h3 className='money-text'>
        peniaze prosim poslite na ucet nizsie a do poznamky uvedte svoje meno
      </h3>
      <h4 className='iban'>💸 SK11 0200 0000 0039 3749 7857 💸</h4>
      <h3 className='total'>{`${total}€`}</h3>
      <footer className='footer-note' >
        <h4>(text vyyssie si mozte screenshotnut, aby ste nezabudli)</h4>
      </footer>
    </div>
  )
}