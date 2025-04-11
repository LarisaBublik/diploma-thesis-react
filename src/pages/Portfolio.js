// src/pages/Portfolio.js
import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const Portfolio = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Мои проекты</h1>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {projects.map((project, index) => (
          <div className="col" key={index}>
            <div className="card  shadow-sm">
              <img
                src={project.images[0]}
                className="card-img-top"
                alt={project.title}
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="btn btn-outline-secondary mb-4"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/" className="btn btn-outline-secondary mb-4">
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
