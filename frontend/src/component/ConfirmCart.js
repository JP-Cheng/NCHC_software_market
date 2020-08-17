import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Table }
  from 'reactstrap';

export default ({ show, toggle, BoughtItems, deleteAnItem }) => {
  return (
    <Modal isOpen={show}>
      <ModalHeader>購物車</ModalHeader>
      <ModalBody>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>品項</th>
            </tr>
          </thead>
          <tbody>
            {BoughtItems.map((anItem, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{anItem.title}</td>
                  <td><Button color="danger"
                    onClick={() => deleteAnItem(index)}>
                    X</Button>{' '}
                  </td>
                </tr>);
            })}
          </tbody>
        </Table>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>確認</Button>{' '}
        <Button color="secondary" onClick={toggle}>取消</Button>
      </ModalFooter>
    </Modal>);
};