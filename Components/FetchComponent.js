import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'

export default class FetchComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Please wait while we retrieve your data!</Text>
                <ActivityIndicator style={styles.indicator} size={100} color="#0000ff" />
                <Text style={styles.text}>{this.props.retries}</Text>
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