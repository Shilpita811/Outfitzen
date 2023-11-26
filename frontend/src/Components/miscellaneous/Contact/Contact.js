import React, { useEffect, useState } from 'react';
import './Contact.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Loader from '../Loader/Loader';
import { contact, clearErrors } from '../../../Action/otherAction';


const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const { error, loading } = useSelector((state) => state.other);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });

  const { name, email, phone, subject } = contactForm;

  const contactSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("phone", phone);
    myForm.append("subject", subject);
    dispatch(contact(myForm));
  }

  const contactDataChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
      console.log(error);
    }
    if (!loading) {
      alert.success("Response Successfully Send");
    }
  }, [dispatch, error, alert, loading, navigate]);

  return (
    <div>
      {loading ? <Loader /> : <div className="footer_get_touch_outer">
        <div className="container">
          <div className="footer_get_touch_inner grid-70-30">
            <div className="colmun-70 get_form">
              <div className="get_form_inner">
                <div className="get_form_inner_text">
                  <h3>Get In Touch</h3>
                </div>
                <form onSubmit={contactSubmit}>
                  <div className="grid-50-50">
                    <input type="text" placeholder="Full Name" name='name' value={contactForm.name} required onChange={contactDataChange} />
                    {/* <input type="text" placeholder="Last Name" /> */}
                    <input type="email" placeholder="Email" name='email' value={contactForm.email} required onChange={contactDataChange} />
                    <input type="text" placeholder="Phone/Skype" name='phone' value={contactForm.phone} required onChange={contactDataChange} />
                  </div>
                  <div className="grid-full">
                    <textarea placeholder="About Your Product" cols="30" rows="10" name='subject' value={contactForm.subject} required onChange={contactDataChange}></textarea>
                    <input type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
            <div className="colmun-30 get_say_form">
              <h5>Say Hi!</h5>
              <ul className="get_say_info_sec">
                <li>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:">info@stackfindover.com</a>
                </li>
                <li>
                  <i className="fa fa-whatsapp"></i>
                  <a href="tel:">+91 9602381997</a>
                </li>
                <li>
                  <i className="fa fa-skype"></i>
                  <a href="#">Stackfindover</a>
                </li>
              </ul>
              <ul className="get_say_social-icn">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>}

    </div>
  )
}

export default Contact