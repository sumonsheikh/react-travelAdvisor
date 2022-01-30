import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyle from "./style";

const ListItem = () => {
  const classes = useStyle();
  const [type, setType] = useState("restaurents");
  const [rating, setRatings] = useState("");
  return (
    <div className={classes.container}>
      <Typography varient="h4">
        Restaurents, Hotels, Attraction around you
      </Typography>

      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value={"restaurents"}>Restaurent</MenuItem>
          <MenuItem value={"hotels"}>Hotels</MenuItem>
          <MenuItem value={"attarction"}>Attraction</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Ratings</InputLabel>
        <Select value={rating} onChange={(e) => setRatings(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default ListItem;
