import React, { Component,useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Alert,
} from "react-native";
import db from "../config";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Video } from "expo-av";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import * as Clipboard from "expo-clipboard";
import { FontAwesome } from "@expo/vector-icons";

export default class VideoStatusScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      products: [],
      play: false,
    };
  }

  shuffleDeck = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  getProducts = async () => {
    this.setState({ products: [] });
    var resp = await db.collection("Videos").get();
    resp.docs.map((d) => {
      var temp = this.state.products;
      var doc = d.data();
      doc.id = d.id;
      temp.push(doc);
      this.setState({ products: temp });
    });
  };

  componentDidMount = async () => {
    this.getProducts();
  };
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    const ref=useRef(null)

    const play=async()=>{
      if(ref.current===null){
        return;
      }
      const status=await ref.current.getStatusAsync()
      if(status?.isPlaying){
        return;
      }
      try{
      await ref.current.playAsync()
    }catch(e){
      console.log(e)
    }
    }
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
            justifyContent: "center",
          }}
        >
      
          <Video
          ref={ref}
            style={{
              height: Dimensions.get("window").height,
              width: Dimensions.get("window").width,
            }}
            source={{
              uri: item.video,
            }}
            useNativeControls
            resizeMode="cover"
            shouldPlay={true}
          />
          
          <TouchableOpacity
            style={{
              justifyContent: "center",
              position: "absolute",
              marginLeft: "90%",
            }}
            onPress={() => {
              Clipboard.setString(item.video);
              Alert.alert("Link Copied!");
            }}
          >
            <FontAwesome name="share-alt" size={35} color="green" />
          </TouchableOpacity>
        </View>
      );
    
  };
  render() {
    if (this.state.products.length === 0) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#FAFAFA",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      this.shuffleDeck(this.state.products);
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#FAFAFA",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 17,
              justifyContent: "center",
              marginRight: "20%",
              width: 40,
              height: 40,
              alignItems: "center",
              borderColor: "grey",
              position: "absolute",
            }}
            onPress={() => this.props.navigation.goBack()}
          >
            <Ionicons
              name="arrow-back-outline"
              size={36}
              color="white"
              style={{ position: "absolute" }}
            />
          </TouchableOpacity>

          <View style={{ alignContent: "center" }}>
            <SwiperFlatList
              keyExtractor={this.keyExtractor}
              data={this.state.products}
              renderItem={this.renderItem}
              autoplay
              autoplayDelay={60}
              vertical
              
            />
          </View>
        </View>
      );
    }
  }
}
