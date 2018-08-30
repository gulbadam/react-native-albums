import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from "axios";
class AlbumList extends Component {
    state = {
        albums: []};
    componentWillMount = () => {
    //   axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then(response => console.log(response));
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response)=>response.json())
    .then(data => this.setState({albums: data}));
    }
    
    render() {
        console.log(this.state);
    return (
        <View>
        <Text>Album List!!</Text>
        </View>
    );
}
}
export default AlbumList;
