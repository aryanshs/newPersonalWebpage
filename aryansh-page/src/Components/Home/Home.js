import react from "react";
import "./Home.css";
import Nav from "../Nav/Nav";

export default function Home() {
  return (
    <div className="home">
      <div className="nav">
        <Nav />
      </div>
      <h1>Home</h1>
    </div>
  );
}
