import React from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import analytics from "@react-native-firebase/analytics";

export default class HomeScreen extends React.Component {
  customEvent = async () => {
    await analytics.logEvent("bricket", {
      id: 11111,
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#FAFAFA",
        }}
      >
        <LinearGradient colors={["#009ffd", "#045de9"]}>
          <TouchableOpacity
            style={{
              height: 30,
              flexDirection: "row",
              paddingTop: 3,
              paddingRight: "5%",
              marginTop: 12,
              marginBottom: 8,
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 22,
                fontWeight: "bold",
                marginLeft: "-15%",
                height: 40,
              }}
            >
              Home
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <ScrollView>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ShayariScreen", {
                  category: "Attitude",
                });
                this.customEvent();
              }}
              style={{
                justifyContent: "center",
                height: 130,
                width: 130,
                alignSelf: "center",
                marginLeft: 2,
              }}
            >
              <ImageBackground
                source={{
                  uri: "https://ih1.redbubble.net/image.3037234863.9558/st,small,507x507-pad,600x600,f8f8f8.jpg",
                }}
                resizeMode="cover"
                style={{
                  flex: 1,
                  justifyContent: "center",
                  height: 130,
                  width: 130,
                  marginBottom: -20,
                  marginTop: 30,
                }}
              ></ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ShayariScreen", {
                  category: "Mahakal",
                });
                this.customEvent();
              }}
              style={{
                justifyContent: "center",
                height: 90,
                width: 130,
                alignSelf: "center",
                marginTop: 80,
                marginLeft: 20,
              }}
            >
              <ImageBackground
                style={{ height: 130, width: 130 }}
                source={{ uri: "https://wallpaperaccess.com/full/5203921.jpg" }}
              ></ImageBackground>
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: "row", alignSelf: "center", marginTop: 30 }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ShayariScreen", {
                  category: "Sad",
                });
                this.customEvent();
              }}
              style={{
                justifyContent: "center",
                height: 100,
                width: 110,
                alignSelf: "center",
                marginTop: 50,
                marginRight: 10,
                marginLeft: 5,
              }}
            >
              <ImageBackground
                style={{ height: 130, width: 130 }}
                source={{
                  uri: "https://thumbs.dreamstime.com/b/orange-blue-white-sad-hand-written-word-text-typography-logo-sad-hand-written-word-text-typography-design-orange-blue-133478623.jpg",
                }}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ShayariScreen", {
                  category: "Friends",
                });
                this.customEvent();
              }}
              style={{
                justifyContent: "center",
                height: 100,
                width: 140,
                alignSelf: "center",
                marginTop: 50,
                marginLeft: 10,
              }}
            >
              <ImageBackground
                style={{ height: 50, width: 170,marginLeft:10 }}
                source={{
                  uri: "https://cdn.ecommercedns.uk/files/3/251453/5/23271075/friends-word-only.jpg",
                }}
              ></ImageBackground>
            </TouchableOpacity>
          </View>
          <View
            style={{ marginTop: 18, flexDirection: "row", alignSelf: "center" }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ShayariScreen", {
                  category: "Motivation",
                });
                this.customEvent();
              }}
              style={{
                justifyContent: "center",
                height: 100,
                width: 160,
                alignSelf: "center",
                marginTop: 60,
                marginRight: -10,
                marginLeft: 10,
                marginBottom: 15,
              }}
            >
              <ImageBackground
                style={{ height: 180, width: 180 }}
                source={{
                  uri: "https://us.123rf.com/450wm/outchill/outchill2202/outchill220201336/outchill220201336.jpg",
                }}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ShayariScreen", {
                  category: "Love",
                });
                this.customEvent();
              }}
              style={{
                justifyContent: "center",
                height: 100,
                width: 140,
                alignSelf: "center",
                marginTop: 30,
                marginRight: 10,
                marginLeft: 66,
                marginBottom: 15,
              }}
            >
              <ImageBackground
                style={{ height: 120, width: 150 }}
                source={{
                  uri: "https://www.freepnglogos.com/uploads/love-logo-24.jpg",
                }}
              ></ImageBackground>
            </TouchableOpacity>
          </View>
          <View>
            <LinearGradient
              style={{
                width: 250,
                height: 60,
                alignSelf: "center",
                marginTop: 40,
                justifyContent: "center",
                borderRadius: 30,
                alignContent: "center",
               marginBottom:30
              }}
              colors={["#009ffd", "#045de9"]}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("VideoStatusScreen");
                  this.customEvent();
                }}
                style={{
                  borderRadius: 20,
                  width: "75%",
                  alignSelf: "center",
                  height: 50,
                
                  justifyContent: "center",
                
                 
                }}
              >
                <View style={{ flexDirection: "row", alignContent: "center" }}>
                  <Entypo
                    name="video"
                    size={26}
                    color="white"
                    style={{ alignSelf: "center" }}
                  />
                  <Text
                    style={{
                      alignSelf: "center",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 22,
                      marginLeft: 10,
                    }}
                  >
                    Video Status
                  </Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ScrollView>
      </View>
    );
  }
}
