import React from 'react';

const Skills = () => {
    return (
        <div id='skills' className='bg-dark text-light container'>
            <h1>Skill</h1>
            _________________________________________
            ____________________
            <h3>HTML</h3>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '90%', backgroundColor: '#ff3399' }}  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
            <h3>CSS</h3>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '95%', backgroundColor: '#ff3399' }}  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
            </div>
            <h3>JAVA Script</h3>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '80%', backgroundColor: '#ff3399' }}  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
            </div>
            <h3>ReactJS</h3>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '85%', backgroundColor: '#ff3399' }}  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
            </div>
            <h3>MongoDB</h3>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '75%', backgroundColor: '#ff3399' }}  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>
        </div>
    );
};

export default Skills;