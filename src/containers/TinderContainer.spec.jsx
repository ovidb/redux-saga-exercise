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
    beer: {},
    fetchBeers: jest.fn(),
    session: {id: 0}
  }

  const wrapper = shallow(
    <TinderContainer {...props} />
  )

  it('should render with default props', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot()
    })

  it('Method #componentWillReceiveProps() should conditionally call fetchBeers', () => {
    // console.log(wrapper.instance())
    const instance = wrapper.instance()
    instance.componentWillReceiveProps({ session: {id: 1} })
    instance.startSession = jest.fn()
    expect(props.fetchBeers).toHaveBeenCalled()
  })
  it('Method #like() should call next()', () => {

  })
})
