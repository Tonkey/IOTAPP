import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'

import PlantComponent from './PlantComponent'

export default class ScrollListComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View className={container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {
                        this.props.plants.map((plant, index) => (
                            <PlantComponent key={plant.name} plant={plant} select={this.props.sendData} />
                        ))
                    }
                </ScrollView>
                <Text style={styles.responseText}>{this.props.response}</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.fetch()}>
                    <Text style={styles.buttonText}> Update </Text>
                </TouchableOpacity>
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
    contentContainer: {
        // padding: 20
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
    },
    responseText: {
        textAlign: 'center'
    }
})