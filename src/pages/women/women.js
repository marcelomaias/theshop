import React from "react";
import {
  useParams,
  useHistory,
  useLocation,
  useRouteMatch
} from "react-router-dom";

const Women = () => {
  const { name } = useParams();
  console.log(useHistory());
  console.log(useLocation());
  console.log(useRouteMatch());

  return <h1>Women Component: {name}</h1>;
};

export default Women;
