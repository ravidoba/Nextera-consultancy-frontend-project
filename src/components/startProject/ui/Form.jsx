import { useState } from "react";
import ButtonF from "../../common/Button/Button";
import { TextField } from "../../common/TextField/TextField";
import HeroSection from "../../Homepage/ui/HeroSection/HeroSection";
import "./form.scss";
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
        toast.success('Thank you for reaching out to us. We will get back to you shortly.')
        setForm({})
      }, 2000)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form">

      <div className="office-details-section">
        <HeroSection
          subtitle="Start A Project"
          title="Let's Kickstart Your Project Together"
          description={`Complete this quick form to share your needs, and one of our friendly Product Consultants wil contact you to schedule a chat about your project.`}
          showbutton={false}
          col={true}
        />
      </div>
      <div className="contact-form-section">
        <form className="contact-form" onSubmit={HandleSubmit}>
          <h2>Lets Talk About Your Project</h2>
          <div className="form-group-h">
            <TextField
              label="Full Name"
              value={form.fullName || ''}
              name="fullName"
              onChange={HandleOnchange}
              required
            />
          </div>
          <div className="form-group-h">
            <TextField
              label="Email"
              value={form.email || ''}
              name="email"
              onChange={HandleOnchange}
              required
            />
          </div>
          <div className="form-group-h">
            <TextField
              label="Company"
              value={form.company || ''}
              name="company"
              onChange={HandleOnchange}
              required
            />
          </div>
          <div className="form-group-h">
            <TextField
              value={form.extra || ''}
              name="extra"
              label="How did you hear about us?"
              onChange={HandleOnchange}
              required
            />
          </div>
          <div className="form-group-h">
            <textarea placeholder="Your message"
              name="message"
              value={form.message || ''}
              onChange={HandleOnchange}
              required></textarea>
          </div>
          <ButtonF title={isloading ? 'Sending..' : 'Submit'} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
