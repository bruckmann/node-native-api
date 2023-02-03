import { assert, strictEqual } from 'node:assert'
import test from 'node:test'

const callTracer = new assert.CallTracker()
process.on('exit', () => callTracer.verify())

test('[MOVIES CONTROLLERS] - endpoint test suite ', async ({ test }) => {
  test('it should return all movies', async () => {
    const moviesMock = {
      id: '1',
      title: 'Lord of Rings',
      genre: 'Action',
    }
  })
})
