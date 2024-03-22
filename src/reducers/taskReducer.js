const initialState = {
    tasks: [],
    users: [
        { id: 1, username: 'admin', password: 'admin' },
        { id: 2, username: 'user', password: 'password' },
        { id: 2, username: 'sam', password: 'sam' },
    ],
    isAuthenticated: false,
    authError: null
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                authError: null
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isAuthenticated: false,
                authError: 'Mot de passe ou nom d\'utilisateur incorrect !'
            };
        case 'LOGIN':
            const { username, password } = action.payload;
            const user = state.users.find(user => user.username === username && user.password === password);
            return {
                ...state,
                isAuthenticated: !!user
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                authError: null 
            };
        default:
            return state;
    }
};

export default taskReducer;
