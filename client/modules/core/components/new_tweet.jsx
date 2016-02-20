import React from 'react';

class NewTweet extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} class="new-tweet">
          <textarea
            name="new-tweet__body"
            ref="tweetBody"
            >
          </textarea>
          <button type="submit">Tweet</button>
        </form>
      </div>
    );
  }

  onSubmit(event) {
    event.preventDefault();
    const {create} = this.props;
    const {tweetBody} = this.refs;

    create(tweetBody.value);
  }
}

export default NewTweet;
