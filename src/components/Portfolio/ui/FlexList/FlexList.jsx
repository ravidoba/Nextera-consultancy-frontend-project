import './FlexList.scss'

const FlexList = ({ list }) => {
    return (
        <div className='flexlist'>
            {list?.map((val, i) => {
                return <div key={i} className="flex_items_list">
                    <div className="left">
                        <img src={val?.src} alt="" />
                    </div>
                    <div className="right">
                        <h3>{val?.title}</h3>
                        <p>{val?.desc}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default FlexList