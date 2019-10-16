import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function People() {
  const friends = [
    { name: "John", job: "Developer", age: "23", company: "facebook" },
    { name: "Bob", job: "Designer", age: "23", company: "Apple" },
    { name: "Susy", job: "Artist", age: "23", company: "twitter" }
  ];
  return (
    <section>
      <Person person={friends[0]}>
        <h3>some info about </h3>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = ({ children, person: { name, job, age, company } }) => {
  //   const { name, job, age, company } = props.person;

  return (
    <article>
      <h1>{name}</h1>
      {children}
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <hr />
    </article>
  );
};

ReactDom.render(<People />, document.getElementById("root"));
