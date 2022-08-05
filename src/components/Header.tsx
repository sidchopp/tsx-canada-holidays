import Typography from "@mui/material/Typography";
import { FaCanadianMapleLeaf } from "react-icons/fa";

const Header = () => {
  return (
    <Typography gutterBottom variant="h5" align="center">
      <span className="header">
        {" "}
        <span className="leaf">
          {" "}
          <FaCanadianMapleLeaf />
        </span>
        Holidays {new Date().getFullYear()}
      </span>
    </Typography>
  );
};

export default Header;
