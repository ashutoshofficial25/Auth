import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
const Home = () => {
  return (
    <div>
      <header style={{ height: "20vh", backgroundColor: "#0057b7" }}></header>
      <Container>
        <Box>
          <Grid container>
            <Grid xs={8}>
              <Typography variant="h1">Hello</Typography>
              <Typography variant="h2">Name Here</Typography>
              <Typography variant="body1">body test 2 line</Typography>
            </Grid>
            <Grid xs={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="400"
                    image="/static/images/cards/paella.jpg"
                    alt="Paella dish"
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
