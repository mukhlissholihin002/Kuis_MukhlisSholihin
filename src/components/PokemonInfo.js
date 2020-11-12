import React from 'react'
import { Modal, Button, Row, Col, Container } from 'react-bootstrap'

export default function PokemonModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
            <Row>
                <Col xs={12} md={8}>
                .col-xs-12 .col-md-8
                </Col>
                <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
                </Col>
            </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }