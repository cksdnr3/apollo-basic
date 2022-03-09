import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

function Detail() {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <div>
      <div>detail</div>
    </div>
  );
}

export default Detail;
