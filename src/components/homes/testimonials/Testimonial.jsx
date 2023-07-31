import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import {  Typography } from "@material-tailwind/react";

export default function Testimonials() {
  return (
    
    <div className="h-full py-10">
<h1 className="text-3xl text-center text-fcBtn bg-transparent font-bold">What People Say ?</h1>
       
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex  gap-10 items-center justify-between  w-full h-full p-10">
        
              <div className=" w-96">
                <img
                  className=" w-64 rounded-md my-3"
                  src="https://mec.portal.gov.bd/sites/default/files/files/mec.portal.gov.bd/npfblock//2022-04-09-06-41-71a3026f69e1b08a3dcd422b5a06af02.jpg"
                  alt="avatar"
                />
                <div>
                  <Typography variant="h5">Alamgir Hossain</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {" "}
                    Processor{" "}
                  </Typography>
                </div>
              </div>
           
            <div className="text-center">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia harum quos recusandae expedita. Sint accusamus magni
                esse sed quidem laboriosam porro excepturi ratione, beatae ut
                delectus nam in sequi culpa.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex  gap-10 items-center justify-between  w-full h-full p-10">
        
              <div className=" w-96">
                <img
                  className=" w-64 rounded-md my-3"
                  src="https://mec.portal.gov.bd/sites/default/files/files/mec.portal.gov.bd/npfblock//2022-04-09-06-41-71a3026f69e1b08a3dcd422b5a06af02.jpg"
                  alt="avatar"
                />
                <div>
                  <Typography variant="h5">Alamgir Hossain</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {" "}
                    Processor{" "}
                  </Typography>
                </div>
              </div>
           
            <div className="text-center">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia harum quos recusandae expedita. Sint accusamus magni
                esse sed quidem laboriosam porro excepturi ratione, beatae ut
                delectus nam in sequi culpa.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-10 items-center justify-between  w-full h-full p-10">
        
              <div className=" w-96">
                <img
                  className=" w-64 rounded-md my-3"
                  src="https://scontent.fjsr1-2.fna.fbcdn.net/v/t1.6435-9/43154327_735847003416427_183140304604364800_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFcm_4P4FQpt7e1Q-sW_fzbj8hpadDhfiWPyGlp0OF-JRxS726m8lIrZTwPpuH9-4rRxIViJbw961EjqnHiaQed&_nc_ohc=3lHezpmQQmIAX-esXjm&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfB8Nu1SaiAyvc5nchLj-J6FOJZJGqELyMbGQUjwcrnW0Q&oe=64BB43A7"
                  alt="avatar"
                />
                <div>
                  <Typography variant="h5">Nazrul Islam</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {" "}
                   Lecturer ,Department of CSE{" "}
                  </Typography>
                </div>
              </div>
           
            <div className="text-center">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia harum quos recusandae expedita. Sint accusamus magni
                esse sed quidem laboriosam porro excepturi ratione, beatae ut
                delectus nam in sequi culpa.
              </p>
            </div>
          </div>
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
}
