import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import { MdHome } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import "./Header.css";

function Header() {
  return (
    <Drawer open={true}>
      <List className="list">
        <ListItem Button>
          <IconContext.Provider value={{ color: "#a2a3a6", size: "1.2em" }}>
            <MdHome />
          </IconContext.Provider>
          <ListItemText className="ListItemText">
            <Typography>Home</Typography>
          </ListItemText>
        </ListItem>
        <ListItem Button>
          <IconContext.Provider value={{ color: "#a2a3a6", size: "1.2em" }}>
            <MdHome />
          </IconContext.Provider>
          <ListItemText>
            <Typography>Home</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Header;
