import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import useSWR from "swr";
import styled from "styled-components";
import { AnimeComponent } from "./AnimeComponent";

function App() {
  return (
    <Router>
      <StyledWholeScreen>
        <Navbar />
        <StyledScrollArea>
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
        </StyledScrollArea>
      </StyledWholeScreen>
    </Router>
  );
}

export default App;

const StyledWholeScreen = styled.div`
  width: 100vw;
  height: 100vh;
`;

const StyledScrollArea = styled.div`
  overflow-y: scroll;
  height: calc(100% - 1cm);
`;

// - anime piu popolari
//   - lista di anime (non filtrata, ordinata in base popolarità piu alta)
function PopolariPage() {
  const { data, error } = useSWR(
    "https://api.jikan.moe/v3/top/anime",
    fetchJSON
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return data.top.map(jikanDTOtoAnime).map(anime => {
    return <AnimeComponent key={anime.id} anime={anime} />;
  });
}

function jikanDTOtoAnime(anime) {
  return {
    id: anime.mal_id,
    titolo: anime.title,
    valutazioneGlobale: anime.score,
    valutazionePersonale: 0,
    numeroEpisodi: anime.episodes,
    numeroEpisodiVisti: 0,
    seguito: false,
    copertina: anime.image_url
  };
}

// function fetchJSONCompiled(url) {
//   fetch(url).then(response => {
//     response.json().then(data => {
//       return data
//     })
//   })
// }
async function fetchJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
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
