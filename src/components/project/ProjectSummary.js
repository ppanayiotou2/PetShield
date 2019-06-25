import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card project-summary mb-3">
      <div className="card-body">
        <span className="card-title">{project.title}</span>
        <p>
          Posted by {project.firstName} {project.lastName}
        </p>
        <p>{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
