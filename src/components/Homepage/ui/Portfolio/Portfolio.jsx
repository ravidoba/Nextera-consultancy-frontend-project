import { useNavigate } from 'react-router-dom';
import './PortfolioGrid.scss';
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function PortfolioGrid({ data, isTop }) {
  const router = useNavigate();
  const HandleNavigation = (link) => {
    router(link)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <section className="portfolio-grid" style={isTop && {
      paddingTop: '0'
    }}>
      {/* Projects Grid */}
      <div className="projects-grid">
        {data?.map((project, index) => (
          <div key={index} className={`project-card ${project.background}`}
            onClick={() => HandleNavigation(project?.link)}>
            <div className="image-container">
              <img
                src={project.image}
                alt={project.title}
                className="image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {(project?.title && project?.list) && <div className="overlay">
              <div className="left">
                <h3 className="project-title">{project.title}</h3>
                <ul className="list">
                  {project?.list?.map((val, i) => {
                    return <li key={i}>{val}</li>
                  })}
                </ul>
              </div>
              <div className="right">
                <h3 className="project-ico"><IoArrowForwardCircleOutline
                  size={52}
                /></h3>
              </div>
            </div>}
          </div>
        ))}
      </div>

      {/* Stats Section */}

    </section>
  );
}
