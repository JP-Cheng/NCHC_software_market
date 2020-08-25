import React from 'react';
import styled from 'styled-components';
const exampleJson = require('./dockerBuildStatus.json');

export default () => {

  const statusRenderer = (status) => {
    if (status === "T")
      return (<button style={{
        backgroundColor: '#00FF7F',
        border: 'none',
        color: 'white',
        padding: '12px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        borderRadius: '75%'
      }}></button>);
    else if (status === "F")
      return (<button style={{
        backgroundColor: '#FF6347',
        border: 'none',
        color: 'white',
        padding: '12px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        borderRadius: '75%'
      }}></button>);
    else
      return (<button style={{
        backgroundColor: '#C0C0C0',
        border: 'none',
        color: 'white',
        padding: '12px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        borderRadius: '75%'
      }}></button>);
  };

  const Td = styled.td`padding: 2.5pt;`;

  return (
    <table>
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