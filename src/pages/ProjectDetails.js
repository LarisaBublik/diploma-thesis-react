import React from "react";
import { useParams, Link } from "react-router-dom";

import projects from "../data/projects";

const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return <div>Проект не найден</div>;
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">{project.title}</h1>

      <div className="row g-4 mb-5">
        {project.images.map((img, index) => (
          <div className="col-12 col-md-6" key={index}>
            <img
              src={img}
              alt={`${project.title} - пример ${index + 1}`}
              className="img-fluid rounded shadow"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/portfolio" className="btn btn-outline-secondary">
          ← Вернуться к портфолио
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
