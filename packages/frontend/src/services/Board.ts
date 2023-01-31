import {apolloClient} from './graphql/apolloClient'

import {ADD_BOARD, DELETE_BOARD, GET_BOARDS, UPDATE_BOARD} from './graphql/UserQueries'

import {Board} from 'trello-clone-shared/src/model/board.model'

export const getBoards = async (): Promise<Board | undefined> => {
    const {data} = await apolloClient.query({
        query: GET_BOARDS,
        variables: {}
    })
    return data.getBoards
}

export const addBoard = async (): Promise<Board | undefined> => {
    try {
        const board = {
            "name": "New Board"
        }
        const {data} = await apolloClient.mutate({
            mutation: ADD_BOARD,
            variables: {board}
        })
        return data.addBoard
    } catch (error) {
        // TODO:: Log error
        return undefined
    }
}

export const updateBoard = async (board: Board): Promise<Board | undefined> => {
    try {
        const {data} = await apolloClient.mutate({
            mutation: UPDATE_BOARD,
            variables: {board}
        })
        return data.updateBoard
    } catch (error) {
        // TODO:: Log error
        return undefined
    }
}

export const deleteBoard = async (id: number): Promise<number> => {
    try {
        const {data} = await apolloClient.mutate({
            mutation: DELETE_BOARD,
            variables: {id}
        })
        return data.deleteBoard
    } catch (error) {
        // TODO:: Log error
        return 0
    }
}
