import React from "react";
import "./App.css";
import request from "./request";
import Row from "./row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  const rowData = [
    { id: 1, title: "Netflix Original", endUrl: request.fetchNetflixOrigin },
    { id: 2, title: "Trending Now", endUrl: request.fetchTrending },
    { id: 3, title: "Top Rated", endUrl: request.fetchTopRated },
    { id: 4, title: "Action Movies", endUrl: request.fetchActionMovies },
    { id: 5, title: "Comedy Movies", endUrl: request.fetchComedyMovies },
    { id: 6, title: "Horror Movies", endUrl: request.fetchHorroMovies },
    { id: 7, title: "Romance Movies", endUrl: request.fetchRomanceMovies },
    { id: 7, title: "Documentries", endUrl: request.fetchDocumentaries },
  ];

  const rows = rowData.map((data) => (
    <Row
      key={data.id}
      title={data.title}
      dataEndUrl={data.endUrl}
      isLargeRow={data.id === 1 ? true : false}
    />
  ));

  return (
    <div className="APP">
      <Nav/>
      <Banner />
      {rows}
    </div>
  );
}

export default App;
