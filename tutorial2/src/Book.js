import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      showInfo: true
    };
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    // console.log(this.props);
    const { img, title, author } = this.props.info;
    const checkInfo = info => {
      if (info === true) {
        return (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto, quidem?
          </p>
        );
      } else {
        return null;
      }
    };

    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4>title : {title}</h4>
          <h6>author : {author}</h6>
          <button type="button" onClick={this.handleInfo}>
            toggle info
          </button>
          {checkInfo(this.state.showInfo)}
          {/* {this.state.showInfo ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              repudiandae.
            </p>
          ) : null} */}

          {/* {this.state.showInfo && (
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              sed dolorem nihil et officiis quasi hic aut debitis maxime sint.
            </p>
          )} */}
        </div>
      </article>
    );
  }
}
