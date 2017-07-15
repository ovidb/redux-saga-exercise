import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Actions from './Actions'

describe('<Actions />', () => {
  const dislike = jest.fn()
  const like = jest.fn()
  const props = {
    dislike,
    like
  }

  const wrapper = shallow(
    <Actions {...props} />
  )

  it('should render with props', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('should call dislike function when clicked', () => {
     wrapper.find('button').first().simulate('click')
     expect(dislike).toHaveBeenCalled()
  })

  it('Method #componentDidMount() should call likeButton.focus()', () => {
    //TODO implement test
  })

})
