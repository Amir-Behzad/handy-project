import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const MemberList = () => {
  return (
    <section className="member-list">
      <Member img="23" name="John" job="developer" />
      <Member img="54" name="David" job="designer" />
      <Member img="25" name="Ron" job="teacher">
        <p>fgjhvbh ncmxdc nh</p>
      </Member>
    </section>
  );
};

const Member = ({ name, job, img, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/women/${img}.jpg`;
  return (
    <article className="member">
      <img src={url} alt="member" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<MemberList />, document.getElementById("root"));
