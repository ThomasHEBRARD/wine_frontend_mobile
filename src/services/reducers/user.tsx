export interface UserReducerProps {
    id: string;
    email: string;
}

const userReducerIntitialState: UserReducerProps = {
    id: '',
    email: '',
};

const userReducer = (
    state: UserReducerProps = userReducerIntitialState,
    action: { type: string; value: string }
) => {
    switch (action.type) {
        case 'STORE_ID':
            return { ...state, id: action.value };
        case 'STORE_EMAIL':
            return { ...state, email: action.value };
        default:
            return state;
    }
};

export default userReducer;
