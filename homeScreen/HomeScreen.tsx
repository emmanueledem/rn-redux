import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { decrement, increment } from "../redux/counter/CounterSlice";

const HomeScreen = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.containerStyles}>
      <Text style={{ padding: 16, fontSize: 24, fontWeight: 600 }}>
        {count}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 200, // Specify the width to make space-between work
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            dispatch(increment());
          }}
        >
          <View style={styles.buttonStyle}>
            <Text style={{ fontSize: 20, fontWeight: 500, color: "white" }}>
              +
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(decrement());
          }}
        >
          <View style={styles.buttonStyle}>
            <Text style={{ fontSize: 20, fontWeight: 500, color: "white" }}>
              -
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  textContainerStyle: {
    borderColor: "black",
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 24,
  },
  buttonStyle: {
    padding: 20,
    borderRadius: 6,

    backgroundColor: "#23a8d9",
  },
});
