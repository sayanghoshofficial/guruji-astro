import React from "react";
import style from "../Styles/footer.module.css";
import Style from "../Styles/navbar.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const handledOnClick = (e)=>{
    e.preventDefault();
    toast.success("Your Query Submited Successfully...",{
      position:"top-left",
      theme:"colored"
    })
  }
  return (
    <div className={style.footerFullDiv}>
      <div className={style.aboutDiv}>
        <div className={Style.navbarLogo}>
          <img
            src="https://user-images.githubusercontent.com/99132893/232487978-470f10f8-1077-4fc2-b691-c9ed4859dd21.jpg"
            alt="web-logo"
          />
          &nbsp;
          <span>Guruji</span>
        </div>
        <div className={style.about}>
          <p>
            About Guruji s2 to 3 lines what guruji do and how it works About
            Guruji s2 to 3 lines what guruji do and how it works
          </p>
        </div>
        <div className={style.socialMedia}>
          <div className={style.logoDiv}>
            <img
              src="https://user-images.githubusercontent.com/99132893/233530372-209cea34-844d-40f2-a6f8-fb47d84bc46b.png"
              alt="facebook"
            />
          </div>
          <div className={style.logoDiv}>
            <img
              src="https://user-images.githubusercontent.com/99132893/233530681-823ca6b9-90e9-44d2-bb11-296f5702d935.png"
              alt="instagram"
            />
          </div>
          <div className={style.logoDiv}>
            <img
              src="https://user-images.githubusercontent.com/99132893/233530879-e729b0b6-8bc4-43aa-a8e4-b323b2044200.png"
              alt="twiter"
            />
          </div>
          <div className={style.logoDiv}>
            <img
              src="https://user-images.githubusercontent.com/99132893/233531042-fbf67580-9fed-45b3-aa18-1e2e03d29450.png"
              alt="youtube"
            />
          </div>
        </div>
        <div className={style.seals}>
          <b>Trusted & Seals</b>
          <div className={style.sealsLogoBox}>
            <div className={style.sealDiv}>
              <img
                src="https://user-images.githubusercontent.com/99132893/233533868-98a66dee-e89a-4808-a063-6950d56e44ee.png"
                alt="razorpay"
              />
            </div>
            <div className={style.sealDiv}>
              <img
                src="https://user-images.githubusercontent.com/99132893/233534257-7f116a53-c2ce-4b77-8968-e645ea695572.png"
                alt="paytm"
              />
            </div>
            <div className={style.sealDiv}>
              <img
                src="https://user-images.githubusercontent.com/99132893/233534524-2b9740c3-06a5-4eb1-a4e3-2ef496d8475a.png"
                alt="stripe"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.midDiv}>
        <div className={style.midSub}>
          <b>Company</b>
          <p>Home</p>
          <p>Privacy Policy</p>
          <p>T & C</p>
          <p>Varied Payment</p>
        </div>
        <div className={style.midSub}>
          <b>Collaborate</b>
          <p>Clever Tap</p>
          <p>Exotel</p>
          <p>Facebook</p>
          <p>Quora</p>
          <p>Google</p>
          <p>Youtube</p>
        </div>
      </div>
      <div className={style.midDiv}>
        <div className={style.midSub}>
          <b>Support</b>
          <p>Home</p>
          <p>Privacy Policy</p>
          <p>T & C</p>
          <p>Varied Payment</p>
        </div>
        <div className={style.midSub}>
          <b>Important Link</b>
          <p>Tarot Reader</p>
          <p>Vedic Astrology </p>
          <p>Palmistry </p>
          <p>Gemology</p>
          <p>Vastu</p>
          <p>Numerology</p>
        </div>
      </div>
      <div className={style.form}>
        <form onSubmit={handledOnClick}>
          <input type="text" placeholder="Your Name" required/>
          <input type="email" placeholder="Mail ID" required/>
          <textarea placeholder="Write Query" cols={4} required/>
          <button type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
