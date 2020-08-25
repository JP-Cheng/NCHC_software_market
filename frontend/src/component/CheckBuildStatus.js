import React from 'react';
import styled from 'styled-components';
const exampleJson = require('./dockerBuildStatus.json');

export default () => {
  const Td = styled.td`padding: 3pt;`;

  const statusRenderer = (status) => {
    const Button = styled.button`
      border: none;
      color: white;
      padding: 12px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      border-radius: 75%;
    `;
    if (status === true)
      return (<Button style={{ backgroundColor: '#00FF7F' }}></Button>);
    else
      return (<Button style={{ backgroundColor: '#FF6347' }}></Button>);
  };

  return (
    <table style={{ textAlign: 'center' }}>
      <thead>
        <tr><th>  description  </th><th> value </th></tr>
      </thead>
      <tbody>
        <tr><Td> Name </Td><Td>{exampleJson.name}</Td></tr>
        <tr><Td> Trigger Time </Td><Td>{exampleJson.triggerTime}</Td></tr>
        <tr><Td> Source Update </Td><Td>
          {statusRenderer(exampleJson.sourceUpdate)}</Td></tr>
        <tr><Td> Script Update </Td><Td>
          {statusRenderer(exampleJson.scriptUpdate)}</Td></tr>
        <tr><Td> Fetch </Td><Td>
          {statusRenderer(exampleJson.fetch)}</Td></tr>
        <tr><Td> Build </Td><Td>
          {statusRenderer(exampleJson.build)}</Td></tr>
        <tr><Td> Commit </Td><Td>
          {statusRenderer(exampleJson.commit)}</Td></tr>
        <tr><Td> Version </Td><Td>{exampleJson.version}</Td></tr>
        <tr><Td> Last Update </Td><Td>{exampleJson.lastUpdate}</Td></tr>
        <tr><Td> Last Successful Update </Td><Td>
          {exampleJson.lastSuccessfulUpdate}</Td></tr>
      </tbody>
    </table>);
};