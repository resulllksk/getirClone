import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
    headerMain:{
        height: height * 0.064,
        backgroundColor:'gray',
    },
    headerOne:{
        height: height * 0.064,
        width:'80%',
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
    },
    headerOneView:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft: 8,
        paddingLeft: 8,
        borderLeftColor:'white',
        borderLeftWidth: 2,

    },
    headerTwo:{
        width:'20%',
        height: height * 0.064,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 20,
    }
})
export default styles;