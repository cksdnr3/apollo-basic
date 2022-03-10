import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  {
    movies(limit: 20, rating: 9) {
      title
      rating
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
