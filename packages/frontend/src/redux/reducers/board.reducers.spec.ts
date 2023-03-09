import {addBoardReducer, deleteBoardReducer, fetchBoardsReducer, updateBoardReducer} from "./boards.reducers";

import {Board} from 'trello-clone-shared/src/model/board.model'

describe('Board Reducers', () => {

    test('fetchBoardsReducer', () => {
        const action = {payload: 'payload'}
        expect(fetchBoardsReducer([], action)).toEqual('payload')
    })

    test('addBoardReducer', () => {
        const state: Board[] = []
        expect(addBoardReducer(state, {payload: {name: 'name'}}))
    })

    test('updateBoardReducer', () => {
        const state: Board[] = [{id: 1, name: 'name'}]
        const action = {payload: {id: 1, name: 'modifiedName'}}
        updateBoardReducer(state, action)
        expect(state[0].name).toEqual('modifiedName')
    })

    test('updateBoardReducer - wrong ID', () => {
        const state: Board[] = [{id: 1, name: 'name'}]
        const action = {payload: {id: 2, name: 'modifiedName'}}
        updateBoardReducer(state, action)
        expect(state[0].name).toEqual('name')
    })

    test('updateBoardReducer - no payload', () => {
        const state: Board[] = [{id: 1, name: 'name'}]
        const action = {}
        updateBoardReducer(state, action)
        expect(state[0].name).toEqual('name')
    })

    test('deleteBoardReducer', () => {
        const state: Board[] = [{id: 1, name: 'name'}]
        deleteBoardReducer(state, {payload: 1})
        expect(state.length).toEqual(0)
    })

    test('deleteBoardReducer - wrong ID', () => {
        const state: Board[] = [{id: 1, name: 'name'}]
        deleteBoardReducer(state, {payload: 2})
        expect(state.length).toEqual(1)
    })

    test('deleteBoardReducer - no payload', () => {
        const state: Board[] = [{id: 1, name: 'name'}]
        deleteBoardReducer(state, {})
        expect(state.length).toEqual(1)
    })
})