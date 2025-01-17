import { MdArrowOutward } from 'react-icons/md'
import './btn.scss'
const ButtonF = ({title='submit',type='button'}) => {
  return (
  <button className="btn" type={type}>
     {title} <span className='icon_up'><MdArrowOutward size={20}/></span>
   </button>
  )
}

export default ButtonF