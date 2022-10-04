import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import useDegree from "../hooks/useDegree";

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function WeatherCard({ data }) {
  const { iconUrl, main, title, weather, name, sys, id } = data;
  const {temp} = main
  console.log(temp)
  const [animationParent] = useAutoAnimate();
  const tempr = useDegree(temp)

  
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const [click, setClick] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function capitalizeWords(arr) {
    let x = arr.split(" ");
    return x.map(
      (element) =>
        element.charAt(0).toUpperCase() + element.slice(1).toLowerCase() + " "
    );
  }

  return (
    <div className="cardz">

   
    <Card   sx={{ maxWidth: 345 }} className="cardt">
      <CardHeader
      ref={animationParent}
        avatar={
          <Avatar sx={{ bgcolor: "#be88a9" }} aria-label="recipe">
            {sys.country}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={new Date().toDateString()}
      />
      <CardMedia
        onClick={() => navigate(`/details/${id}`, { state: data })}
        className="card"
        component="img"
        height="150"
        image={iconUrl}
        alt="Paella dish"
      />
      <CardContent  ref={animationParent}>
        <Typography variant="body2" color="text.secondary">
          <span>{name} </span>
          &nbsp;&nbsp;&nbsp;
          <span>{weather[0].main}</span>
          &nbsp;&nbsp;&nbsp;
          <strong style={{ color: tempr(Math.round(main.temp)) }}>
            {Math.round(main.temp)}
          </strong>
        </Typography>
     
      </CardContent>
    </Card>
    </div>
  );
}
