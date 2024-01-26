import React from "react";
import "./App.css";
import request from "./request";
import Row from "./row";
import Banner from "./Banner";
import Nav from "./Nav";

// 6a3a8438ff404196f75474de75e61aeb

// api_access_token = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTNhODQzOGZmNDA0MTk2Zjc1NDc0ZGU3NWU2MWFlYiIsInN1YiI6IjY1YjMzZTMzNTc1MzBlMDE0N2Q5MzJlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jp1axe0zGbvberyJ2DcP-gJjf9jLvrVSoeHouD2fQck;

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
