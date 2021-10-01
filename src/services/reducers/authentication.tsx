export interface AuthReducerProps {
    userToken: string | null | undefined;
    isLoading: boolean;
    isSignout: boolean;
}

const authReducerIntitialState: AuthReducerProps = {
    userToken: '',
    isLoading: true,
    isSignout: false,
};

const authReducer = (
    state: AuthReducerProps = authReducerIntitialState,
    action: { type: string; value: string | null | undefined }
) => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return { ...state, userToken: action.value, isLoading: false };
        case 'SIGN_IN':
            return { ...state, userToken: action.value, isSignout: false };
        case 'SIGN_UP':
            return { ...state, userToken: action.value, isSignout: false };
        case 'SIGN_OUT':
            return { ...state, isSignout: true };

        default:
            return state;
    }
};

export default authReducer;
