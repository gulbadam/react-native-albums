import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};
const styles = {
    viewStyle: {
    backgroundColor: '#ff7788',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 20,
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 20 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
    //borderBottomColor: 'blue',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,

    
},
    textStyle: {
        fontSize: 30
    }
}
export default Header;