import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import BeerAttributes from './BeerAttributes'

describe('<BeerAttributes />', () => {
  it('should render component with props', () => {
    const beer = {"id":"82","title":"Karmeliet Triple","description":"<p>Do we really have to introduce Triple Karmeliet, our best-selling beer?</p>","country":"Belgium","type_beer":"Tripel","company":"Brasserie Bosteels","colour":"Blond","graduation":"6 %","size":"33 cl","price":"2.5","photo_link":"https://img.saveur-biere.com/img/p/82-14662-thickbox_sb3.jpg"}
    const wrapper = shallow(<BeerAttributes beer={beer} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
