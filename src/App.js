import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";

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
        <Route path="/">
          <ContinuaPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

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
