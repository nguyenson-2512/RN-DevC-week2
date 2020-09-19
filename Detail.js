import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import styles from "./styles"
import { POLO_BLUE_COLOR, BLUR_TEXT_COLOR } from './source'

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';

const Detail = () => {
  const [likeBtn, setLikeBtn] = useState(false);
  const [bookmarkBtn, setBookmarkBtn] = useState(false);
  return(
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <ImageBackground
          source={require('./assets/pic4.jpg')}
          imageStyle={{ borderRadius: 60}}
          style={styles.img}
        >
          <View style={styles.header1}>
            <TouchableOpacity>
              <View style={[styles.backBtn1, styles.btn]}>
                <Link to="/"><AntDesign name="back" size={25} color={POLO_BLUE_COLOR}/></Link>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.filterBtn1, styles.btn]}>
                <AntDesign name="filter" size={25} color={POLO_BLUE_COLOR} />
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.imageInfo}>
        <View style={styles.infoHeader}>
          <View style={styles.infoWrapper}>
            <Text style={styles.title}>Paper Bridge</Text>
            <Text style={styles.location}><EvilIcons name="location" size={24} color={BLUR_TEXT_COLOR} />Ha Noi, Vietnam</Text>
          </View>
          <View style={styles.downloadBtn}>
            <TouchableOpacity onPress={() => {Alert.alert('Downloaded')}}>
              <View style={styles.shaped}>
                <Feather name="download-cloud" size={30} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur nibh. Vivamus pellentesque ligulasectetur adip lo</Text>
        </View>
        <View style={styles.tagsArea}>
          <View style={styles.tag}><Text style={styles.textTag}>#paper</Text></View>
          <View style={styles.tag}><Text style={styles.textTag}>#bridge</Text></View>
          <View style={styles.tag}><Text style={styles.textTag}>#hanoi</Text></View>
        </View>
        <View style={styles.btnWrapper1}>
          <TouchableOpacity onPress={() => {setLikeBtn(!likeBtn)}}>
            <View style={styles.btn}>
              <Feather name="heart" size={24} color={likeBtn ? 'red' : 'black'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {Alert.alert('Sent message')}}>
            <View style={[styles.messageBtn, styles.btn]}>
              <Feather name="message-circle" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setBookmarkBtn(!bookmarkBtn)}}>
            <View style={styles.btn}>
              <Feather name="bookmark" size={24} color={bookmarkBtn ? 'blue' : 'black'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomTab}>
        <TouchableOpacity>
          <View style={[styles.antBtn, styles.btn]}>
            <AntDesign name="antdesign" size={25} color={POLO_BLUE_COLOR} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btn}>
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
  )
}

export default Detail;