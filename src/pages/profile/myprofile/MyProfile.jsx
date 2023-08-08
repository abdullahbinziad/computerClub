import { PresentationChartBarIcon } from '@heroicons/react/24/solid';
import { Avatar, Card, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import React from 'react';

const MyProfile = () => {
    return (
        <div className='mt-3 px-6'>
           <div className='grid grid-cols-3 gap-4 shadow-md p-10 rounded-lg '>
<div className='p-6 bg-card1 rounded-lg text-gray-700 space-y-3 '>
<h1 className='text-xl'> <span className='text-3xl font-bold'>Hi  !   </span>   Abdullah Bin Ziad</h1>
<h2 className='font-semibold'>Department of CSE</h2>
<h2 className='font-semibold'>CSE 4th Batch</h2>
</div>
<div className='p-6 bg-card3 rounded-lg text-gray-700 space-y-3'>
<h1 className='text-xl'> 3 Course  Enrolled</h1>
<h2 className='font-semibold'> 45 Blogs Post</h2>

</div>
<div className='p-6 bg-card2 rounded-lg text-white space-y-3'>

</div>
           </div>

           <div className=' shadow-md grid grid-cols-2 p-10 rounded-lg'>

          
      <List>
        <ListItem>
          <ListItemPrefix>
          <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Tania Andrew
            </Typography>
       
          </div>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Tania Andrew
            </Typography>
       
          </div>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Tania Andrew
            </Typography>
       
          </div>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Tania Andrew
            </Typography>
       
          </div>
        </ListItem>
        
      </List>
   

           </div>
        </div>
    );
};

export default MyProfile;