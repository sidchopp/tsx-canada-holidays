//interfaces
import { AppProps } from "../interfaces/Interface";

//MUI
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import SourceIcon from "@mui/icons-material/Source";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const ProvinceWiseHolidays = ({ provData }: AppProps) => {
  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={4}>
          {provData.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={3}>
              <div className="card">
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
                        <span className="secondary-font">{card.nameEn}</span>
                      </Typography>
                    }
                    subheader={
                      <Typography variant="caption" display="block">
                        <span className="secondary-font">
                          {" "}
                          <i>{card.holidays.length} holidays</i>
                        </span>
                      </Typography>
                    }
                    action={
                      <a
                        href={card.sourceLink}
                        target="_blank"
                        rel="noreferrer"
                      >
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
                                <span className="secondary-font">
                                  {holiday.date.slice(-5)}: {holiday.nameEn}
                                </span>
                              </Typography>
                            ) : (
                              <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                              >
                                <span className="secondary-font">
                                  {" "}
                                  {holiday.date.slice(-5)}: {holiday.nameEn}
                                </span>
                              </Typography>
                            )}
                          </div>
                        );
                      })}
                    </Typography>
                  </CardContent>
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
