import ActionTypes from './actions';

//Action Creators
//function returning action for increasing count in redux store
export const increaseCount = () => ({
    type: ActionTypes.INCREASE_COUNT
})

//function returning action for decreasing count in redux store
export const decreaseCount = () => ({
    type: ActionTypes.DECREASE_COUNT
})