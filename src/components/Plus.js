import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Plus = () => {
  return (
    <TouchableOpacity onPress={() => { alert("add") }}>
      <AntDesign style={styles.plus} name="plus" size={25} color="#666" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  plus: {
    // borderWidth: 1,
    // borderColor: 'black',
    borderRadius: 100,
    borderColor: '#666666',
    borderWidth: 3,
    // borderStyle: 'dotted',
    padding: 1,
    paddingLeft: 6,
    paddingTop: 6,
    marginTop: 15,
  },
})

export default Plus
