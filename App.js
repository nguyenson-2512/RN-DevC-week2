import React from 'react';
import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert, Button } from 'react-native';


import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const BLUR_TEXT_COLOR = '#ABB0C6';

const imgData = [
  { id: 1, imgSource: require('./assets/pic7.jpg') },
  { id: 2, imgSource: require('./assets/pic2.jpg') },
  { id: 3, imgSource: require('./assets/pic3.jpg') },
  { id: 4, imgSource: require('./assets/pic4.jpg') },
  { id: 5, imgSource: require('./assets/pic5.jpg') },
  { id: 6, imgSource: require('./assets/pic6.jpg') },
  { id: 7, imgSource: require('./assets/pic7.jpg') },
  { id: 8, imgSource: require('./assets/pic8.jpg') },
];

export default function App() {
  const centerImgData = Math.floor(imgData.length / 2);
  const [followCount, setFollowCount] = useState(165);

  const followAlertAndIncrement = () => {
    setFollowCount(followCount + 1)
    Alert.alert('Followed')
  }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <View style={[styles.backBtn, styles.btn]}>
              <AntDesign name="back" size={25} color={POLO_BLUE_COLOR} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.filterBtn, styles.btn]}>
              <AntDesign name="filter" size={25} color={POLO_BLUE_COLOR} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.user}>
          <View style={styles.avatarWrapper}>
            <Image
              style={styles.avatar}
              source={require('./assets/pic1.jpg')}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.name}>Son Nguyen</Text>
            <Text style={styles.job}>Developer</Text>
            <View style={styles.btnWrapper}>
              <TouchableOpacity style={[styles.btn, styles.followBtn]} onPress={followAlertAndIncrement}>
                <View>
                  <Text style={{color: 'white'}}>Follow</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.sendBtn]} onPress={() => {Alert.alert('Message sent')}}>
                <View>
                  <Feather name="send" size={15} color="white" />
                </View>
              </TouchableOpacity>
            </View>
        </View>
      </View>
      <View style={styles.countArea}>
        <View style={styles.countUnit}>
          <Text style={styles.countText}>165</Text>
          <Text style={styles.countTextLabel}>Photos</Text>
        </View>
        <View style={styles.countUnit}>
          <Text style={styles.countText}>{followCount}</Text>
          <Text style={styles.countTextLabel}>Followers</Text>
        </View>
        <View style={styles.countUnit}>
          <Text style={styles.countText}>201</Text>
          <Text style={styles.countTextLabel}>Following</Text>
        </View>
      </View>
      <View style={styles.imagesArea}>
        <ScrollView contentContainerStyle={styles.displayImages}>
          <View>
            {imgData.slice(0, centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.image} key={item.id} />
            })}
          </View>
          <View>
            {imgData.slice(centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.image} key={item.id} />
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomTab}>
        <TouchableOpacity>
          <View style={[styles.antBtn, styles.btn]}>
            <AntDesign name="antdesign" size={25} color={POLO_BLUE_COLOR} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.addBtn, styles.btn]}>
            <MaterialIcons name="add" size={25} color={POLO_BLUE_COLOR} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.userBtn, styles.btn]}>
            <AntDesign name="user" size={25} color={POLO_BLUE_COLOR} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backBtn: {
    marginLeft: 20,
  },
  filterBtn: {
    marginRight: 20,
  },
  user: {
    backgroundColor: 'white',
    flex: 0.15,
    flexDirection: 'row'
  },
  avatarWrapper: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  userInfo: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  btnWrapper: {
    flexDirection: 'row',
    marginTop: 14,
  },
  btn: {
    height: 30,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: 'bold'
  },
  job: {
    fontSize: 20,
    fontWeight: '300',
    color: BLUR_TEXT_COLOR,
  },
  countArea: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  countUnit: {
    textAlign: 'center',
  },
  countText: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
  },
  countTextLabel: {
    color: BLUR_TEXT_COLOR,
    fontSize: 15,
    fontWeight: '400',
  },
  imagesArea: {
    flex: 0.57,
  },
  displayImages: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    width: 180,
    height: 170,
    borderRadius: 30,
    marginBottom: 20,
  },
  bottomTab: {
    flex: 0.07,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  antBtn: {
    marginLeft: 50,
  },
  userBtn: {
    marginRight: 50
  }
});
