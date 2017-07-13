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
  let data
  data = session
  beforeAll(() => {
    mockFetch(data)
  })

  it('startSession()', async () => {
    const response = await api.startSession()
    console.log(response)
    expect(response.data).toEqual(data)
  })
})
