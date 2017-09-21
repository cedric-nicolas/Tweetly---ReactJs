import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import './ByUsername.css';

import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';
import TweetBox from '../../components/TweetBox';

class ByUsername extends Component {

  static propTypes = {
    params: PropTypes.object.isRequired,
  }

  state = {
    tweets,
  };

  publish = tweet => {
    const { tweets } = this.state;

    this.setState({
      tweets: [{
        avatar: 'http://vignette3.wikia.nocookie.net/ladygaga/images/5/5d/Twitter_egg_avatar.jpg',
        username: 'Cédric',
        fullname: 'Cédric',
        content: tweet,
        date: moment().format('DD/MM/YYYY'),
      },
      ...tweets,
    ],
    });
  };

  remove = index => this.setState({
    tweets: this.state.tweets.filter((tweet, i) => i !== index),
  });

  render() {
    const { tweets } = this.state;
    const { params } = this.props;
 
    return (
      <div className="homepage">
        <h1>{params.username}</h1>
        <TweetBox publish={this.publish} />
        <div className="tweets">
          {tweets.map((tweet , index) => tweet.username === params.username && (
            <Tweet
              {...tweet}
              key={index}
              index={index}
              remove={this.remove}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ByUsername;
