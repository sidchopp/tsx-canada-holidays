import { Button, Typography } from "@mui/material";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { currentYear } from "../lib/utils";

interface HeaderProps {
  english: boolean;
  toggleLanguage: () => void;
}

const Header = ({ english, toggleLanguage }: HeaderProps) => {
  return (
    <div className="header-container">
      <Typography gutterBottom variant="h5" component="div" align="center">
        <div className="header">
          <span className="leaf">
            <FaCanadianMapleLeaf />
          </span>
          Canadian Holidays {currentYear()}
          <Button
            sx={{
              color: "inherit",
              fontFamily: "inherit",
              fontSize: "1.2rem",
              ml: 2,
            }}
            onClick={toggleLanguage}
          >
            {english ? "FR" : "EN"}
          </Button>
        </div>
      </Typography>
    </div>
  );
};

export default Header;
