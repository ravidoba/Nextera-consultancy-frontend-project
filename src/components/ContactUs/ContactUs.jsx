import TitleBar from '../common/TitleBar/TitleBar';
import HeroSection from '../Homepage/ui/HeroSection/HeroSection';
import './ContactUs.scss';
import Form from './ui/Form';

const ContactUs = () => {
  return (
    <div className='ContactUs'>
    <TitleBar title={'Contact Us'}/>
      <HeroSection
        subtitle="CONTACT US"
        title="Let's Connect and Collaborate"
        description={`Contact us today to discuss your software development and outsourcing needs. We're dedicated to providing exceptional service ‘and helping you achieve success. Get in touch for a consultation of to learn more about our offerings. We're excited to hear from yout`}
        showbutton={false}
      />
        <Form/>
    </div>
  )
}

export default ContactUs