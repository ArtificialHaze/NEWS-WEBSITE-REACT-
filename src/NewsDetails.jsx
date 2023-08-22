import React from "react";
import { useLocation } from "react-router-dom";

const NewsDetails = () => {
  const location = useLocation();

  return (
    <div style={{ padding: "30px" }}>
      <h1>{location.state.data.title}</h1>
      <h3>{location.state.data.description}</h3>
      <h4>{location.state.data.author}</h4>
      <h6>{location.state.data.source.name}</h6>
    </div>
  );
};

export default NewsDetails;
