import React from 'react';

function App() {
  return (
    <Navbar/>
  );
}

export default App;

// navbar
function Navbar(){
  return <div>
    <ol>
      <li>
        popolari
      </li>
      <li>
        scopri
      </li>
      <li>
        ricerca
      </li>
      <li>
        continua
      </li>
      <li>
        completati
      </li>
      <li>
        belli
      </li>
      <li>
        brutti
      </li>
    </ol>
  </div>
}

// - anime piu popolari
//   - lista di anime (non filtrata, ordinata in base popolarità piu alta)

// - scopri
//   - lista di anime (filtrata per quelli non seguiti, ordinata in base popolarità piu alta)

// - anime piu belli che ho visto
//   - lista di anime filtro=personale ordinamento=decrescente (valutazione personale)

// - anime continua a guardare
//   - lista di anime filtro=seguito ordinamento=decrescente (valutazione globale)

// - anime completati
//   - lista di anime filtro=progressione==max ordinamento=decrescente 

// - anime più brutti
//   - lista di anime filtro=pregressione==max ordinamento crescente (sulla valutazione personale)

// - ricerca anime