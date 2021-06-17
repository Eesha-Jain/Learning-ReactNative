import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Reddit extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() { //Lifecycle hook
    fetch("https://www.reddit.com/.json", {
      Accept: 'application/json'
    }).then(res => res.json())
    .then(data => {
      this.setState({posts: data.data.children});
    });
  }

  render() {
    return (
      <View style={{padding: 50, paddingLeft: 20}}>
        <Text style={{fontWeight: 'bold'}}>Reddit Authors</Text>
        <View>
          {this.state.posts.map(post => (
            <Text>{post.data.author}</Text>
          ))}
        </View>
      </View>
    )
  }
}
