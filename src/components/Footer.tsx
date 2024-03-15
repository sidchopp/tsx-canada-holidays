import { Typography, Container } from "@mui/material";
import { currentYear } from "../lib/utils";

function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="md">
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          gutterBottom
        >
          <span className="footer">
            <a
              href="https://sid-projects.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              My Other Projects
            </a>
          </span>
        </Typography>
        <Typography variant="body2" align="center">
          <span className=" footer-last">2022 - {currentYear()}</span>
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
