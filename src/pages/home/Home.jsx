import React from 'react';
import HomeSlider from '../../components/homes/HomeSlider';
import AboutSection from '../../components/homes/about/AboutSection';
import Testimonials from '../../components/homes/testimonials/Testimonial';
import QuickBtnFaq from '../../components/homes/quickButton-faq/QuickBtnFaq';
import EventsCalender from '../../components/events/EventsCalender';

const Home = () => {
    return (
        <div className=''>
        
          <div className='w-full h-fit mx-auto'>
          <HomeSlider></HomeSlider>
         <div className=''>
    <AboutSection></AboutSection>
    <EventsCalender></EventsCalender>
    <QuickBtnFaq></QuickBtnFaq>
   <div className='w-3/4 py-8 h-96  mx-auto'>
   <Testimonials></Testimonials>
   </div>
         </div>
          </div>
          
          
      

        
        </div>
    );
};

export default Home;