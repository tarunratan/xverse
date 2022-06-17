import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import {makeStyles} from "@material-ui/core/styles";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../src/component/Home";

import Latest from "../src/component/Latestproduct";
import Liqudity from "./component/liqudity";
import Cratepair from "./component/cratepair";
import Removepair from "./component/removepair";
import Liquditytable from "./component/liquditytable";

import Admin from "../src/component/AdminPage";
import Manage from "../src/component/managewallet";
import Details from "../src/component/discountdetails";
import YourDetails from "../src/component/yourdiscountdetails";
import CreateSale2 from "../src/component/createSaleS2";
import CreateSale3 from "../src/component/createSaleS3";

import CreateOption from "../src/component/createoption";
import CreateSingle from "../src/component/createsingle";
import CreateMulti from "../src/component/createmultiple";
import Applyartist from "../src/component/appaly_artist";
import Creator from "../src/component/creator";
import Creatornft from "../src/component/creatorNFT";

import DiscoverNew from "../src/component/discoverNew";
import FAQ from "../src/component/Faq";

import Info from "../src/component/info";
import {ToastContainer} from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/createoption" element={<CreateOption />} />
          <Route path="/createsingle" element={<CreateSingle />} />
          <Route path="/createMulti" element={<CreateMulti />} />
          <Route path="/mynft-details" element={<Info />} />
          <Route path="/mynft-details/:token_id" element={<Info />} />
          <Route path="/profile/:user" element={<Admin />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/artist" element={<Applyartist />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/creatornft" element={<Creatornft />} />

          <Route path="/discoverNew" element={<DiscoverNew />} />

          {/* <Route path="/latest" element={<Latest />} />
      <Route path="/Liqudity" element={<Liqudity />} />
      <Route path="/Cratepair" element={<Cratepair />} />
      <Route path="/Removepair" element={<Removepair />} />
      <Route path="/Liquditytable" element={<Liquditytable />} /> */}

          {/* <Route path="/createsalestep2" element={<CreateSale2 />} />
      <Route path="/createsalestep3" element={<CreateSale3 />} />


      <Route path="/admin" element={<Admin />} />
      <Route path="/managewallet" element={<Manage />} />
      <Route path="/details" element={<Details />} />
      <Route path="/yourdetails" element={<YourDetails />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
