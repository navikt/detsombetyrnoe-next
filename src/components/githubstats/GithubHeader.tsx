import * as React from "react";
import styled from "styled-components";
import { GithubData } from "../../api-utils/github/types";

interface Props {
  github: GithubData;
}

const Header = styled.h2`
  padding: 2rem;
  text-align: center;
  font-size: 3rem;
`;

const Stat = styled.div`
  padding: 1rem;
  a {
    color: white;
  }
`;

function GithubHeader(props: Props) {
  const { organization } = props.github;
  return (
    <>
      <Header style={{ gridArea: "header" }}>{organization.name} på github</Header>
      <Stat style={{ gridArea: "stat-1" }}>
        <a href={organization.url}>Besøk oss på github</a>
      </Stat>
      <Stat style={{ gridArea: "stat-2" }}>{organization.publicRepositories.totalCount} åpne repoer</Stat>
    </>
  );
}

export default GithubHeader;
