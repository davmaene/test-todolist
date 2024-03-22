export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task
});

export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const login = (username, password) => {
    return async (dispatch, getState) => {
        const { users } = getState();
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            dispatch({ type: 'LOGIN_SUCCESS' });
        } else {
            dispatch({ type: 'LOGIN_FAILURE' });
        }
    };
};