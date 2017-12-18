// function to transform redux store to props to pass to presentational components

const mapStateToProps = state => {
  return {
    letters: state.items
  }
}

// function that received dispatch() and returns callback props that you want
//  to inject into the presentational components

const mapDispatchToProps = dispatch => {
  return {
    onLettersClick: () => {
      dispatch(invalidateAbcs())
    }
  }
}
