import React from "react";
import styled from "styled-components";

const DIV = styled.div`
 display: flex;
 justify-content: center;
 white-space: nowrap;
 
 
`;

const P = styled.p`
 padding-left: 4%;
 padding-right: 4%;
`;


const TeamMemberList = props => {
    return(
      <div className = "new-member">
        {props.members.map((m, i) =>(
         <DIV className = "m" key = {1}>
            <h4>{m.name}</h4>
            <P>{m.email}</P>
            <p>{m.roll}</p>
            </DIV>
        ))}
      </div>
    );
};

export default TeamMemberList;