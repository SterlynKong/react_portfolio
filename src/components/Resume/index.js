// import react
import React from 'react';

// render resume - jsx
function Resume() {
    return (
        <section className='my-5'>
            <div className='my-2'>
                <p> View my Resume on <a href='https://www.linkedin.com/in/sterlyn-k-487144bb'>linkedin.</a></p>
                <h3>Skills with front-end code include:</h3>
                <ul className='skills'>
                    {/*My Favourite*/}
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    {/*Prefer to use libraries for responsive design*/}
                    <li>Mobile first Responsive Design</li>
                    <li>Bootstrap and other similar libraries</li>
                    {/*React is cool*/}
                    <li>React</li>
                </ul>
                <h3>Skills with back-end technologies include:</h3>
                <ul className='skills'>
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>APIs</li>
                    <li>MongoDB (with Mongoose)</li>
                    <li>MySQL (with sequelize)</li>
                </ul>
            </div>
        </section >
    );
};

export default Resume;