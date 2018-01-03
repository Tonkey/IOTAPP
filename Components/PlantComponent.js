import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import style from './styles';

export default class PlantComponent extends Component {
	constructor(props) {
		super(props);

	}

	handleClick() { this.props.select(this.props.plant); }

	render() {
		let viewStyle = null;
		let doRender = null;

		switch (true) {
		case this.props.plant.isChosen:
			viewStyle = style.itemChosen;
			doRender = (
				<TouchableOpacity style={style.plantContainer}>
					<Text style={style.plantTitle}>{this.props.plant.name}</Text>
					<Text style={style.plantText}>Moisture Level: {this.props.plant.moisture + ' | water time: ' + this.props.plant.waterAmount}</Text>
				</TouchableOpacity>
			);
			break;

		default:
			viewStyle = style.item;
			doRender = (
				<TouchableOpacity style={style.plantContainer} onPress={() => { this.handleClick(); }}>
					<Text style={style.plantTitle}>{this.props.plant.name}</Text>
					<Text style={style.plantText}>Moisture Level: {this.props.plant.moisture + ' | water time: ' + this.props.plant.waterAmount}</Text>
				</TouchableOpacity>
			);
			break;
		}

		return (
			<View style={viewStyle}>
				{doRender}
			</View>
		);

	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 10,
		borderRadius: 40
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		margin: 5,
		borderColor: '#2a4944',
		borderWidth: 1,
		backgroundColor: '#d2f7f1',
		borderRadius: 40
	},
	itemChosen: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		margin: 5,
		borderColor: '#2a4944',
		borderWidth: 1,
		backgroundColor: 'green',
		borderRadius: 40
	},
	title: {
		justifyContent: 'center',
		fontSize: 24
	},
	text: {

	}
});