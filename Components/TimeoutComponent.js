import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class TimeoutComponent extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        if (this.props.state == 'FETCH') {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.errText}</Text>
                    <Text style={styles.text}>Check that you are connected to the module, and try again!</Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.handleClick()}>
                        <Text style={styles.buttonText}> Update </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.return()}>
                        <Text style={styles.buttonText}> Return to plant list </Text>
                    </TouchableOpacity>
                </View>
            )
        } else if (this.props.state == 'SEND') {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.errText}</Text>
                    <Text style={styles.text}>Check that you are connected to the module, and try again!</Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.handleClick(this.props.retryWith)}>
                        <Text style={styles.buttonText}> Try sending again </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.return()}>
                        <Text style={styles.buttonText}> Return to plant list </Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    handleClick(data) {
        if (this.props.state == 'FETCH') {
            this.props.handleClick()
        } else {
            this.props.handleClick(data)
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center'
    },
    title: {
        fontSize: 36,
        textAlign: 'center'
    },
    text: {
        fontSize: 24,
        textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 10,
        borderRadius: 40
    },
    buttonText: {
        fontSize: 16
    }
})