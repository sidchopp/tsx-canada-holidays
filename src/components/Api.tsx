import { useState, useEffect } from "react";

//MUI
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import SourceIcon from "@mui/icons-material/Source";
import IconButton from "@mui/material/IconButton";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//components
import Loading from "./Loading";

//interfaces
import { array } from "../interfaces/Interface";

const Api = () => {
  const [provData, setProvData] = useState(array);
  const [loading, setLoading] = useState(true);
  const getResponse = async () => {
    const response = await fetch(
      "https://canada-holidays.p.rapidapi.com/api/v1/provinces?optional=false&year=2022",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "16a6a19bc4mshed2926e4f407384p15a805jsn3c1b8e1b24d6",
          "X-RapidAPI-Host": "canada-holidays.p.rapidapi.com",
        },
      }
    );
    setLoading(true);
    try {
      const data = await response.json();
      const { provinces } = data;
      setProvData(provinces);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  };

  useEffect(() => {
    getResponse();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  {
    console.log(provData);
  }

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={4}>
          {provData.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={3}>
              <Card
                // variant="outlined"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardHeader
                  title={
                    <Typography variant="h6" component="div">
                      {card.nameEn}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="caption" display="block">
                      <i>{card.holidays.length} holidays</i>
                    </Typography>
                  }
                  action={
                    <a href={card.sourceLink} target="_blank">
                      <IconButton color="primary" component="label">
                        <SourceIcon />
                      </IconButton>
                    </a>
                  }
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.holidays.map((holiday) => {
                      return (
                        <div key={holiday.id}>
                          {holiday.date === card.nextHoliday.date ? (
                            <Typography
                              variant="subtitle2"
                              gutterBottom
                              component="div"
                              color="primary"
                            >
                              {holiday.date.slice(-5)}: {holiday.nameEn}
                            </Typography>
                          ) : (
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              {holiday.date.slice(-5)}: {holiday.nameEn}
                            </Typography>
                          )}
                        </div>
                      );
                    })}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Api;
