import React from "react";
import "./App.css";
import rowData from "./requests";
import Row from "./row";

// 6a3a8438ff404196f75474de75e61aeb

// api_access_token = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTNhODQzOGZmNDA0MTk2Zjc1NDc0ZGU3NWU2MWFlYiIsInN1YiI6IjY1YjMzZTMzNTc1MzBlMDE0N2Q5MzJlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jp1axe0zGbvberyJ2DcP-gJjf9jLvrVSoeHouD2fQck;

function App() {
  const rows = rowData.map((data) => (
    <Row
      key={data.id}
      title={data.title}
      dataEndUrl={data.endUrl}
      isLargeRow={data.id === 1 ? true : false}
    />
  ));

  return <div className="APP">{rows}</div>;
}

export default App;
