export interface authReducerProps {
    userToken: string | null | undefined;
    isLoading: boolean;
    isSignout: boolean;
}

const authReducerIntitialState: authReducerProps = {
    userToken: '',
    isLoading: true,
    isSignout: false,
};

const authReducer = (
    state: authReducerProps = authReducerIntitialState,
    action: { type: string; value: string | null | undefined }
) => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return { ...state, userToken: action.value, isLoading: false };
        case 'SIGN_IN':
            return { ...state, userToken: action.value, isSignout: false };
        case 'SIGN_OUT':
            return { ...state, isSignout: true, userToken: null };

        default:
            return state;
    }
};

export default authReducer;
