import * as React from "react";
import GithubHeader from "./GithubHeader";
import Repositories from "./Repositories";
import styled from "styled-components";
import { navFrontend } from "../../styles/navFarger";
import { GithubData } from "../../api-utils/github/types";

const Style = styled.div`
  font-family: "Comfortaa", sans-serif;
  background-color: ${navFrontend.navBla};
  color: white;
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  > * {
    flex-grow: 1;
    margin: 0.5rem;
    background-color: rgba(0, 0, 0, 0.2);
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function GithubstatsView(props: GithubData) {
  return (
    <Style>
      <GithubHeader github={props} />
      <Repositories repos={props.organization.publicRepositories.nodes} />
    </Style>
  );
}

export default GithubstatsView;
