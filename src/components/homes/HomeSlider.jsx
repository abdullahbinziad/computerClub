import { Carousel, Typography, Button } from "@material-tailwind/react";
import img1 from '../../assets/slider-img/img1.jpg';
import img2 from '../../assets/slider-img/img2.jpg';
import img3 from '../../assets/slider-img/img3.jpg';
import { Link } from "react-router-dom";

const sliderInfo = [
  {
    title: "Inter Programming Contest",
    caption:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum necessitatibus unde earum doloribus laborum corporis itaque sequi tempora quidem ullam.",
    postLink:"",
    image: img1,
  },
  { 
    title: "Inter Programming Contest",
    caption:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum necessitatibus unde earum doloribus laborum corporis itaque sequi tempora quidem ullam.",
    postLink:"",
    image: img2,
  },
  {
    title: "Acheivements in Govt Festival 2023",
    caption:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum necessitatibus unde earum doloribus laborum corporis itaque sequi tempora quidem ullam.",
    postLink:"",
    image: img3,
  },
]
 
export default function Homeslider() {
  return (
    <Carousel className="rounded-xl">
    
   {
    sliderInfo.map((n,index)=>    <div className="relative h-full w-full">
    <img
      src={n.image}
      alt="image 2"
      className="h-[800px] w-full object-cover"
    />
    <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
      <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
        <Typography
          variant="h1"
          color="white"
          className="mb-4 text-3xl md:text-4xl lg:text-5xl"
        >
         {n.title}
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mb-12 opacity-80"
        >
        {n.caption}
        </Typography>
        <div className="flex gap-2">
        <Link to={`${n.postLink}`}>
        <Button  size="lg" className="bg-fcBtn">
            Explore
          </Button></Link>
          <Button size="lg" color="white" variant="outlined">
            Gallery
          </Button>
        </div>
      </div>
    </div>
  </div>)
   }
     
    </Carousel>
  );
}