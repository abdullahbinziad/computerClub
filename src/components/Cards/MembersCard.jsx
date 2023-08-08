import React from "react";

import {
  Card,       
  CardHeader, 
  CardBody,   
  CardFooter, 
  Typography, 
  Tooltip,    
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MembersCard = (props) => {
  const { image, _id, name, position, department, batch } = props.member;
  return (
    <div>
     <Link to={`/executive/${_id}`}> <Card className=" space-y-5">
        <div className="">
          <img className="w-full  object.  h-64" src={image} alt="profile-picture" />
        </div>
        <div className="text-center  space-y-1 p-3 ">
          <h1 className=" text-xl font-bold">{name}</h1>
          <p className=" text-xl  ">{position}</p>
          <p className="   ">
            {department} {batch}   
          </p>
        </div>
      
      </Card>
      </Link>
    </div>
  );
};

export default MembersCard;
