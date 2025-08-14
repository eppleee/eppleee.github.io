import React from 'react';
import { Element } from 'react-scroll';
import './index.css';
import introImg from './assets/tree-branch.png';

function Header() {

    return (
        <>
            <Element name="home">
                <section className="header">
                    <div className="intro">
                        <span className="intro-name">Kourtney Giles</span>
                        <span className="intro-text">Web Developer</span>

                    </div>
                    <img src={introImg} alt="tree-branch" className="intro-image top-left" />
                    <img src={introImg} alt="tree-branch" className="intro-image bottom-right" />
                </section>
            </Element>
        </>
    );
}
export default Header;