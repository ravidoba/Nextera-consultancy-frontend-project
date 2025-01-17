import './TitleBar.scss'

const TitleBar = ({title}) => {
  return (
    <div className='TitleBar'>
        <h1>{title}</h1>
    </div>
  )
}

export default TitleBar