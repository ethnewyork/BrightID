import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import HeaderButtons from "react-navigation-header-buttons";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomNav from "./BottomNav";
import Avatar from "../containers/Avatar";

/**
 * Home screen of BrightID
 */

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: "BrightID",
		headerBackTitle: "Home",
		headerRight: (
			<HeaderButtons IconComponent={Ionicons} iconSize={32} color="#fff">
				<HeaderButtons.Item
					title="more"
					iconName="ios-more-outline"
					onPress={() => console.warn("more")}
				/>
			</HeaderButtons>
		),
		headerLeft: (
			<HeaderButtons
				IconComponent={Ionicons}
				iconSize={32}
				color="#fff"
				left={true}
			>
				<HeaderButtons.Item
					title="help"
					iconName="ios-help-circle-outline"
					onPress={() => console.warn("help")}
				/>
			</HeaderButtons>
		)
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.user}>
					<Avatar />
					<Text style={styles.name}>{this.props.name}</Text>
				</View>
				<View style={styles.trustScoreContainer}>
					<Text style={styles.trustScore}>
						{this.props.trustScore}% Trusted
					</Text>
				</View>
				<View style={styles.counts}>
					<View style={styles.countsGroup}>
						<Text style={styles.countsText}>{this.props.connectionsCount}</Text>
						<Text style={styles.countsText}>Connections</Text>
					</View>
					<View style={styles.countsGroup}>
						<Text style={styles.countsText}>{this.props.groupsCount}</Text>
						<Text style={styles.countsText}>Groups</Text>
					</View>
				</View>
				<View style={styles.connectContainer}>
					<Text style={styles.connectText}>CONNECT</Text>
				</View>
				<BottomNav {...this.props} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "space-between"
	},
	name: {
		fontSize: 33,
		fontWeight: "bold",
		marginTop: 7,
		textAlign: "center"
	},
	user: {
		marginTop: 20,
		marginBottom: 18
	},
	trustScoreContainer: {
		borderBottomColor: "#333",
		borderTopColor: "#333",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		width: "80%",
		paddingTop: 7,
		paddingBottom: 7
	},
	trustScore: {
		textAlign: "center",
		color: "green",
		fontSize: 18
	},
	counts: {
		justifyContent: "space-evenly",
		flexDirection: "row",
		width: "80%",
		paddingTop: 16,
		paddingBottom: 16
	},
	countsText: {
		textAlign: "center",
		fontSize: 18
	},
	connectContainer: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ccc",
		height: 200
	},
	connectText: {
		fontSize: 12
	}
});