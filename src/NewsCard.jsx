import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import { Link } from "react-router-dom";

const NewsCard = ({ data }) => {
  return (
    <div>
      <Box>
        <Card elevation={0}>
          <CardMedia
            height="200"
            component={"img"}
            image={data.urlToImage}
          ></CardMedia>
          <CardContent>
            <Typography style={{ fontWeight: "bold" }}>{data.title}</Typography>
            <Typography style={{ fontSize: "10px" }}>
              {moment(data.publishedAt).format("DD-MM-YYYY")}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small">
              <Link
                state={{ data }}
                style={{ textDecoration: "none" }}
                to={"/newsData"}
              >
                More
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default NewsCard;
