import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import api_img from "./Assets/API.svg";
import "./ViewApis.css";
import React, { useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { data } from "./HardCodedData";
import background_img from "./Assets/background@3x.png";
import iso_logo_img from "./Assets/iso-logo.svg";
import profile_img from "./Assets/profile.png";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export const ViewApis = (props) => {
  useEffect(() => {
    fetch("https://anques.com/s/get_api_list.json")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${background_img})` }}
    >
      <div className="top-panel">
        <div className="top-panel__left">
          <img src={iso_logo_img} className="top-panel__img" />
          <label>APIs</label>
        </div>
        <div className="top-panel__right">
          <Card className="top-panel__right--card">
            <div>
              <label>Mariano Diaz</label>
              <br />
              <label>Functional Analyst</label>
            </div>
            <img src={profile_img} />
          </Card>
        </div>
      </div>

      <div className="card-container">
        {data.map((each) => (
          <CardComponent data={each} />
        ))}
      </div>
      <IconButton
        onClick={() => {
          props.setShowCreateComp(true);
        }}
      >
        <AddCircleIcon />
      </IconButton>
    </div>
  );
};

const CardComponent = (props) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 230,
      marginRight: 15,
    },
  });

  const classes = useStyles();

  const options = ["Sync", "Properties"];

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={classes.root}>
      <CardContent className="card-content">
        <div className="overflow-menu">
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <div className="card-image">
          <img src={api_img} alt="api image" />
        </div>
        <div className="card-text-name">{props.data.name}</div>
        <div className="card-text-desc">{props.data.desc}</div>
      </CardContent>
      <CardActions className="card-actions">
        <Button>OPEN</Button>
        <Button variant="outlined">{props.data.status}</Button>
      </CardActions>
    </Card>
  );
};
