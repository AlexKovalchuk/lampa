import React from "react";
import { connect } from "react-redux";

const HomeComponent = props => {

  return (
    <div className="home-container">
      <h1 className="home-title">HOME</h1>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {

};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
export default Home;