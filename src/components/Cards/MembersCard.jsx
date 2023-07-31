import React from 'react';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";

const MembersCard = (props) => {

    const {img,_id,name,position} = props.member;
    return (
        <div>
            <Card className="">
        <CardHeader floated={false} className="h-80">
          <img src={img} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue" className="  font-bold " textGradient>
            {position}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
        </div>
    );
};

export default MembersCard;