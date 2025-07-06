import './index.scss'

const ProjectCard = ({ title, description, image, link, tags, color }) => {
    return (
        <div className="project-card" style={{ backgroundColor: color }}>
            <img src={image} alt={title} className="project-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <div className="card-tags">
                {tags.map((tag, index) => (
                <span className="tag" key={index}>{tag}</span>
                ))}
            </div>
            {link && (
                <a href={link} target="_blank" rel="nooperner noreferrer" className="project-link">
                    View Project
                </a>
            )}
        </div>
    );
};

export default ProjectCard;