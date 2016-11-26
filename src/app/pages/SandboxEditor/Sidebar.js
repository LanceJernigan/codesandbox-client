// @flow
import React from 'react';
import styled from 'styled-components';

import SandboxModuleList from './SandboxModuleList';

import type { Module } from '../../store/entities/modules/';
import type { Sandbox } from '../../store/entities/sandboxes/';

const Container = styled.div`
  position: relative;
  background-color: ${props => props.theme.background};
  width: 20rem;
`;

const Title = styled.h2`
  padding: 1rem;
  margin: 0 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: white;
  font-weight: 300;

  border-bottom: 1px solid ${props => props.theme.background.lighten(0.5)};
`;

type Props = {
  modules: { [id: string]: Module };
  sandboxes: { [id: string]: Sandbox };
  activeModuleId: string;
  url: (module: Module) => string;
  sandbox: Sandbox;
}
export default ({ sandbox, modules, sandboxes, activeModuleId, url }: Props) => (
  <Container>
    <Title>{sandbox.title}</Title>
    <SandboxModuleList
      sandbox={sandbox}
      modules={modules}
      activeModuleId={activeModuleId}
      url={url}
    />
    {sandbox.sandboxes.map(sandboxId => (
      <SandboxModuleList
        key={sandboxId}
        sandbox={sandboxes[sandboxId]}
        modules={modules}
        activeModuleId={activeModuleId}
        url={url}
        child
      />
    ))}
  </Container>
);