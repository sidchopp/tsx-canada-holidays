import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <div>
      <Typography gutterBottom variant="h5" align="center">
        <span className="secondary-font">
          {" "}
          Canadian Public and Federal Holidays for all 13 provinces
        </span>
      </Typography>
    </div>
  );
};

export default Header;
