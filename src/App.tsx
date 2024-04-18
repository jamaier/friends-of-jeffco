import React from "react";
import "./styles/App.css";
import { colors } from "./config/colors";

import Header from "./components/header/Header";
import Navbar from "./components/navigation/Navbar";
import DistrictsTable from "./components/tableInfo/DistrictsTable";
import ReasonsSection from "./components/bondInfo/ReasonsSection";
import BondDetailsSection from "./components/bondInfo/BondDetailsSection";
import VoteInformationSection from "./components/voterInfo/VoteInformationSection";
import Footer from "./components/Footer";
import UseOfFundsSection from "./components/useOfFunds/UseOfFundsSection";
import ServiceOverviewSection from "./components/tableInfo/ServiceOverviewSection";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="App" style={{ backgroundColor: colors.background }}>
      <Header />
      <Navbar />
      <div className="App-body">
        <section>
          <Hero />
        </section>
        <section id="reasons">
          <ReasonsSection />
        </section>
        <section id="details">
          <BondDetailsSection />
          <UseOfFundsSection />
        </section>
        <section id="districts">
          <ServiceOverviewSection />
          <DistrictsTable />
        </section>
        <section id="vote">
          <VoteInformationSection />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
