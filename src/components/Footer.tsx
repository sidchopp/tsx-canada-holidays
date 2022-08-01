import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
          <span className="secondary-font">
            {" "}
            Made with{" "}
            <span className="love">
              <FavoriteIcon fontSize="small" />
            </span>{" "}
            &{" "}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="heading-info"> TypeScript </span>
            </a>
          </span>
        </Typography>
        <Typography variant="body2" align="center">
          <span className="secondary-font">
            {" "}
            {"Copyright © "}
            {new Date().getFullYear()}
            {"."}{" "}
            <a
              href="https://sid-projects.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="heading-info"> My Other Projects</span>
            </a>
          </span>
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
