import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Main from './Main'

describe('<Main />', () => {

  const wrapper = shallow(
    <Main />
  )

  it('should render', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot()
    })

  it('Method #toggleMenu() should assign beerImgWrapper.style.minHeight', () => {
    //TODO implement test
  })

})
