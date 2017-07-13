import * as api from './index'
import { API_BASE_URL } from '../config'

const mockFetch = (data) => {
  global.fetch = jest.fn()

  fetch.mockImplementation(
    (params) => Promise.resolve({
      json: () => ({
        data,
        params
      })
    })
  )
}


describe('#API', () => {
  const session = {
    "id": "reactJSacademy"
  }
  beforeAll(() => {
    mockFetch(session)
  })

  it('startSession()', () => {
    api.startSession().then((response) => {
      expect(response.data).toEqual(session)
    })
  })
})
