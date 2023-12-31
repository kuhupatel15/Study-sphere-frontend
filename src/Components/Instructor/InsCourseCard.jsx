import React from 'react'
import { Link } from 'react-router-dom';
import '../../index.css'
import { Tooltip } from "@material-tailwind/react";


import { Card, CardHeader, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react";

const CourseCard = (props) => {
  return (
    <div>
      <div className="shrink-0 rounded-none h-max p-4 w-72">
        <div>
          <img
            src={props.courseposter}
            className='w-full h-36 bg-white rounded-none'
          />
        </div>
        <div className='w-full py-2'>
          <h3 className="uppercase h-12 font-bold text-[3vh] font-[gilroy] mb-4 text-[black] font-medium">
            {props.coursetitle}
          </h3>
          <h3 className="text-[2vh] font-[gilroy] mb-2 text-[gray] font-medium">
            {props.instructor}
          </h3>
          <h3 className="text-[2vh] font-[gilroy] mb-4 text-[black] font-medium">
            {props.courselength} Lectures
          </h3>
        </div>
        <Link to={`/instructor/course/${props.courseid}`}>
          <Button className='bg-[#9179F5] w-full rounded-[0px]'>See details</Button>
        </Link>
      </div>

    </div>
  )
}

export default CourseCard