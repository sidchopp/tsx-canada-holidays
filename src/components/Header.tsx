import { Typography } from "@mui/material";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { currentYear } from "../lib/utils";

const Header = () => {
  return (
    <div className="header-container">
      <Typography gutterBottom variant="h5" component="div" align="center">
        <div className="header">
          <span className="leaf">
            <FaCanadianMapleLeaf />
          </span>
          Canadian Holidays {currentYear()}
        </div>
      </Typography>
    </div>
  );
};

export default Header;
