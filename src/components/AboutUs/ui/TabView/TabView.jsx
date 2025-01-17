import { useState } from 'react';
import './TabView.scss';


const TabView = ({ data }) => {
  const [SelectedService, setSelectedService] = useState(0)
  return (
    <div className='tabview'>
      <div className="left"
      >
        {data?.map((val, i) => {
          return <div key={i} className='tab_bar'
            onMouseOver={() => setSelectedService(i)}
            onMouseLeave={() => setSelectedService(0)}
            style={{
              color: i === SelectedService ? "black" : "gray",
              borderLeftColor: i === SelectedService ? "black" : "gray",

            }}
          >
            <button>{val?.title}</button>
          </div>
        })}
      </div>
      <div className="right">
        {data?.[SelectedService]?.img && <img src={data?.[SelectedService]?.img} alt="" />}
        <h3>{data?.[SelectedService]?.title}</h3>
        <p>{data?.[SelectedService]?.desc}        </p>

      </div>
    </div>
  )
}

export default TabView


