import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { TinderContainer } from './TinderContainer'
import * as actions from '../actions'

describe('<TinderContainer />', () => {
  const props = {
    openSideMenu: jest.fn(),
    addBeerToCart: jest.fn(),
    closeSideMenu: jest.fn(),
    beers: [],
    beer: {}
  }

  wrapper = shallow(
    <LoginContainer {...props} />
  )

  it('should render with default props', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot()
    })

})
