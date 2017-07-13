import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Actions from './Actions'

describe('<Actions />', () => {
  const props = {
    like: () => {},
    dislike: () => {}
  }

  const wrapper = shallow(
    <Actions {...props} />
  )

  it('should render with props', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot()
    })

  it('Method #componentDidMount() should call likeButton.focus()', () => {
    //TODO implement test
  })

})
