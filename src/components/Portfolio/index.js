// import React and useState method
import React, { useState } from 'react';

// import Project component for use in rendering of Portfolios
import Project from '../Project';

function Portfolio() {
    // array of my deployed projects with name. description, URL of deployed app and repo
    const [projects] = useState([
        {
            name: 'daily_dashboard',
            description: 'This WebApp allows a user to see the some Weather information and a few News Headlines in a simple single page design.',
            url: 'https://leggeamy.github.io/Daily-Dashboard/',
            repo: 'https://github.com/leggeamy/Daily-Dashboard'
        },
        {
            name: 'password_generator',
            description: 'This application generates a random password between 8 and 128 characters in length.',
            url: 'https://sterlynkong.github.io/password-generator/',
            repo: 'https://github.com/SterlynKong/password-generator'
        },
        {
            name: 'ibudget',
            description: 'A budget tracker webapp that can be run in online and offline mode.',
            url: 'https://ibudg3t.herokuapp.com/',
            repo: 'https://github.com/SterlynKong/ibudget'
        },
        {
            name: 'daily_planner',
            description: 'This application allows a user to create a simple day schedule to track work progress',
            url: 'https://sterlynkong.github.io/daily-planner/',
            repo: 'https://github.com/SterlynKong/daily-planner'
        },
        {
            name: 'note_taker',
            description: 'A simple note taking app',
            url: 'https://not3-tak3r.herokuapp.com/',
            repo: 'https://github.com/SterlynKong/note-taker'
        },
        {
            name: 'code_quiz',
            description: 'This is a short quiz about javascript that tests beginner knowledge',
            url: 'https://sterlynkong.github.io/code-quiz/',
            repo: 'https://github.com/SterlynKong/code-quiz'
        }

    ]);

    // make Project available to Portfolio component
    return (
        <div>
            <div className="flex-row">
                {projects.map((project, index) => (
                    <Project project={project} key={'project' + index} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;

