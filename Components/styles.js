import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    homeContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    contentContainer: {
        // padding: 20
    },
    plantContainer: {
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
        alignItems: 'center',
        margin: 5,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: 'green',
        borderRadius: 40
    },
    plantTitle: {
        justifyContent: 'center',
        fontSize: 24
    },
    plantText: {

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
    },
    responseText: {
        textAlign: 'center'
    },
    indicator: {
        alignItems: 'center'
    }
})