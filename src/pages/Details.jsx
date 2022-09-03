import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

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

export default function Details() {
  const [expanded, setExpanded] = React.useState(true);
  const [animationParent] = useAutoAnimate();
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const location = useLocation();
  const detail = location.state;
  console.log(detail);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const capitilize = (str) => {
    let x = str.split(" ");
    let y = x.map((item) => {
      return item[0].toUpperCase() + item.slice(1).toLowerCase() + " ";
    });
    return y;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
      className="cont"
    >
      <Card sx={{ maxWidth: 345 }} className="cardt">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {detail.sys.country}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={detail.name}
          subheader={new Date().toDateString()}
        />
        <CardMedia
          className="card"
          component="img"
          height="150"
          image={detail.iconUrl}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <span>{detail.name} </span>
            &nbsp;&nbsp;&nbsp;
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            {/* <ExpandMoreIcon />
             */}
          </ExpandMore>
          <Collapse ref={animationParent} in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                <ul>
                  <li> Humidity : {detail.main.humidity}</li>
                  <li>Pressure : {detail.main.pressure}</li>
                  {/* <li>Description : {detail.weather[0].description}</li> */}
                  <li>
                    Description : {capitilize(detail.weather[0].description)}
                  </li>
                </ul>
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              sx={{ marginLeft: "1rem", marginBottom: "2rem" }}
              color="primary"
              onClick={() => navigate("/")}
            >
              Back
            </Button>
          </Collapse>
        </CardActions>
      </Card>
    </div>
  );
}
