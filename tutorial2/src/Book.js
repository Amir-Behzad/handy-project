import React, { Component } from "react";

export default class Book extends Component {
  render() {
    // console.log(this.props);
    const { img, title, author } = this.props.info;
    return (
      <article>
        <img src={img} width="150" alt="book" />
        <h3>title :{title}</h3>
        <h3>author :{author}</h3>
      </article>
    );
  }
}
