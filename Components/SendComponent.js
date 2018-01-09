import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import style from './styles'
import PlantComponent from './PlantComponent';

export default class SendComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>Please wait while we send your data!</Text>
                <ActivityIndicator style={style.indicator} size={PlantComponent.OS === 'ios' ? 'large' : 100} color="#00ff00" />
                <Text style={style.text}>{this.props.retries}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        textAlign: 'center'
    },
    indicator: {
        alignItems: 'center'
    }
})