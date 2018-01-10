import { connect } from 'react-redux'
import AlphabetD3 from './AlphabetD3'
import { fetchAbcs, ABC_ENDPOINT } from '../../../redux/actions.js'

// function to transform redux store to props to pass to presentational components

const mapStateToProps = state => {
  return {
    letters: state.items
  }
}

// function that receives dispatch() and returns callback props that you want
//  to inject into the presentational components

const mapDispatchToProps = dispatch => {
  return {
    onLettersClick: () => {
      dispatch(fetchAbcs(ABC_ENDPOINT))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlphabetD3)
