import { connect } from 'react-redux'
import Abcs from '../components/Abcs'
import { invalidateAbcs } from '../actions'

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
      dispatch(invalidateAbcs())
    }
  }
}

const ReturnedAbcs = connect(
  mapStateToProps,
  mapDispatchToProps
)(Abcs)

export default ReturnedAbcs
