import { Typography } from "@mui/material";
import { FaCanadianMapleLeaf } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <Typography gutterBottom variant="h5" component="div" align="center">
        <div className="header">
          <span className="leaf">
            <FaCanadianMapleLeaf />
          </span>
          Holidays {new Date().getFullYear()}
        </div>
      </Typography>
    </div>
  );
};

export default Header;
