import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'

export default class SendComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Please wait while we send your data!</Text>
                <ActivityIndicator style={styles.indicator} size={100} color="#00ff00" />
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