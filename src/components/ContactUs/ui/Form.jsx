import ButtonF from "../../common/Button/Button";
import "./form.scss";
import { TextField } from './../../common/TextField/TextField';
import { useState } from "react";
import toast from "react-hot-toast";

const Form = () => {
  const [form, setForm] = useState({});
  const [isloading, setisloading] = useState(false)
  const HandleOnchange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const HandleSubmit = async (e) => {
    setisloading(true)
    e.preventDefault();
    try {
      setTimeout(() => {
        console.log(form);
        setisloading(false)
        toast.success('Thank you for reaching out to us. We will get back to you shortly')
        setForm({})
      }, 2000)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form">
      <div className="contact-form-section">
        <form className="contact-form-h" onSubmit={HandleSubmit} style={{ border: "none" }}>
          <h2>Let's Talk About Your Project</h2>
          <div className="form-group-h">
            <TextField
              label="Full Name"
              name="fullName"
              value={form.fullName || ''}
              onChange={HandleOnchange}
              required
            />
          </div>
          <div className="form-group-h">
            <TextField
              label="Email"
              name="email"
              value={form.email || ''}
              onChange={HandleOnchange}
              required
            />
          </div>
          <div className="form-group-h">
            <TextField
              label="Company"
              name="company"
              value={form.company || ''}
              onChange={HandleOnchange}
              required
            />
          </div>
          <div className="form-group-h">
            <textarea
              placeholder="Your message"
              name="message"
              value={form.message || ''}
              onChange={HandleOnchange}
              required
            ></textarea>
          </div>
          <ButtonF title={isloading ? 'Sending..' : 'Submit'} type="submit" />
        </form>
      </div>
      <div className="office-details-section-p">
        <div className="office-details">
          <h3>Our Offices</h3>
          <div className="office">
            <h2>Ahmedabad, India</h2>
            <div className="line_footer" />
            <p>4011, 4th Floor, Gulmohar Park </p>
            <p>Mall, Satellite Rd, opposite</p>
            <p>Satellite,</p>
            <p>Ahmedabad, Gujarat 380015</p>
            <p>Email: <a href="mailto:NextEra Consultancy@gmail.com" className="footer-link">NextEra Consultancy@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
