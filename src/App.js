import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/popolari">
          <PopolariPage />
        </Route>
        <Route path="/scopri">
          <ScopriPage />
        </Route>
        <Route path="/ricerca">
          <RicercaPage />
        </Route>
        <Route path="/continua">
          <ContinuaPage />
        </Route>
        <Route path="/completati">
          <CompletatiPage />
        </Route>
        <Route path="/belli">
          <BelliPage />
        </Route>
        <Route path="/brutti">
          <BruttiPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// navbar
function Navbar() {
  return (
    <StyledNavbarContainer>
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
    </StyledNavbarContainer>
  );
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

// - anime piu popolari
//   - lista di anime (non filtrata, ordinata in base popolarità piu alta)
function PopolariPage() {
  return <h1>Popolari</h1>;
}

// - scopri
//   - lista di anime (filtrata per quelli non seguiti, ordinata in base popolarità piu alta)
function ScopriPage() {
  return <h1>Scopri</h1>;
}

// - anime piu belli che ho visto
//   - lista di anime filtro=personale ordinamento=decrescente (valutazione personale)
function BelliPage() {
  return <h1>Belli</h1>;
}

// - anime continua a guardare
//   - lista di anime filtro=seguito ordinamento=decrescente (valutazione globale)
function ContinuaPage() {
  return <h1>Continua</h1>;
}

// - anime completati
//   - lista di anime filtro=progressione==max ordinamento=decrescente
function CompletatiPage() {
  return <h1>Completati</h1>;
}

// - anime più brutti
//   - lista di anime filtro=pregressione==max ordinamento crescente (sulla valutazione personale)
function BruttiPage() {
  return <h1>Brutti</h1>;
}

// - ricerca anime
function RicercaPage() {
  return <h1>Ricerca</h1>;
}
