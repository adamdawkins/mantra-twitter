import React from 'react';

const NewTweet = React.createClass({
  getInitialState() {
    return {
      charactersRemaining: 140
    };
  },
  render() {
    return (
      <form onSubmit={this.createTweet} className="new-tweet">
        <textarea
          name="new-tweet__body"
          ref="tweetBody"
          onKeyUp={this.updateRemainingCharacterCount}
          >
        </textarea>
        <span
          className="new-tweet__character-count"
          ref="tweetCharacterCount"
          >
          {this.state.charactersRemaining}
        </span>
        <button type="submit">Tweet</button>
      </form>
    );
  },

  createTweet(event) {
    event.preventDefault();
    const {create} = this.props;
    const {tweetBody} = this.refs;

    create(tweetBody.value);
  },

  updateRemainingCharacterCount() {
    const remainingCharacters = 140 - this.refs.tweetBody.value.length;
    this.setState({charactersRemaining: remainingCharacters});
  }
});

export default NewTweet;
