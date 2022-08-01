import { useState } from "react";
//interfaces
import { AppProps } from "../interfaces/Interface";

//MUI
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import SourceIcon from "@mui/icons-material/Source";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const ProvinceWiseHolidays = ({ provData }: AppProps) => {
  const [english, setEnglish] = useState(true);
  // console.log(provData);

  const changeLanguage = () => {
    setEnglish(!english);
  };

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={4}>
          {provData.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={3}>
              <div className="card">
                <Card>
                  <CardHeader
                    title={
                      <Typography variant="h6" component="div">
                        <span className=" province-name">
                          {english ? card.nameEn : card.nameFr}
                        </span>
                      </Typography>
                    }
                    subheader={
                      <Typography
                        variant="caption"
                        display="block"
                        color="text.secondary"
                      >
                        <span className=" holidays-number">
                          {" "}
                          <i>
                            {card.holidays.length}{" "}
                            {english ? "holidays" : "vacances"}
                          </i>
                        </span>
                      </Typography>
                    }
                    action={
                      <Button onClick={changeLanguage} component="label">
                        <span className="language-button">
                          {" "}
                          {english ? "FR" : "EN"}
                        </span>
                      </Button>
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
                                <span className=" next-holiday">
                                  {holiday.date.slice(-5)}:{" "}
                                  {english ? holiday.nameEn : holiday.nameFr}
                                </span>
                              </Typography>
                            ) : (
                              <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                              >
                                <span className="holidays">
                                  {" "}
                                  {holiday.date.slice(-5)}:{" "}
                                  {english ? holiday.nameEn : holiday.nameFr}
                                </span>
                              </Typography>
                            )}
                          </div>
                        );
                      })}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href={card.sourceLink} target="_blank" rel="noreferrer">
                      <IconButton component="label">
                        <span className="source-button">
                          {" "}
                          <SourceIcon />
                        </span>
                      </IconButton>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProvinceWiseHolidays;
