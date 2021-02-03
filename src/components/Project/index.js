import React from 'react';

function Project({ project }) {
    // declare the project variable equal to an object containing specific properties
    const { name, description, url, repo } = project;

    // render project Object
    return (
        <div className="project" key={name}>
            <img src={require(`../../assets/projects/${name}.png`).default} alt={(name)} className="project-bg" />
            <div className="project-text">
                <h3>
                    <a href={url} target='_blank' rel='noopener noreferrer'>{(name)}</a>
                    <a href={repo}><i className="fa fa-github"></i></a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Project;