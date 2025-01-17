import './IndexMenu.scss';

const IndexMenu = ({data}) => {
  
    return (
        <div className='indexMenu'>
            <div className="main_menu">
                <div className="index_col">
                    <h3 className='index_title'>What We Did</h3>
                    <ul>
                       {data?.list?.map((val,i)=>{
                        return <li key={i}>{val}</li>
                       })}
                    </ul>
                </div>
                <div className="index_details">
                    <h3 className='index_title'>Overview</h3>
                    <ul>
                        <p>{data?.overview}</p>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default IndexMenu;

