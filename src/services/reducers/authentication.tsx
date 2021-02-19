const authReducer = (
    state: { userToken: string | null | undefined; isLoading: boolean; isSignout: boolean } = {
        userToken: '',
        isLoading: true,
        isSignout: false,
    },
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
