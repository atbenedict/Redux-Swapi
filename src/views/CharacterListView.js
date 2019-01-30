import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { CharacterList } from "../components";
import { getChars } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getChars();
    // call our action
  }

  render() {
    if (this.props.isFetching) {
      <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />;
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  };
};
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    getChars /* action creators go here */
  }
)(CharacterListView);
