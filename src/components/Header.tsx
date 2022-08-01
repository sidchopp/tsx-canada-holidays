import Typography from "@mui/material/Typography";
import { FaCanadianMapleLeaf } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Typography gutterBottom variant="h5" align="center">
        <span className="header">
          {" "}
          <span className="canadian">
            <span className="leaf">
              {" "}
              <FaCanadianMapleLeaf />
            </span>
            Canadian{" "}
          </span>
          Public and Federal Holidays for all Provinces
        </span>
      </Typography>
    </div>
  );
};

export default Header;
