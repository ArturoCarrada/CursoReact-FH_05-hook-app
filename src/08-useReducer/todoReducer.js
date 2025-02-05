
export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            //localStorage.setItem('lsTodos', JSON.stringify([...initialState, action.payload]))
            return [...initialState, action.payload]
            
        case '[TODO] Remove Todo':
            //console.log(action.payload)
            return initialState.filter(todo => todo.id != action.payload)

        // case '[TODO] Clear All Todo':
        //     return []
   
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })


        default:
            return initialState
    }


}






