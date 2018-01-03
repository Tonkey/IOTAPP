import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import style from './styles'

export default class FetchComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>Please wait while we retrieve your data!</Text>
                <ActivityIndicator style={style.indicator} size={100} color="#0000ff" />
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