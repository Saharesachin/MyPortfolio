import '../assets/vendors/themify-icons/css/themify-icons.css';
import '../assets/css/johndoe.css';

function ResumeSection() {
    return (
        <section className="section" id="resume">
            <div className="container">
                <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>Expertise</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">2022 - Present</h6>
                                <p>Software Engineer</p>
                                <p className="subtitle">Now i'm working with innkey infosystem pvt. ltd. Located in ahmedabad, gujrat.</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>Education</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">2020 - 2022</h6>
                                <p>Master Of Computer Application</p>
                                <p className="subtitle">DY Patil Institute of Management, Talegaon Ambi, Pune, Maharashtra.</p>
                                <hr />
                                <h6 className="title text-danger">2017 - 2020</h6>
                                <p>Bachelor of Commerce and Computer Application</p>
                                <p className="subtitle">Rashtrasant Tukdoji Maharaj Nagpur University.</p>
                                <hr />
                                <h6 className="title text-danger">2015 - 2017</h6>
                                <p>High School</p>
                                <p className="subtitle">GS College of Commerce and Economics Nagpur.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Skills</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body pb-2">
                                <h6>ASP.Net Core Web API</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: 200 }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>ASP.Net MVC</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: 150 }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>React JS</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: 100 }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>React Native</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: 100 }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>JavaScript</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: 90 }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>MS-SQL Server</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: 80 }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Languages</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body pb-2">
                                <h6>English</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: 200 }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Hindi</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: 400 }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Marathi</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: 400 }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="section bg-dark py-5">
                <div className="container text-center">
                    <h2 className="text-light mb-5 font-weight-normal">I Am Available For FreeLance</h2>
                    <button className="btn bg-primary w-lg" >Hire me</button>
                </div>
            </div> */}
            <hr/><hr/>
        </section>

    );
}
export default ResumeSection;