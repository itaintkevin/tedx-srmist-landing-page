import React from 'react';
import './Team.css';
import info from '../Team/TeamDetails.jsx';

import linkedin from './images/linkedin.svg';
import github from './images/github.svg';
import twitter from './images/twitter.svg';
import portfolio from './images/portfolio.svg';
import user from './images/user.svg';


const TeamMember = () => {
    let slider = document.querySelector('.Members');
    const slideLeft = () => {
        let width = slider.offsetWidth;
        slider.scrollLeft = slider.scrollLeft - width;
    }
    const slideRight = () => {
        let width = slider.clientWidth;
        slider.scrollLeft = slider.scrollLeft + width;
    }
    return(
        <div className="Members">
            <button className="prev-btn" onClick={slideLeft}><p>&lt;</p></button>
            {info.map((info) => {
                return(
                    <div className="Member">
                        <div className="Member-Img">
                            <img className="profile" src={user} alt={info.name}/>
                        </div>
                        <div className="member-name">
                            {info.name}
                        </div>

                        <div className="socials">
                            <a className="linkedin" href={info.linkedinURL}>
                                <img className="socials-icon" src={linkedin} alt="linkedin"/>
                            </a>
                            <a className="github" href={info.githubURL}>
                                <img className="socials-icon" src={github} alt="github"/>
                            </a>
                            <a className="twitter" href={info.twitterURL}>
                                <img className="socials-icon" src={twitter} alt="twitter"/>
                            </a>
                            <a className="portfolio" href={info.portfolioURL}>
                                <img className="socials-icon" src={portfolio} alt="portfolio"/>
                            </a>
                        </div>
                        <div className="member-tagline">
                            {info.tagline}
                        </div>
                    </div>
                );
            })}
            <button className="next-btn" onClick={slideRight}><p>&gt;</p></button>
        </div>
    );
}

const Team = () => {
    return(
        <div className="Team">
            <div className="Team-Title">
                Our Team
            </div>
            <div className="Team-SubTitle">
                Year 2022-23
            </div>
            <div className="Team-Grid">
                <TeamMember />
            </div>
        </div>
    );
}

export default Team;