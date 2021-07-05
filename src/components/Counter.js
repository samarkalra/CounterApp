import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseCount, decreaseCount } from '../store/actions/CounterActions';

const Counter = ({ count, increaseCount, decreaseCount }) => {
    return (
        <View style={styles.container}>
            <View style={styles.counterContainer}>
                <Text style={styles.title}>Counter</Text>
                <View style={styles.btnContainer}>
                    <Icon
                        name='minussquareo'
                        size={50}
                        onPress={decreaseCount}
                    />
                    <Text style={styles.countText}>{count}</Text>
                    <Icon
                        name='plussquareo'
                        size={50}
                        onPress={increaseCount}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
    },
    counterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        padding: 8
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    countText: {
        fontSize: 32
    }
});

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        increaseCount,
        decreaseCount
    },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
