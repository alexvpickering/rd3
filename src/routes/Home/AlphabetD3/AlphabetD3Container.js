import { connect } from "react-redux";
import AlphabetD3 from "./AlphabetD3";
import { fetchAbcs, fetchWANIP } from "../../../redux/actions.js";

// function to transform redux store to props to pass to presentational components

const mapStateToProps = state => {
  return {
    letters: state.items,
    wanip: state.wanip
  };
};

// function that receives dispatch() and returns callback props that you want
//  to inject into the presentational components

const mapDispatchToProps = dispatch => {
  return {
    getLetters: endpoint => {
      dispatch(fetchAbcs(endpoint));
    },
    getWANIP: () => {
      dispatch(fetchWANIP());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlphabetD3);
