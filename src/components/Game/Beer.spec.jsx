import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Beer from './Beer'

describe('<Beer />', () => {
  const props = {
    beer: {},
    setLoadingBeer: () => {},
    loadingBeer: false
  }

  const wrapper = shallow(
    <Beer {...props} />
  )

  it('should render with props', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('Method #componentDidMount() should assign beerImgWrapper.style.minHeight', () => {
    //TODO implement test
  })

  it('Method #imageLoaded() should...', () => {
    //TODO implement test
  })

  it('Method #imageLoaded() should...', () => {
    //TODO implement test
  })

})
