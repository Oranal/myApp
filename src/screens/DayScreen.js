import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { windowHeight, windowWidth } from '../../Dimensions';
import Food from '../components/Food';
import Plus from '../components/Plus';


const DayScreen = (props) => {
  let { dayName, date, navigator } = props.route.params;
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let foods = []

  props.navigation.setOptions({ title: days[date.getDay()] })

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>

      <View style={styles.container}>
        <Food />
        <Food />
        <Food />
        <Food />
        <Plus />
        {/* <Food /> */}
        {/* <Text style={styles.title}>{dayName}</Text> */}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'rgba(227, 221, 201, 1)',
    flex: 1,
    // flexDirection: "row",
    // justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
    // borderRadius: 10,
    // borderColor: 'black',
    // borderWidth: 1,
    // marginTop: windowHeight / 12,
    // marginTop: 300,
    marginBottom: windowHeight / 12,
  },
  title: {
    flex: 1,
    color: '#007aff',
    fontSize: 42,
  },
  item: {
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
})

export default DayScreen
