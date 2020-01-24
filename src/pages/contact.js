import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Form, Button } from "react-bootstrap"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default () => (
  <PrimaryLayout column="col-10 pt-5">
    <h1>Contact us page</h1>
    <Form>
      <Form.Group controlId="contactForm.Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="email..." />
      </Form.Group>
      <Form.Group controlId="contactForm.Subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="subject..." />
      </Form.Group>
      <Form.Group controlId="contactForm.Message">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Form.Group controlId="contactForm.Submit">
        <Button>Submit</Button>
      </Form.Group>
    </Form>
  </PrimaryLayout>
)
