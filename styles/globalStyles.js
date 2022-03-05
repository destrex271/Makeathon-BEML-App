import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    body: {
        backgroundColor: "#E0F6FF",
    },
    darkBody: {
        backgroundColor: "#0F0F0F",
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop:40,
      justifyContent: 'flex-start',
      flexDirection: "column"
    },
    customBtn:{
        backgroundColor: "#89A2FA",
        width: 100,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent:"center",
        elevation: 6,
    },
    customBtnOnPress:{
        backgroundColor: "#89A2FA",
        width: 100,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent:"center",
        elevation: 0,
    },
    customBtn2:{
        backgroundColor: "#89A2FA",
        width: 400,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent:"center",
        elevation: 6,
    },
    customBtnOnPress2:{
        backgroundColor: "#89A2FA",
        width: 400,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent:"center",
        elevation: 0,
    },    
    btnText:{
        color: "#ffffff",
        fontFamily: "MonsBold",
        flexWrap: "wrap"
    },
});
  