import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// function handleOnDrag (a,b) => {

// }

export default function gamePage() {
  return (
    <Box sx={{ flexGrow: 1, p: 5 }}>
      <Grid container spacing={2} sx={{ border: "2px #fff" }}>
        <Grid xs={12} md={5} lg={4}>
          <Item>
            <Typography>Deck</Typography>
          </Item>
          <Card sx={{ maxWidth: 200, ml: "auto", mr: "auto", mt: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="auto"
                image="https://images.rawpixel.com/image_png_350/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEyL2ZyY2FyZF9wbGF5aW5nX2NhcmRfbWFnaWMtaW1hZ2UtMDItam9iMTUwM18xLnBuZw.png"
                alt="green iguana"
                draggable
                // onDrag={(e) => handleOnDrag(a,b)}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-spade"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Category Spade
              </Box>
              <Box aria-labelledby="category-a">
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="auto"
                      image="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9zdGF0aWMvZmlsZXMvd2Vic2l0ZS8yMDIzLTA0L3BkbWlzYzExLWxvYzIwMTg2OTY3NDN6ZC1pbWFnZS5wbmc.png"
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-heart"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Category Heart
              </Box>
              <Box aria-labelledby="category-b">
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="auto"
                      image="https://images.rawpixel.com/image_png_350/cHJpdmF0ZS9zdGF0aWMvZmlsZXMvd2Vic2l0ZS8yMDIzLTA0L3BkbWlzYzExLWxvYzIwMTg2OTY3NDN6emQtaW1hZ2UucG5n.png"
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-club"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Category Club
              </Box>
              <Box aria-labelledby="category-c">
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      backgroundColor="#fff"
                      height="auto"
                      image="https://images.rawpixel.com/image_png_350/cHJpdmF0ZS9zdGF0aWMvZmlsZXMvd2Vic2l0ZS8yMDIzLTA0L3BkbWlzYzExLWxvYzIwMTg2OTY3NDN6emMtaW1hZ2UucG5n.png"
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-diamond"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Category Diamond
              </Box>
              <Box aria-labelledby="category-d">
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="auto"
                      image="https://images.rawpixel.com/image_png_350/cHJpdmF0ZS9zdGF0aWMvZmlsZXMvd2Vic2l0ZS8yMDIzLTA0L3BkbWlzYzExLWxvYzIwMTg2OTY3NDN6Yy1pbWFnZS5wbmc.png"
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>© Copyright</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>Link A</Item>
            </Grid>
            <Grid>
              <Item>Link B</Item>
            </Grid>
            <Grid>
              <Item>Link C</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

// https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9zdGF0aWMvZmlsZXMvd2Vic2l0ZS8yMDIzLTA0L3BkbWlzYzExLWxvYzIwMTg2OTY3NDN6ZC1pbWFnZS5wbmc.png
// https://images.rawpixel.com/image_png_350/cHJpdmF0ZS9zdGF0aWMvZmlsZXMvd2Vic2l0ZS8yMDIzLTA0L3BkbWlzYzExLWxvYzIwMTg2OTY3NDN6emQtaW1hZ2UucG5n.png
// https://images.rawpixel.com/image_png_350/cHJpdmF0ZS9zdGF0aWMvZmlsZXMvd2Vic2l0ZS8yMDIzLTA0L3BkbWlzYzExLWxvYzIwMTg2OTY3NDN6emMtaW1hZ2UucG5n.png
// https://images.rawpixel.com/image_png_350/cHJpdmF0ZS9zdGF0aWMvZmlsZXMvd2Vic2l0ZS8yMDIzLTA0L3BkbWlzYzExLWxvYzIwMTg2OTY3NDN6Yy1pbWFnZS5wbmc.png
