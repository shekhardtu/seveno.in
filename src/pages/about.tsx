import AboutUs from '@/components/AboutUs';
import BreadCrumb from '@/components/BreadCrumb';
import ContactUs from '@/components/ContactUs';
import Review from '@/components/Review';
import WorkCulture from '@/components/WorkCulture';
import { Main } from '@/templates/Main';

const About = () => (
  <Main>
    <BreadCrumb path="About" />
    <AboutUs />
    <WorkCulture />
    <Review />
    <ContactUs />
  </Main>
);

export default About;
