import React from 'react'
import './logogrid.scss'

const LogoGrid = ({ icons, isHoverImage=false }) => {
  return (
    <div className='logo-list'>
      {icons?.map((val, i) => {
        return <div key={i} className={`logo_box ${val?.gap && 'notshow'}`}
          style={val?.height && {
            height: val?.height,
            gap: val?.gap
          }}
        >
          <img className={isHoverImage ? `img1` : 'img1only'} src={val?.img1} alt="img" />
          { <img className={ isHoverImage ? `img2` : 'img2only'} src={val?.img2} alt="img" />}
          <span style={val?.size && {
            fontSize: val?.size
          }}>  {val?.name}</span>
        </div>
      })}
    </div>
  )
}

export default LogoGrid