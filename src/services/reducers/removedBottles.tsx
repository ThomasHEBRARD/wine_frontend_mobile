import arrayReplace from 'services/helpers/arrayReplace';

export interface RemovedBottlesProps {
    bottleId: string;
    stockToRemove: number;
}

export interface RemovedBottlesReducerProps {
    bottlesToRemove: RemovedBottlesProps[];
}

const removedBottlesReducer = (
    state: RemovedBottlesReducerProps = { bottlesToRemove: [] },
    action: { type: string; value: { bottleId: string } }
) => {
    switch (action.type) {
        case 'ADD_BOTTLE_TO_REMOVE':
            const prevBottleDataAdding = state.bottlesToRemove.find(
                (bottles: RemovedBottlesProps) => bottles.bottleId === action.value.bottleId
            );
            if (prevBottleDataAdding) {
                return {
                    ...state,
                    bottlesToRemove: arrayReplace(
                        state.bottlesToRemove,
                        {
                            ...prevBottleDataAdding,
                            stockToRemove: prevBottleDataAdding.stockToRemove + 1,
                        },
                        (bottles: RemovedBottlesProps) => bottles.bottleId === action.value.bottleId
                    ),
                };
            } else {
                return {
                    ...state,
                    bottlesToRemove: [
                        ...state.bottlesToRemove,
                        { bottleId: action.value.bottleId, stockToRemove: 1 },
                    ],
                };
            }
        case 'REMOVE_BOTTLE_TO_REMOVE':
            const prevBottleDataRemove = state.bottlesToRemove.find(
                (bottles: RemovedBottlesProps) => bottles.bottleId === action.value.bottleId
            );
            if (prevBottleDataRemove) {
                if (prevBottleDataRemove.stockToRemove === 1) {
                    return {
                        ...state,
                        bottlesToRemove: state.bottlesToRemove.filter(
                            (bottles: RemovedBottlesProps) =>
                                bottles.bottleId !== action.value.bottleId
                        ),
                    };
                } else {
                    return {
                        ...state,
                        bottlesToRemove: arrayReplace(
                            state.bottlesToRemove,
                            {
                                ...prevBottleDataRemove,
                                stockToRemove: prevBottleDataRemove.stockToRemove - 1,
                            },
                            (bottles: RemovedBottlesProps) =>
                                bottles.bottleId === action.value.bottleId
                        ),
                    };
                }
            }
        case 'RESET_BOTTLE_TO_REMOVE':
            return { ...state, bottlesToRemove: [] };
        default:
            return state;
    }
};

export default removedBottlesReducer;
