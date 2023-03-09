import {Board} from 'trello-clone-shared/src/model/board.model'

// TODO:: Type this actions, if it makes sense
export const fetchBoardsReducer = (state: Board[], action: { payload: any }) => action.payload

// TODO:: Type this actions, if it makes sense
export const addBoardReducer = (state: Board[], action: any) => {
    if (action.payload)
        state.push(action.payload)
}

// TODO:: Type this actions, if it makes sense
export const updateBoardReducer = (state: Board[], action: any) => {
    if (action.payload) {
        const index = state.findIndex(({id}) => (id === action?.payload?.id))
        if (index !== -1) {
            state.splice(index, 1)
            state.push(action.payload)
        }
    }
}

// TODO:: Type this actions, if it makes sense
export const deleteBoardReducer = (state: Board[], action: any) => {
    let index = state.findIndex(({id}) => {
        return id === action.payload
    })
    if (index !== -1)
        state.splice(index, 1)
}
