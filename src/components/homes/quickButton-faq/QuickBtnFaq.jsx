import React from "react";
import { useState, Fragment } from "react";
import backgroundImage from '../../../assets/shape-bg/bg-20.svg'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";

const QuickBtnFaq = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
   <div  style={{ backgroundImage: `url(${backgroundImage})` }} className="  bg-opacity-90 bg-no-repeat bg-cover backdrop-brightness-70 bg-fixed 
   ">
     <div className=" w-3/4 mx-auto py-16 ">
        <h1 className="text-4xl font-bold py-10 text-center"><span className="text-fcBtn">Faq &</span> Quick Button</h1>
      <div className="flex justify-between gap-12">
        <div className=" flex-1">
          <Fragment>
            <Accordion open={open === 1} animate={customAnimation}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                What are we Do in the Club?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} animate={customAnimation}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                How to become a Member of the Club?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} animate={customAnimation}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                How Can I know Perticipate on program?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </Fragment>
        </div>
        <div className="flex-1">
<div className=" grid grid-cols-2 gap-6 ">
<Button size="lg" color="white" className="flex items-center gap-3">
        <img src="/icons/metamask.svg" alt="metamask" className="h-6 w-6" />
        Club Members
      </Button>
<Button size="lg" color="white" className="flex items-center gap-3">
        <img src="/icons/metamask.svg" alt="metamask" className="h-6 w-6" />
        Resources
      </Button>
<Button size="lg" color="white" className="flex items-center gap-3">
        <img src="/icons/metamask.svg" alt="metamask" className="h-6 w-6" />
        Galary
      </Button>
<Button size="lg" color="white" className="flex items-center gap-3">
        <img src="/icons/metamask.svg" alt="metamask" className="h-6 w-6" />
        Blogs
      </Button>
<Button size="lg" color="white" className="flex items-center gap-3">
        <img src="/icons/metamask.svg" alt="metamask" className="h-6 w-6" />
        Projects 
      </Button>
<Button size="lg" color="white" className="flex items-center gap-3">
        <img src="/icons/metamask.svg" alt="metamask" className="h-6 w-6" />
        Contact Us
      </Button>

</div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default QuickBtnFaq;
