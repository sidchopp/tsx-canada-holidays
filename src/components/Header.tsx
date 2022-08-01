import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <div>
      <Typography gutterBottom variant="h5" align="center">
        <span className="header">
          {" "}
          <span className="canadian">Canadian</span> Public and Federal Holidays
          for all Provinces
        </span>
      </Typography>
    </div>
  );
};

export default Header;
