import React, { useState } from "react";
import MemberForm from "./components/MemberForm";
import Members from "./components/Members";
import "./App.css";

function App() {
  const [members, setMembers] = useState([]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      fullName: member.fullName,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };
  return (
    <div className="App">
      <h1>Members</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;
