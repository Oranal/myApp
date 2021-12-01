import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { windowHeight, windowWidth } from '../../Dimensions';

const Day = (props) => {
  // console.log(props.date)
  const dayName = props.date.toString().split(' ');
  const onPressHandler = () => {
    props.navigateTo.navigation.navigate('Daily routine', { dayName: dayName[0], date: props.date, navigator: props.navigateTo.navigation })
  }
  // console.log(dayName[2])
  // console.log(props.date.getUTCDate(), props.date.getUTCMonth() + 1, props.date.getUTCFullYear(), dayName)
  return (
    <TouchableOpacity style={styles.container} onPress={onPressHandler}>


      <Text style={styles.item}>{dayName[0]}</Text>

      <Text style={styles.item2}>{dayName[1]} {props.date.getUTCDate()} {props.date.getUTCFullYear()}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(227, 221, 201, 1)',
    flex: 1,
    // display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    minWidth: windowWidth - 20,
    maxWidth: windowWidth - 20,
    minHeight: windowHeight / 7,
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

export default Day
