import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Navbar() {
  return (<StyledNavbarContainer>
    <StyledNavbarItem>
      <Link to="/popolari">popolari</Link>
    </StyledNavbarItem>
    <StyledNavbarItem>
      <Link to="/scopri">scopri</Link>
    </StyledNavbarItem>
    <StyledNavbarItem>
      <Link to="/ricerca">ricerca</Link>
    </StyledNavbarItem>
    <StyledNavbarItem>
      <Link to="/continua">continua</Link>
    </StyledNavbarItem>
    <StyledNavbarItem>
      <Link to="/completati">completati</Link>
    </StyledNavbarItem>
    <StyledNavbarItem>
      <Link to="/belli">belli</Link>
    </StyledNavbarItem>
    <StyledNavbarItem>
      <Link to="/brutti">brutti</Link>
    </StyledNavbarItem>
  </StyledNavbarContainer>);
}

const StyledNavbarContainer = styled.div`
  display: flex;
  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.75);
`;

const StyledNavbarItem = styled.div`
  flex-grow: 1;
  min-height: 1cm;
  min-width: 1cm;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// function StyledNavbarContainerCompiled(props) {
//   return (
//     <div {...props} style={{ display: "flex" }}>
//       {props.children}
//     </div>
//   );
// }