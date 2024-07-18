import '../assets/vendors/themify-icons/css/themify-icons.css';
import '../assets/css/johndoe.css';

function About() {
    return (
        <div className="container-fluid">
            <div id="about" className="row about-section">
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Who am I ?</h3>
                    <span className="line mb-5"></span>
                    <h5 className="mb-3">A Software Engineer Located In Ahmedabad</h5>
                    <p className="mt-20">I having 2 year experience in Dot Net Core Web API, MS-SQL Server, React JS and React Native.</p>
                    {/* <button className="btn btn-outline-danger"><i className="icon-down-circled2 "></i>Download My CV</button> */}
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Personal Info</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        <li><span>Birthdate</span> : 08/20/1998</li>
                        <li><span>Email</span> : sachinsahare468@gmail.com</li>
                        <li><span>Phone</span> : + (91) 7709752814</li>
                        <li><span>Instagram</span> : official_sachindra_b_sahare </li>
                        <li><span>Address</span> :  52, Palandurkar Lay-Out Dabha Road, Wadi Nagpur, Maharashtra, India.</li>
                    </ul>
                    <ul className="social-icons pt-3">
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-facebook" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-twitter" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-google" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                        {/* <li className="social-item"><a className="social-link" href="#"><i className="ti-github" aria-hidden="true"></i></a></li> */}
                    </ul>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">My Expertise</h3>
                    <span className="line mb-5"></span>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Backend Development</h6>
                            <p className="subtitle"> Develope asp.net core web api.</p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>API Implementation</h6>
                            <p className="subtitle">Implement web api on react js and react native.</p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Ms-SQL Server</h6>
                            <p className="subtitle">Create query, stored procedured, function in ms-sql server. </p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;