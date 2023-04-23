import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import FileUploadIcon from "@mui/icons-material/FileUpload";
import React from 'react'
import { toast } from 'react-toastify';

function Upload() {
  const onImageUpload = (e) => {
    const file = e.target.files;
    console.log(file)
    toast.success("Prediction Done")
  }
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFF4CF",
              textAlign:"center"
            }}
          >
            <Typography variant="h6" gutterBottom>
              Upload Image
            </Typography>
            <Button variant="contained" component="label" endIcon={<FileUploadIcon />} onClick={(e) => onImageUpload(e)}>
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Upload