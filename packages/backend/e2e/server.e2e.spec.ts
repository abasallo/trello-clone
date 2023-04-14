import * as http from 'http'

import axios from 'axios'

import { ReasonPhrases, StatusCodes } from 'http-status-codes'

import app from '../src/app'

const TEST_SERVER_PORT = 4001

let server: http.Server

beforeAll(async () => {
  server = app.listen({ port: TEST_SERVER_PORT }, () =>
    console.log(`Test Server initialised on port: ${TEST_SERVER_PORT}`)
  )
})

afterAll(() => {
  server.close()
})

let addedBoardId = 4

describe('Server E2E tests', () => {
  describe('Health Check E2E tests', () => {
    test('Expected response for Health Check', async () => {
      const { status, statusText, data } = await axios({
        method: 'get',
        url: `http://localhost:${TEST_SERVER_PORT}/`,
      })

      expect(status).toEqual(StatusCodes.OK)
      expect(statusText).toEqual(ReasonPhrases.OK)

      expect(data).toMatchSnapshot()
    })
  })

  describe('Colour tests', () => {
    test('Expected response for Colour Endpoint', async () => {
      const { status, statusText, data } = await axios({
        method: 'get',
        url: `http://localhost:${TEST_SERVER_PORT}/colour`,
      })

      expect(status).toEqual(StatusCodes.OK)
      expect(statusText).toEqual(ReasonPhrases.OK)

      expect(data.match(/^#[0-9a-f]{3,6}$/i))
    })
  })

  describe('Board E2E tests', () => {
    test('AddBoards', async () => {
      const { status, statusText, data } = await axios({
        method: 'post',
        url: `http://localhost:${TEST_SERVER_PORT}/graphql/`,
        data: {
          query: `
            mutation AddBoard($board: BoardInput!) {
              addBoard(board: $board) {
                id,
                name
              }
            }
          `,
          variables: {
            board: {
              name: 'Board IV',
            },
          },
        },
      })

      expect(status).toEqual(StatusCodes.OK)
      expect(statusText).toEqual(ReasonPhrases.OK)

      addedBoardId = data.data.addBoard.id

      expect(data).toMatchSnapshot({
        data: {
          addBoard: {
            id: expect.any(String),
          },
        },
      })
    })

    test('UpdateBoard', async () => {
      const { status, statusText, data } = await axios({
        method: 'post',
        url: `http://localhost:${TEST_SERVER_PORT}/graphql/`,
        data: {
          query: `
              mutation UpdateBoard($board: BoardInput!) {
                updateBoard(board: $board) {
                  id,
                  name
                }
              }
            `,
          variables: {
            board: {
              id: addedBoardId,
              name: 'Board IV - Updated',
            },
          },
        },
      })

      expect(status).toEqual(StatusCodes.OK)
      expect(statusText).toEqual(ReasonPhrases.OK)

      expect(data).toMatchSnapshot({
        data: {
          updateBoard: {
            id: expect.any(String),
          },
        },
      })
    })

    test('DeleteBoard', async () => {
      const { status, statusText, data } = await axios({
        method: 'post',
        url: `http://localhost:${TEST_SERVER_PORT}/graphql/`,
        data: {
          query: `
          mutation DeleteBoard($id: ID!) {
            deleteBoard(id: $id)
          }
        `,
          variables: {
            id: addedBoardId,
          },
        },
      })

      expect(status).toEqual(StatusCodes.OK)
      expect(statusText).toEqual(ReasonPhrases.OK)

      expect(data).toMatchSnapshot()
    })

    test('GetBoards', async () => {
      const { status, statusText, data } = await axios({
        method: 'post',
        url: `http://localhost:${TEST_SERVER_PORT}/graphql/`,
        data: {
          query: `
              query GetBoards {
                getBoards {
                  id,
                  name
                }
              }
            `,
        },
      })

      expect(status).toEqual(StatusCodes.OK)
      expect(statusText).toEqual(ReasonPhrases.OK)

      expect(data).toMatchSnapshot()
    })
  })
})
