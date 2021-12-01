import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { windowHeight, windowWidth } from '../../Dimensions';


const Food = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => { alert("pressed") }}>


      <Text style={styles.item}>food</Text>

      <Text style={styles.item2}>cal</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a4a4a4',
    flex: 1,
    // display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    borderColor: '#666666',
    borderWidth: 3,
    borderStyle: 'dotted',
    marginTop: 10,
    minWidth: windowWidth - 20,
    maxWidth: windowWidth - 20,
    minHeight: windowHeight / 7,
    maxHeight: windowHeight / 7,
  },
  item: {
    flex: 2,
    fontSize: 30,

  },
  item2: {
    flex: 1,
    // borderColor: 'rgb(0, 0, 0)',
    // borderWidth: 1,
    // borderRadius: 5,
    // maxWidth: windowWidth / 4,
    // padding: 10,
  },

})

export default Food
