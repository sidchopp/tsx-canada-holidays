import { useState } from "react";
import { AppProps } from "../interfaces/Interface";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Container,
  Button,
  IconButton,
} from "@mui/material";
import SourceIcon from "@mui/icons-material/Source";

const ProvinceWiseHolidays = ({ provData }: AppProps) => {
  const [english, setEnglish] = useState(true);

  const changeLanguage = () => {
    setEnglish(!english);
  };

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={4}>
          {provData.map((card) => (
            <Grid
              item
              key={card.id}
              xs={12}
              sm={6}
              md={3}
              style={{ display: "flex" }}
            >
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="card"
              >
                <CardHeader
                  title={
                    <Typography variant="h6" component="div">
                      <span className="province-name">
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
                      <span className="holidays-number">
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
                        <SourceIcon />
                      </span>
                    </IconButton>
                  </a>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProvinceWiseHolidays;
