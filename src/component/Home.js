import '../assets/vendors/themify-icons/css/themify-icons.css';
import '../assets/css/johndoe.css';
import avtar from '../assets/imgs/sachindra.jpg'
import About from './About';
import ResumeSection from './ResumeSection';
import ContactUs from './ContactUs';
import { useState } from 'react';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const getFullYear = new Date().getFullYear();
    const handleNavClick = () => {
        setMenuOpen(false);
    };
    return (
        <div data-spy="scroll" data-target=".navbar" data-offset="40" id='home'>
            {/* #region Header start */}
            <header className="header">
                <div className="container">
                    <ul className="social-icons pt-3">
                        <li className="social-item"><a className="social-link text-light" href="http://www.facebook.com/SachindraBSahare"><i className="ti-facebook" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-twitter" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link text-light" href="http://www.gmail.com"><i className="ti-google" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link text-light" href="http://www.instagram.com/official_sachindra_b_sahare"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                        {/* <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-github" aria-hidden="true"></i></a></li> */}
                    </ul>
                    <div className="header-content">
                        <span title="follow on instagram official_sachindra_b_sahare">
                            <h4 className="header-subtitle" >Hello, I am</h4>
                            <h3 className="header-title">Sachindra B. Sahare</h3>
                            <h6 className="header-mono" >Software Engineer</h6>
                        </span>
                        {/* <button className="btn btn-primary btn-rounded"><i className="ti-printer pr-2"></i>Print Resume</button> */}
                    </div>
                </div>
            </header>
            {/* #endregion */}
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
                <div className="container">
                    <button
                        className="navbar-toggler ml-auto"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={(e) => {
                            setMenuOpen(!menuOpen);
                            console.log(menuOpen)
                        }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse  ${menuOpen ? "show" : ""}`} id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a href="#home" className="nav-link" activeClassName="active" onClick={handleNavClick}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link" activeClassName="active" onClick={handleNavClick}>About</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav brand">
                            <span title="follow on instagram official_sachindra_b_sahare">
                                <img src={avtar} alt="" className="brand-img" />
                                <li className="brand-txt">
                                    <h5 className="brand-title">Sachindra B. Sahare</h5>
                                    <div className="brand-subtitle">Dot Net Developer</div>
                                </li>
                            </span>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#resume" className="nav-link" activeClassName="active" onClick={handleNavClick}>Resume</a>
                            </li>
                            <li className="nav-item last-item">
                                <a href="#contact" className="nav-link" activeClassName="active" onClick={handleNavClick}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <About />
            <ResumeSection />
            <ContactUs />
            <footer className="footer py-3">
                <div className="container">
                    <p className="small mb-0 text-light">
                        &copy;{getFullYear} Created With <i className="ti-heart text-danger"></i> By <a href="#" target="_blank"><span className="text-danger" title="follow on instagram official_sachindra_b_sahare">Sachindra</span></a>
                    </p>
                </div>
            </footer>
        </div>
    );
}
export default Home;