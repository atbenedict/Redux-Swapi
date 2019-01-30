import { React, Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { CharacterList } from "../components";
import { getChars } from "../actions";
// import actions

class CharacterListView extends Component {
  componentDidMount() {
    this.props.getChars();
    // call our action
  }

  render() {
    if (this.props.isFetching) {
      console.log("fetching data");
      // return something here to indicate that you are fetching data
    }
    return (
      <div>
        {this.props.isFetching && (
          <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
        )}
        {this.props.characters && (
          <div className="CharactersList_wrapper">
            <CharacterList characters={this.props.characters} />
          </div>
        )}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => ({
  characters: state.characters,
  isFetching: state.isFetching
});
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    getChars /* action creators go here */
  }
)(CharacterListView);
