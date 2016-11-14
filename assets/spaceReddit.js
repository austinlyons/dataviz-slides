import React from 'react';

const RedditPost = ({ data }) =>
  <div>
    <a href={data.url} target="_blank" style={{color: "white", textDecoration: "none"}}>
      {data.title}
    </a>
  </div>

export default class SpaceReddit extends React.Component {
  constructor() {
      super();
      this.state = { items: [] };
      this.fetchReddit = this.fetchReddit.bind(this);
  }

  fetchReddit() {
    fetch(`https://www.reddit.com/r/space.json`)
      .then(result => {
        result
          .json()
          .then(json => {
            this.setState({ items: json.data.children.slice(0,6) });
          });
      });
  }

  render() {
    const styles = {
      padding: 10,
      background: "black",
      margin: "0 0 20px 0",
    };

    return(
      <div>
        <button style={styles} type="button" onClick={this.fetchReddit}>Fetch!</button>
        {
          this.state.items ?
            this.state.items.map(item => <RedditPost data={item.data} key={item.data.id} />)
            : ''
        }
      </div>
    );
  }
}
