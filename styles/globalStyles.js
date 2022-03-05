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
      flexDirection: "row"
    },
    customBtn:{
        backgroundColor: "#89A2FA",
        width: 100,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        paddingTop: 12,
        elevation: 6,
    },
    customBtnOnPress:{
        backgroundColor: "#89A2FA",
        width: 100,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        paddingTop: 12,
        elevation: 0,
    },
    btnText:{
        color: "#ffffff",
        fontFamily: "MonsBold",
        flexWrap: "wrap"
    },
    
});
  