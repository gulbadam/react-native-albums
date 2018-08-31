import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
const AlbumDetail = ({ album }) => {
    const {
        title,
        thumbnail_image,
        artist, image
    } =  album; 
    const {
        headerTextStyle,
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle, imageStyle
    } = styles;
return (
    <Card>
    <CardSection>
    <View style={thumbnailContainerStyle}>
    <Image style={thumbnailStyle} source = {{ uri: thumbnail_image }} />
    </View>
    <View style={headerContentStyle}>
    <Text style = {headerTextStyle} >{title}</Text>
    <Text>{artist}</Text>
    </View>
    </CardSection> 
    <CardSection>
    <Image style={imageStyle} source = {{ uri: image }} />
    </CardSection> 
    <CardSection>
    <Button onPress={() => console.log(title)} />
    </CardSection> 
    </Card>
);
};
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
       fontSize: 20,
       fontWeight: 'bold'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
       height: 300,
       flex: 1,
       width: null
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        margin: 3,
        marginRight: 8
    }
}
export default AlbumDetail;