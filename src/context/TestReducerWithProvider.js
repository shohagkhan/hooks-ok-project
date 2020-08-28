import React, {useState, createContext, useReducer} from 'react'

export const TestContext = createContext()

const ageReducer = (state, action) => {
    switch (action.type) {
        case 'plusAge':
            return state+1;
            break;
        case 'minusAge':
            return state-1;
            break
        case 'multiplyAge':
            return state * action.x;
            break
        default:
            break;
    }
}
/* We will call dispatch function in others components by the help of useContext
dispatch({type: 'plusAge'})
dispatch({type: 'minusAge'})
dispatch({type: 'multiplyAge', x: 5, y: 10}) */

export const TestProvider = (props) => {

    const [age, dispatch] = useReducer(ageReducer, 20, init)


    // const [age, setage] = useState()
    // const plusAge = () => {
    //     //Do something
    // }
    // const minusAge = () => {
    //     //Do something
    // }
    return (
        // <TestContext.Provider value={age, plusAge, minusAge}>
        <TestContext.Provider value={age, dispatch}>    
            {props.children}
        </TestContext.Provider>
    )
}
