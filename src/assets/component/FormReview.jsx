import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function FormReview() {
  return (
    // style={{ display: "block", width: 700, padding: 30 }}
    <div>
      <h1 className="text-center text-light mb-4">Feedback and Reviews</h1>
      <Form>
        <Form.Group className="mb-3">
          {/* <Form.Label>Enter your full name:</Form.Label> */}
          <Form.Control type="text" placeholder="Enter your full name *" />
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label>Enter your email address:</Form.Label> */}
          <Form.Control
            type="email"
            placeholder="Enter your your email address *"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label>Review Title:</Form.Label> */}
          <Form.Control type="text" placeholder="Review Title *" />
        </Form.Group>
        <Form.Control
          as="textarea"
          rows="4"
          name="address"
          className="mb-5"
          placeholder="After trying this recipe, what do you think?  *"
        />
        <div className="d-flex justify-content-center">
          <Button
            variant="outline-light"
            className="mt-3 mt-lg-0 mb-lg-0 mb-3 text-center col-12 col-lg-4"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
