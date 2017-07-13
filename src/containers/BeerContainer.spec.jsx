import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import BeerContainer from './BeerContainer'

describe('<BeerContainer />', () => {
  const props = {
    beer: {}
  }

  const wrapper = shallow(
    <BeerContainer {...props} />
  )

  it('should render with props', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot()
    })

  it('Method #componentWillReceiveProps() should conditionally call setLoadingBeer(true)', () => {
    //TODO implement test
  })

  it('Method #setLoadingBeer() should set state of loadingBeer', () => {
    //TODO implement test
  })
})
