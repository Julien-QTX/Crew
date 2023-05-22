import React from 'react';

import './header.css';

function Header() {
    return (
        <div className="divsection_hero" >
            <div className="divsection_header" >
                <div className="h1heading-text-crossed" >
                    <p className="ats-for-talent-acquisition-managers valign-text-middle" >
                        ATS for Talent Acquisition Managers
                    </p>
                    <img
                        className="svg"

                        src="https://anima-uploads.s3.amazonaws.com/projects/645b5624ce79d97420db659b/releases/6461ea789b918de6fa40c26c/img/svg.svg"
                        alt="svg"
                    />
                    <h1 className="title valign-text-middle" >
                        Recruiting CRM for Teams
                    </h1>
                </div>
                <p className="it-takes-a-team-to-w valign-text-middle" >
                    It takes a team to win the talent war. Crew brings everyone into the hiring process, from sourcing to
                    <br />
                    closing. So you can hire the A-Players your moonshot mission needs, much faster!
                </p>
                <DivprimaryButtonComponent />
                <div className="featuredsvg" >
                </div>
                <div className='divpadding-section-small'>
                    <p className="trusted-by-modern-te valign-text-middel">
                        Trusted by modern teams at fast-growing companies
                    </p>
                    <img className="divlogos" scr="div-logos.svg" alt='div.logos' />
                </div>
            </div>
        </div>
    );
}

export default Header;

function DivprimaryButtonComponent() {
    return (
        <div className="divprimary-button_component" >
            <div className="divprimary-button_ghost" >
                <div className="divprimary-button_ghost_left" ></div>
                <div className="divprimary-button_ghost_right" ></div>
            </div>
            <div className="abutton-3" >
                <div className="sign-up valign-text-middle" >
                    <a className='sigun-up-button' href='#'>Sign up</a>
                </div>
            </div>
        </div>
    );
}

