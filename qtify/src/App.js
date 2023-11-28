import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { fetchNewAlbums, fetchTopAlbums } from "./api/api";

function App() {
  const [data, setData] = useState({});
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
    });
  };
  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
  }, []);
  const { topAlbums = [], newAlbums = [] } = data;

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Outlet context={{data:{topAlbums,newAlbums}}} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
