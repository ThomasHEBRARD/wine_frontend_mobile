import React from 'react';
import { SafeAreaView } from 'react-native';
import Button from 'component/Button';
import BackArrow from 'main/Navigation/BackArrow';
import { SVG_ICON } from 'svg/enum';
import Store from 'services/reducers/store';
import { connect } from 'react-redux';
import bottle from 'services/api/bottles';

const MyBottlesRemovalHeader = (props: { navigation: any }) => {
    const { navigation } = props;

    return (
        <SafeAreaView style={{ display: 'flex', flexDirection: 'row' }}>
            <BackArrow navigation={navigation} />
            <Button
                icon={SVG_ICON.EYE_OPEN}
                text={''}
                subtext={''}
                onClick={async () => {
                    const bottlesToRemove = Store.getState().removedBottlesReducer.bottlesToRemove;
                    await bottle.removeBottles(bottlesToRemove);
                }}
            />
        </SafeAreaView>
    );
};

const mapStateToProps = (state: { bottlesToRemove: any }) => {
    return { bottlesToRemove: state.bottlesToRemove };
};
const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return { dispatch: (action: any) => dispatch(action) };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyBottlesRemovalHeader);
