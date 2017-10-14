const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        id:1,
        description: 'Teste',
        done: true
    },{
        id:2,
        description: 'Teste2',
        done: false
    }]
}

const todoReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'DESCRIPTION_CHANGED':  
            return {...state, description : action.payload}
        default: 
            return state
    }
}

export default todoReducer;