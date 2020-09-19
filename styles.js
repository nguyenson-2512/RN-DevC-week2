import React from "react";
import { StyleSheet } from 'react-native'

const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";
const BLUR_TEXT_COLOR = "#ABB0C6";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    header: {
      flex: 0.1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    backBtn: {
      marginLeft: 20,
    },
    filterBtn: {
      marginRight: 20,
    },
    user: {
      backgroundColor: "white",
      flex: 0.15,
      flexDirection: "row",
    },
    avatarWrapper: {
      flex: 0.4,
      justifyContent: "center",
      alignItems: "center",
    },
    avatar: {
      height: 100,
      width: 100,
      borderRadius: 100,
    },
    userInfo: {
      flex: 0.6,
      justifyContent: "center",
      alignItems: "flex-start",
    },
    btnWrapper: {
      flexDirection: "row",
      marginTop: 14,
    },
    btn: {
      height: 30,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    followBtn: {
      backgroundColor: FOLLOW_COLOR,
      width: 120,
    },
    sendBtn: {
      backgroundColor: SEND_MESSAGE_COLOR,
      width: 45,
      marginLeft: 14,
    },
    name: {
      fontSize: 25,
      fontWeight: "bold",
    },
    job: {
      fontSize: 20,
      fontWeight: "300",
      color: BLUR_TEXT_COLOR,
    },
    countArea: {
      flex: 0.1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    countUnit: {
      textAlign: "center",
    },
    countText: {
      fontSize: 22,
      fontWeight: "500",
      textAlign: "center",
    },
    countTextLabel: {
      color: BLUR_TEXT_COLOR,
      fontSize: 15,
      fontWeight: "400",
    },
    imagesArea: {
      flex: 0.57,
    },
    displayImages: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    image: {
      width: 180,
      borderRadius: 30,
      marginBottom: 20,
    },
    bottomTab: {
      flex: 0.07,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    antBtn: {
      marginLeft: 50,
    },
    userBtn: {
      marginRight: 50,
    },
    imageArea: {
        flex: 0.5,
      },
    header1: {
      flex: 0.1,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    img: {
      flex: 1,
      resizeMode: "cover",
      marginTop: 20,
    },
    backBtn1: {
      marginLeft: 20,
      marginTop: 25,
    },
    filterBtn1: {
      marginRight: 20,
      marginTop: 25,
    },
    imageInfo: {
      flex: 0.4,
    },
    infoHeader: {
      flex: 0.3,
      flexDirection: 'row',
    },
    infoWrapper: {
      flex: 0.75,
      marginLeft: 30,
      justifyContent: 'center'
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
    },
    location: {
      fontSize: 20,
      fontWeight: "300",
      color: BLUR_TEXT_COLOR,
      marginTop: 5,
    },
    shaped: {
      height: 50,
      width: 50,
      backgroundColor: FOLLOW_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    downloadBtn: {
      flex: 0.25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    description: {
      flex: 0.25,
      marginRight: 30,
      marginLeft: 30,
      justifyContent: 'center',
    },
    descriptionText: {
      fontSize: 15,
      color: '#646E82',
    },
    tagsArea: {
      flex: 0.2,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 30,
      marginRight: 30,
    },
    tag: {
      borderRadius: 15,
      fontSize: 20,
      backgroundColor: '#F5F6FA',
      marginRight: 15,
    },
    textTag: {
      fontSize: 20,
      color: BLUR_TEXT_COLOR,
      padding: 5,
    },
    btnWrapper1: {
      flex: 0.25,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: 30,
      marginRight: 30,
    },
    messageBtn: {
      marginRight: 240,
    },
    btn: {
      height: 30,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    antBtn: {
      marginLeft: 50,
    },
    userBtn: {
      marginRight: 50,
    },
});

export default styles