
import { Box, Typography } from '@mui/material';
import React from 'react'

interface PropTypes {
    title:string;
    description:string;
    
    image:string;
    
}




const InfoHeader = ({title, description, image}:PropTypes) => {

    
    
  return (
    <Box textAlign={'center'}>
        <img src={image} alt={title} width={'100%'} />
        <div className="info-details">
          <Typography>
            <h2>{title}</h2>
          </Typography>
          <Typography>
            <p>{description}</p>
          </Typography>
        </div> 
    

    </Box>
  )
}

export default InfoHeader