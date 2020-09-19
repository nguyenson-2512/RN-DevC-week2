import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import styles from './styles'
import { POLO_BLUE_COLOR, imgData } from './source'


const Home = () => {
    const centerImgData = Math.floor(imgData.length / 2)
    const [followCount, setFollowCount] = useState(165)
    const [isFollowed,setFollow] = useState(false)

    const followHandle = () => {
      setFollow(!isFollowed)
      if(isFollowed) setFollowCount(followCount - 1)
      else setFollowCount(followCount + 1)
    };
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
            <Image style={styles.avatar} source={require("./assets/pic1.jpg")} />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.name}>Son Nguyen</Text>
            <Text style={styles.job}>Developer</Text>
            <View style={styles.btnWrapper}>
              <TouchableOpacity
                style={[styles.btn, styles.followBtn]}
                onPress={followHandle}
              >
                <View>
                  <Text style={{ color: "white" }}>{isFollowed ? 'Unfollow' : 'Follow'}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, styles.sendBtn]}
                onPress={() => {
                  Alert.alert("Message sent");
                }}
              >
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
              {imgData.slice(0, centerImgData).map((item) => {
                let height = item.id%3==1 ? 260 : item.id%3==2 ? 150 : 200
                return (
                  <TouchableHighlight key={item.id} underlayColor='white'>
                    <Link to="/detail">
                      <Image
                        source={item.imgSource}
                        style={[styles.image,{height}]}
                      />
                    </Link>
                  </TouchableHighlight>
                );
              })}
            </View>
            <View>
              {imgData.slice(centerImgData).map((item) => {
                let height = item.id%3==1 ? 150 : item.id%3==2 ? 200 : 180
                return (
                  <TouchableOpacity key={item.id}>
                    <Link to="/detail">
                      <Image
                        source={item.imgSource}
                        style={[styles.image,{height}]}
                      />
                    </Link>
                  </TouchableOpacity>
                );
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
  };

export default Home