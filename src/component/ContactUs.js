import '../assets/vendors/themify-icons/css/themify-icons.css';
import '../assets/css/johndoe.css';
import { useState } from 'react';

function ContactUs() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const onClickSubmit = () => {
        if (name === '' || email === '' || comment === '') {
            alert('please fill all field.')
        } else {
            alert('Thank you for send message.')
            console.log("Name :: ", name, '\n', "Email ::", email, '\n', "Message ::", comment);
            setName();
            setEmail();
            setComment()
        }
    }

    return (
        <div className="section contact" id="contact">
            <div id="map" className="map"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="contact-form-card">
                            <h4 className="contact-title">Send a message</h4>
                            <form action="">
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Name *"
                                        value={name === undefined ? '' : name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="Email *"
                                        value={email === undefined ? '' : email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        id=""
                                        placeholder="Message"
                                        rows="7"
                                        value={comment === undefined ? '' : comment}
                                        onChange={(e) => {
                                            setComment(e.target.value);
                                        }}
                                    ></textarea>
                                </div>
                                <div className="form-group ">
                                    <button
                                        type="submit"
                                        className="form-control btn btn-primary"
                                        onClick={() => { onClickSubmit() }}
                                    >Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-info-card">
                            <h4 className="contact-title">Get in touch</h4>
                            <div className="row mb-2">
                                <div className="col-1 pt-1 mr-1">
                                    <i className="ti-mobile icon-md"></i>
                                </div>
                                <div className="col-10 ">
                                    <h6 className="d-inline">Phone : <br /> <span className="text-muted">+ (91) 7709752814</span></h6>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-1 pt-1 mr-1">
                                    <i className="ti-map-alt icon-md"></i>
                                </div>
                                <div className="col-10">
                                    <h6 className="d-inline">Address :<br /> <span className="text-muted">52, Palandurkar Lay-Out Dabha Road, Wadi Nagpur, Maharashtra, India.</span></h6>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-1 pt-1 mr-1">
                                    <i className="ti-envelope icon-md"></i>
                                </div>
                                <div className="col-10">
                                    <h6 className="d-inline">Email :<br /> <span className="text-muted">sachinsahare468@gmail.com</span></h6>
                                </div>
                            </div>
                            <ul className="social-icons pt-4">
                                <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-facebook" aria-hidden="true"></i></a></li>
                                <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-twitter" aria-hidden="true"></i></a></li>
                                <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-google" aria-hidden="true"></i></a></li>
                                <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                                <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-github" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
}
export default ContactUs;