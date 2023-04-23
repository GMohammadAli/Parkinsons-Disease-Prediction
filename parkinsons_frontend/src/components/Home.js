import React from 'react'
import Image from './Image'
import { Box, Typography } from '@mui/material'
import Upload from './Upload';

function Home() {
  return (
    <>
      <Box
        maxWidth="xs"
        style={{
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "#FFF4CF",
        }}
      >
        <Typography
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            justifyContent: "center",
            color: "#277BC0",
            textAlign:"center"
          }}
          variant="h4"
          component="div"
          sx={{ flexGrow: 1 }}
          fontWeight={700}
        >
          Parkinson's Disease Prediction
        </Typography>
      </Box>
      <Image src="/Home.jpeg" width="100%" />
      <Upload />
    </>
  );
}

export default Home