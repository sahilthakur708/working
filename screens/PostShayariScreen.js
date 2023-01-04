import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import db from "../config";
import { LinearGradient } from "expo-linear-gradient";


export default class PostShayariScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "",
      shayari: "",
    };
  }

  uploadShayari = () => {
    if (this.state.category === "" || this.state.shayari === "") {
      Alert.alert("Please fill all the details");
    } else {
      db.collection("Shayaries").add({
        category: this.state.category,
        Shayari: this.state.shayari,
      });
      Alert.alert("Uploaded");
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View>
          <LinearGradient colors={["#009ffd", "#045de9"]}>
            <TouchableOpacity
              style={{
                height: 30,
                flexDirection: "row",
                paddingTop: 3,
                paddingRight: 10,
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
                  marginLeft: -10,
                  marginTop: -3,
                  height: 40,
                }}
              >
                Post Your Shayari
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <Text style={{ alignSelf: "center", fontSize: 20,marginTop:30, fontWeight: "bold" }}>
          Select Your Category :- {this.state.category}
        </Text>
        <View
          style={{
            marginTop: 60,

            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                width: 100,
                borderRadius: 50,
                alignContent: "center",
                height: 30,
              }}
              onPress={()=>this.setState({
                category:'Attitude'

              })}
            >
              <Text style={{ textAlign: "center" }}>Attitude</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                width: 100,
                borderRadius: 50,
                marginLeft:10,
                height: 30,
              }}
              onPress={()=>this.setState({
                category:'Love'

              })}
            >
              <Text style={{ textAlign: "center" }}>Love</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                width: 100,
                borderRadius: 50,
                height: 30,
                marginLeft:10,
              }}
              onPress={()=>this.setState({
                category:'Mahakal'

              })}
            >
              <Text style={{ textAlign: "center" }}>Mahakal</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row",marginTop:20 }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                width: 100,
                borderRadius: 50,

                height: 30,
              }}
              onPress={()=>this.setState({
                category:'Sad'

              })}
            >
              <Text style={{ textAlign: "center" }}>Sad</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                width: 100,
                borderRadius: 50,
                marginLeft:10,
                height: 30,
              }}

              onPress={()=>this.setState({
                category:'Motivation'

              })}
            >
              <Text style={{ textAlign: "center" }}>Motivation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                width: 100,
                borderRadius: 50,
                marginLeft:10,
                height: 30,
              }}

              onPress={()=>this.setState({
                category:'Friends'

              })}
            >
              <Text style={{ textAlign: "center" }}>Friends</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          style={{
            backgroundColor: "#EAEAEA",
            width: "80%",
            alignSelf: "center",
            marginTop: 40,
            height: 50,
            borderRadius: 10,
            paddingLeft: 20.5,
            fontSize: 13,
            borderWidth: 1,
          }}
          inlineImageLeft="search_icon"
          placeholder="Write Your Shayari Here.."
          onChangeText={(val) => {
            this.setState({ shayari: val });
          }}
        />

        <View>
          <LinearGradient
            style={{
              width: 200,
              height: 50,
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              borderRadius: 30,
            }}
            colors={["#009ffd", "#045de9"]}
          >
            <TouchableOpacity
              onPress={() => {
                if (
                  this.state.category === "" ||
                  this.state.shayari === "" ||
                  (this.state.category === "") & (this.state.shayari === "")
                ) {
                  Alert.alert("Invalid!", "Please Fill all the details");
                } else {
                  this.uploadShayari();
                  this.showRewardedAd();
                  this.setState({ category: "", shayari: "" });
                  this.props.navigation.navigate("HomeScreen");
                }
              }}
              style={{
                borderRadius: 20,
                width: "70%",
                alignSelf: "center",
                height: 45,
                marginTop: "10%",
                justifyContent: "center",
                paddingBottom: 5,
                marginBottom: "8%",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Post
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }
}
