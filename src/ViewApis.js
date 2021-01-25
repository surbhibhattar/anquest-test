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
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import GroupIcon from "@material-ui/icons/Group";
import StarsIcon from "@material-ui/icons/Stars";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import SyncIcon from "@material-ui/icons/Sync";
import TextFormatIcon from "@material-ui/icons/TextFormat";
import { Icon } from "@material-ui/core";

export const ViewApis = (props) => {
  useEffect(() => {
    // fetch("https://anques.com/s/get_api_list.json")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }, []);

  return (
    <div className="container">
      <div className="top-panel">
        <div className="top-panel__left">
          <img src={iso_logo_img} className="top-panel__img" />
          <div className="top-panel__left--container">
            <label>APIs</label>
            <label>Security Gateway / APIs</label>
          </div>
        </div>
        <div className="top-panel__right">
          <div className="top-panel__right--card">
            <div className="text-container">
              <label>Mariano Diaz</label>
              <label>Functional Analyst</label>
            </div>
            <img src={profile_img} />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", marginTop: "20px" }}>
        <div className="side-panel">
          <IconButton>
            <ChromeReaderModeIcon />
          </IconButton>
          <IconButton>
            <FormatListNumberedRtlIcon />
          </IconButton>
          <IconButton>
            <GroupIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
          <IconButton>
            <StarsIcon />
          </IconButton>
          <hr style={{ width: "27px", marginBottom: 0, marginTop: 0 }} />

          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
        </div>

        <div style={{ width: "100%" }}>
          <div className="middle-panel">
            <div>Control & alert</div>
            <h2>Security Gateway</h2>
          </div>

          <div className="card-container">
            <hr
              style={{ margin: "0 auto", width: "100%", marginBottom: "20px" }}
            />
            <div className="api-label">APIs</div>
            <div style={{ display: "flex" }}>
              {data.map((each, index) => (
                <CardComponent data={each} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer>Copyright &copy; Octopi One 2020. All rights reserved.</footer>

      <IconButton
        style={{ position: "fixed", fontSize: "20px" }}
        className="add-button"
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
            <MenuItem onClick={handleClose} style={{ display: "inherit" }}>
              <span>Sync</span>
              <SyncIcon style={{ float: "right" }} />
            </MenuItem>
            <MenuItem onClick={handleClose} style={{ display: "inherit" }}>
              <span>Properties</span>
              <TextFormatIcon style={{ float: "right" }} />
            </MenuItem>
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
