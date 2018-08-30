import React, { Component } from 'react';
import { View } from 'react-native';
import axios from "axios";
import AlbumDetail from './AlbumDetail';
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
    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album = {album} />);
    }
    render() {
        console.log(this.state);
    return (
        <View>
        {this.renderAlbums()}
        </View>
    );
}
}
export default AlbumList;
