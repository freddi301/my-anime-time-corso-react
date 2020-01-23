import React from "react";
import styled from "styled-components";

// funcition AnimeComponent(props) {
// const anime = props.anime;
// ....
export function AnimeComponent({ anime }) {
  return (<StyledAnimeCard>
    <StyledCopertina src={anime.copertina} />
    {anime.titolo}
  </StyledAnimeCard>);
}

const StyledCopertina = styled.img`
  width: 120px;
  object-fit: contain;
  /* object-position: left; */
`;

const StyledAnimeCard = styled.div`
  border-radius: 4px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  margin: 8px;
  max-width: 600px;
  display: flex;
  overflow: hidden;
`;
