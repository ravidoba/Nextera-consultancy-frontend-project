import './ProfileGrid.scss'

const ProfileGrid = () => {
  return (
    <div className='ProfileGrid'>
      {Array.from({ length: 3 }).map((_, i) => {
        return <div key={i} className="pg_box">
          {i}
        </div>
      })}
    </div>
  )
}

export default ProfileGrid