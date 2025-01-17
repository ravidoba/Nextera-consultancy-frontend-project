import { useNavigate } from "react-router-dom";
import "./ServiceList.scss";

const ServiceList = ({ data, showbtn = false }) => {
  const router  =useNavigate();
  return (
    <div className="service-list">
      {data?.map((service,i) => (
        <div key={i} className="service-item" onClick={()=>router(service?.link)}>
          {service?.id && <div className="id">
            <span className="service-id">{service.id}</span>
          </div>}
          <div className="service-header">
            <div className="head">
              <h3 className="service-title">{service.title}</h3>
              {service.description && <p className="service-description">{service.description}</p>}
            </div>
          </div>
          <div className="serv_iccon">
            <ul>
            {service?.logo?.map((val,i)=>{
              return <li key={i}>
                <img src={val?.src} alt="lo"/>
              </li>
            })}
            </ul>
            {showbtn && <div className="btn_s">
              <button className="service-button" onClick={()=>router(service?.link)}>
                <span className="arrow">➔</span>
              </button>
            </div>}
          </div>

        </div>
      ))}
    </div>
  );
};

export default ServiceList;
