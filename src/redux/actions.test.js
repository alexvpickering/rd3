// see https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md

import { REQUEST_ABCS, RECEIVE_ABCS } from './actions'
import { requestAbcs, receiveAbcs } from './actions'

describe('actions', () => {
  it('should create an action to signal ABCs request', () => {
    const expectedAction = {
      type: REQUEST_ABCS,
    }
    expect(requestAbcs()).toEqual(expectedAction)
  })

  it('should create an action to signal ABCs received', () => {
    const abcs = ['a', 'b', 'c']
    const expectedAction = {
      type: RECEIVE_ABCS,
      abcs
    }
    expect(receiveAbcs(abcs)).toEqual(expectedAction)
  })
})
