import './nav.css';
import { LuMenu } from 'react-icons/lu';

export default function Nav() {

    return (
        <nav className="navbar sticky-top navbar-expand-md mx-auto mt-md-4 fs-5 fw-bold">
            <div className="container-fluid">
                <a className="navbar-brand ms-2 ms-md-3" href="https://www.linkedin.com/in/valentina-belen-sanchez/">Valentina</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <LuMenu />
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <div className="navbar-nav text-center my-2 my-md-0 ms-md-5 column-gap-5 row-gap-2">
                        <a className="nav-link hover-underline-animation" href="#home">Home</a>
                        <a className="nav-link hover-underline-animation" href="#about">About</a>
                        <a className="nav-link hover-underline-animation" href="#projects">Projects</a>
                        <a className="nav-link hover-underline-animation" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}