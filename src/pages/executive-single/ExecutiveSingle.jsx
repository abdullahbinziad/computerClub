import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaFacebookSquare, FaMailchimp } from "react-icons/fa";
import fb from "../../assets/icons/facebook.svg";
import ln from "../../assets/icons/ln.svg";
import mail from "../../assets/icons/mail.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";

import bannerImg from "../../assets/images/cambread.jpg";

const ExecutiveSingle = () => {
  const loaderData = useLoaderData();
  const bannerImg =
    " https://img.freepik.com/free-photo/close-up-keyboard-glasses-with-executives-background_1098-3635.jpg?size=626&ext=jpg&ga=GA1.2.1927364872.1691087605&semt=sph";
  return (
    <div className="mt-20">
      <div
        style={{
          height: 193,
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),url(${
            (bannerImg && bannerImg) || "  "
          })`,
        }}
        className="w-full h-48 bg-no-repeat  bg-fixed   bg-opacity-60  bg-cover  bg-right-bottom  "
      >
        <h1 className="text-white text-4xl pt-20 font-bold text-center">
          Executives Details
        </h1>
      </div>

      <div className="w-3/4 mx-auto py-20 flex justify-start gap-20  ">
        <div className="flex-1 flex flex-col  items-center  ">
          <img className=" w-96 rounded-md" src={loaderData?.image} alt="" />
          <div className="flex gap-4 py-4 justify-center items-center ">
            <a href={loaderData?.fb}>
              {" "}
              <img className="w-10" src={fb} alt="" />{" "}
            </a>
            <a href={loaderData?.linkdin}>
              {" "}
              <img className="w-10" src={ln} alt="" />
            </a>
            <a href={`mailto:${loaderData?.email}`}>
              {" "}
              <img className="w-10" src={mail} alt="" />
            </a>
            <a href={`https://wa.me/${loaderData?.whatsapp}?text=`}>
              {" "}
              <img className="w-10" src={whatsapp} alt="" />{" "}
            </a>
          </div>
          <h1 className="text-xl font-bold"> {loaderData?.mobile} </h1>
          <h1 className="text-xl font-bold"> {loaderData?.email} </h1>
        </div>
        <div className="space-y-3 flex-1">
          <h1 className="text-3xl font-bold">{loaderData?.name}</h1>
          <h1 className="text-xl font-bold">{loaderData?.position}</h1>
          <h1 className="text-xl font-bold">
            {" "}
            {loaderData?.department} | {loaderData?.batch} Batch
          </h1>
          <div
            className="pt-6"
            dangerouslySetInnerHTML={{ __html: loaderData?.aboutDesc }}
          />

          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSingle;
