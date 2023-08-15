import React from "react";

export default function Contact(){
    return <div className="contact-form row section">
    <div className="col-sm-6">
    <h3>Contact Me</h3>
      <div><i className="cib-gmail"></i>adityauday2002@gmail.com</div>
      <div><i className="fa-solid fa-phone"></i>0123456789</div>
      <div className="social-media">
      <a className="cib-linkedin"></a>
      <a className="cib-facebook"></a>
      <a className="cib-instagram"></a>
      <a className="cib-twitter"></a>
      </div>
    </div>
    <div className="col-sm-6">
      <form>
        <input placeholder="Name" name="name" ></input>
        <input placeholder="E-mail" name="email"></input>
        <textarea rows={4} placeholder="Enter your message" name="msg"></textarea>
      </form>
    </div>
  </div>
}