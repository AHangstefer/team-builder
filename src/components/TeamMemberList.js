import React from "react";



const TeamMemberList = props => {
    return(
      <div className = "new-member">
        {props.members.map((m, i) =>(
         <div className = "m" key = {1}>
            <h2>{m.name}</h2>
            <p>{m.email}</p>
            <p>{m.roll}</p>
            </div>
        ))}
      </div>
    );
};

export default TeamMemberList;