import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Tinder from './Tinder'

describe('<Tinder />', () => {
  const props = {
    beer: {},
    like: () => {},
    dislike: () => {},
    counterAnimation: ''
  }
  it('should render component with props', () => {
    const wrapper = shallow(<Tinder {...props} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
