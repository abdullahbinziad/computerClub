import React from 'react';
import backgroundImage from '../../../assets/images/about-images.jpg'
import './about.css'

const AboutSection = () => {
    return (
      <div id="aboutSec">  <div  className='flex flex-row-reverse w-5/6 mx-auto justify-between items-center py-20'>
            <div  style={{ backgroundImage: `url(${backgroundImage})`,  }} className='rounded-md flex-1 p-10 w-full h-96  bg-no-repeat bg-cover'>
               
            </div>
    <div className='flex-1 p-10 space-y-3'>
               <h1 className='text-4xl font-bold'> About </h1>
               <h1 className='text-3xl font-bold  text-fcBtn'> MEC COMPUTER CLUB </h1>
               <p className='text-xl font-thin text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, obcaecati impedit incidunt dolorem eum totam nulla reprehenderit ut assumenda placeat doloremque explicabo distinctio ab molestias in, optio aliquid perferendis illo! Asperiores rerum, officiis molestias, facilis temporibus autem quod optio eos qui obcaecati nulla deserunt labore ad? Sit ratione incidunt earum ut voluptatum eius, optio recusandae et qui adipisci nostrum maxime! Aperiam iste nihil, dolores facilis placeat cupiditate maxime mollitia aliquid sequi delectus Rem.
               </p>
            </div>
        </div>
        </div>
    );
};

export default AboutSection;