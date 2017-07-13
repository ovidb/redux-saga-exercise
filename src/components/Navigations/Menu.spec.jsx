import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Menu from './Menu'

describe('<Menu />', () => {
  const props = {

    isOpen: false,
    pageWrapId: '',
    toggleMenu: () => {}
  }
  it('should render component with props', () => {
    const wrapper = shallow(<Menu {...props} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
