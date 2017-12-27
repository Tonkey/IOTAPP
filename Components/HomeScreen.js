import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import PlantComponent from './PlantComponent'
import FetchComponent from './FetchComponent'
import SendComponent from './SendComponent'
import TimeoutComponent from './TimeoutComponent'
import ScrollListComponent from './ScrollListComponent'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            plants: [
                { name: 'plant1', moisture: 200, waterAmount: 100, isChosen: false },
                { name: 'plant2', moisture: 200, waterAmount: 100, isChosen: false },
                { name: 'plant3', moisture: 200, waterAmount: 100, isChosen: false },
                { name: 'plant4', moisture: 200, waterAmount: 100, isChosen: false },
                { name: 'plant5', moisture: 200, waterAmount: 100, isChosen: false },
                { name: 'plant6', moisture: 200, waterAmount: 100, isChosen: false },
                { name: 'plant7', moisture: 200, waterAmount: 100, isChosen: false },
                { name: 'plant8', moisture: 200, waterAmount: 100, isChosen: false },
                { name: 'plant9', moisture: 200, waterAmount: 100, isChosen: false },
                { name: 'plant10', moisture: 200, waterAmount: 100, isChosen: false },
                { name: 'plant11', moisture: 200, waterAmount: 100, isChosen: false },
                { name: 'plant12', moisture: 200, waterAmount: 100, isChosen: false },
            ],
            fetchTimeout: false,
            sendTimeout: false,
            isFetching: false,
            isSending: false,
            retryWith: null,
            response: 'Version: 2.3.0',
            retryCount: 0
        }
        this.fetchInitData = this.fetchInitData.bind(this)
        this.updatePlantChosen = this.updatePlantChosen.bind(this)
        this.sendData = this.sendData.bind(this)
        this.returnToList = this.returnToList.bind(this)
    }

    fetchInitData() {
        console.log('retry count: ' + this.state.retryCount)
        this.setState({ isFetching: true })
        fetch('http://192.168.4.1:80/')
            .then((response) => {
                if (response.ok) {
                    console.log(response.status)
                    return response.json()
                }
                console.log('Network Response was not good')
            }).then((responseJson) => {
                var msg = JSON.stringify(responseJson)
                this.updatePlantChosen(responseJson.plantName)
                this.setState({ response: msg, fetchTimeout: false, isFetching: false, retryCount: 0 })
            }).catch((error) => {
                var msg = 'there was an error: ' + error.message
                if (this.state.retryCount < 1) {
                    this.setState({ retryCount: this.state.retryCount + 1 })
                    this.fetchInitData()
                } else {
                    this.setState({ response: msg, fetchTimeout: true, isFetching: false, retryCount: 0 })
                }
            })
    }

    returnToList() {
        this.setState({ fetchTimeout: false, sendTimeout: false })
    }

    sendData(newPlant) {
        console.log('retry count: ' + this.state.retryCount)
        console.log('sending:' + newPlant.name + ' | ' + newPlant.moisture)
        this.setState({ isSending: true })
        let fetchString = 'http://192.168.4.1:80/data?minMoistureLevel=' + newPlant.moisture + '&waterTime=' + newPlant.waterAmount + '&plantName=' + newPlant.name
        fetch(fetchString)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                console.log('Network Response was not good')
            }).then((responseJson) => {
                var msg = JSON.stringify(responseJson)
                this.updatePlantChosen(responseJson.plantName)
                this.setState({ response: msg, sendTimeout: false, isSending: false, retryCount: 0 })
            }).catch((error) => {
                var msg = 'there was an error: ' + error.message
                if (this.state.retryCount < 1) {
                    this.setState({ retryCount: this.state.retryCount + 1 })
                    this.sendData(newPlant)
                } else {
                    this.setState({ response: msg, sendTimeout: true, isSending: false, retryWith: newPlant, retryCount: 0 })
                }
            })
    }

    updatePlantChosen(newPlant) {
        var list = this.state.plants
        list.forEach((plant) => {
            if (plant.name == newPlant && plant.isChosen == true) {
                // basically do nothing...
            } else if (plant.isChosen == true) {
                plant.isChosen = false
            } else if (plant.name == newPlant) {
                plant.isChosen = true
            }
        })
        this.setState({ plants: list })
    }

    render() {
        let doRender = null
        switch (true) {
            case this.state.isFetching:
                doRender = <FetchComponent retries={this.state.retryCount} />
                break;
            case this.state.isSending:
                doRender = <SendComponent retries={this.state.retryCount}/>
                break;
            case this.state.fetchTimeout:
                doRender = <TimeoutComponent handleClick={this.fetchInitData} errText={this.state.response} state={'FETCH'} return={this.returnToList} />
                break;
            case this.state.sendTimeout:
                doRender = <TimeoutComponent handleClick={this.sendData} errText={this.state.response} state={'SEND'} retryWith={this.state.retryWith} return={this.returnToList} />
                break;
            default:
                doRender = <ScrollListComponent plants={this.state.plants} sendData={this.sendData} fetch={this.fetchInitData} response={this.state.response} />
                break;
        }
        return (
            <View style={{ flex: 1 }}>
                {doRender}
            </View>
        )
    }
}