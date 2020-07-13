import React, {useState} from 'react';
import ReactDOM from "react-dom";
import TeamMemberList from "./components/TeamMemberList";
import Form from "./components/Form";
import './App.css';

function App() {
  const [members, setMembers] = useState([]);

  return (
    <div className="App">
      <h1>Members</h1>
      <TeamMemberList members={members} setMembers={setMembers} />
      <Form members={members} setMembers={setMembers} />
    </div>
  );
}

export default App;
