import React from 'react';
import { SafeAreaView } from 'react-native';
import BackArrow from 'main/Navigation/BackArrow';
import { connect } from 'react-redux';
import { ReducerStateProps } from 'services/reducers/combinedReducers';

const MyBottlesRemovalHeader = (props: { navigation: any }) => {
    const { navigation } = props;

    return (
        <SafeAreaView style={{ display: 'flex', flexDirection: 'row' }}>
            <BackArrow navigation={navigation} />
        </SafeAreaView>
    );
};

const mapStateToProps = (state: ReducerStateProps) => {
    return { bottlesToRemove: state.removedBottlesReducer.bottlesToRemove };
};
const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return { dispatch: (action: any) => dispatch(action) };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyBottlesRemovalHeader);
