import React from "react";
import Card from "@material-ui/core/Card";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import "./CreateApi.css";
import Button from "@material-ui/core/Button";
import iso_logo_img from "./Assets/iso-logo.svg";
import profile_img from "./Assets/profile.png";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const CreateApi = (props) => {
  const [value, setValue] = React.useState("female");
  const [status, setStatus] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCheckbox = (event) => {
    setStatus(event.target.checked);
  };

  return (
    <div>
      <div className="top-panel">
        <div className="top-panel__left">
          <img src={iso_logo_img} className="top-panel__img" />
          <div className="top-panel__left--container">
            <label>Create an API</label>
            <label>Security Gateway / APIs / Create an API</label>
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

      <h3 style={{ margin: "0" }}>Create an API</h3>
      <div style={{ marginBottom: "20px" }}>
        Clone, import or create your new API from scratch
      </div>

      <Card className="create-card">
        <div>
          <label>Creation Method</label>
          <RadioGroup
            row
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
            style={{ marginLeft: "50px" }}
          >
            <FormControlLabel
              value="new_api"
              control={<Radio />}
              label="New API"
            />
            <FormControlLabel value="clone" control={<Radio />} label="Clone" />
            <FormControlLabel
              value="gateway"
              control={<Radio />}
              label="Import API Gateway"
            />
            <FormControlLabel
              value="swagger"
              control={<Radio />}
              label="Import Swagger"
            />
          </RadioGroup>
        </div>
        <div>
          <label>API Information</label>
          <br />
          <div style={{ marginLeft: "50px" }}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className="create-card__text"
              style={{ marginBottom: "10px", marginTop: "10px" }}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
            />
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={status}
                  onChange={handleCheckbox}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Active"
            />
          </div>
        </div>
        <div
          style={{
            display: "inline-flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <Button onClick={() => props.setShowCreateComp(false)}>
              <ArrowBackIosIcon fontSize="small" />
              BACK
            </Button>
          </div>
          <Button variant="contained" color="primary">
            CREATE API
          </Button>
        </div>
      </Card>

      <footer>Copyright &copy; Octopi One 2020. All rights reserved.</footer>
    </div>
  );
};
