import React from "react";

const LandingPage = ({ news }) => {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #999",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <div style={{ padding: "20px" }}>
        <h2 style={{ fontFamily: "monospace", fontSize: "35px" }}>
          {news[0]?.title}
        </h2>
        <h3
          style={{
            fontFamily: "monospace",
            fontSize: "20px",
            color: "gray",
            marginTop: "25px",
          }}
        >
          {news[0]?.description}
        </h3>
      </div>
      <img
        src={news[0]?.urlToImage}
        style={{ width: "550px", height: "450px" }}
        alt="Image"
      />
    </div>
  );
};

export default LandingPage;
