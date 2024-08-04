import React from 'react';
import './title.css';

const Title = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'resume.pdf';
        link.download = 'resume.pdf';
        link.click();
    };

    return (
        <div className="title-container">
            <h1>PIYUSH RAZDAN</h1>
            <p>Software Developer | Software Engineer</p>
            <div className="buttons">
                <button onClick={() => window.location = 'resume.pdf'}>View Resume</button>
                <button onClick={handleDownload}>Download Resume</button>
            </div>
        </div>
    );
};

export default Title;
