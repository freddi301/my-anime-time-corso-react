import React, { useState, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import useSWR from "swr";
import styled from "styled-components";
import { AnimeComponent } from "./AnimeComponent";
import { debounce } from "lodash";

function App() {
  const [seguiti, setSeguiti] = useState(new Set());
  function segui(id) {
    setSeguiti(new Set(seguiti).add(id));
  }
  function smettiSegui(id) {
    setSeguiti(new Set(seguiti).delete(id));
  }
  return (
    <Router>
      <StyledWholeScreen>
        <Navbar />
        <StyledScrollArea>
          <Switch>
            <Route path="/popolari">
              <PopolariPage
                seguiti={seguiti}
                segui={segui}
                smettiSegui={smettiSegui}
              />
            </Route>
            <Route path="/scopri">
              <ScopriPage
                seguiti={seguiti}
                segui={segui}
                smettiSegui={smettiSegui}
              />
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
function PopolariPage({ seguiti, segui, smettiSegui }) {
  const { data, error } = useSWR(
    "https://api.jikan.moe/v3/top/anime",
    fetchJSON
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return data.top
    .map(jikanDTOtoAnime)
    .map(addPersonalInfoToAnime(seguiti))
    .map(anime => {
      return (
        <AnimeComponent
          key={anime.id}
          anime={anime}
          seguiti={seguiti}
          segui={segui}
          smettiSegui={smettiSegui}
        />
      );
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

const addPersonalInfoToAnime = seguiti => anime => ({
  ...anime,
  seguito: seguiti.has(anime.id)
});

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
function ScopriPage({ seguiti, segui, smettiSegui }) {
  const { data, error } = useSWR(
    "https://api.jikan.moe/v3/top/anime",
    fetchJSON
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return data.top
    .map(jikanDTOtoAnime)
    .map(addPersonalInfoToAnime(seguiti))
    .filter(anime => !anime.seguito)
    .map(anime => {
      return (
        <AnimeComponent
          key={anime.id}
          anime={anime}
          seguiti={seguiti}
          segui={segui}
          smettiSegui={smettiSegui}
        />
      );
    });
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
  const [searchText, setSearchText] = useState("");
  const [searchTextDebounced, setSearchTextDebounced] = useState("");
  const updateDebounced = useCallback(debounce(setSearchTextDebounced, 1000), [
    setSearchTextDebounced
  ]);
  useEffect(() => {
    updateDebounced(searchText);
  }, [updateDebounced, searchText]);
  const { data, error } = useSWR(
    `https://api.jikan.moe/v3/search/anime?q=${searchTextDebounced}`,
    fetchJSON
  );
  return (
    <>
      <input
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
        placeholder="Full Metal Alchemist"
      />
      {(() => {
        if (error) return <div>failed to load</div>;
        if (!data) return <div>loading...</div>;
        return data.results.map(jikanDTOtoAnime).map(anime => {
          return <AnimeComponent key={anime.id} anime={anime} />;
        });
      })()}
    </>
  );
}

(() => {
  /* code here */
})(); // IIFE (Immediately Invoked Function Expression)
