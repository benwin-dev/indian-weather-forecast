import axios from "axios";
import React, { useState, useEffect } from "react";

import { Button, Modal } from "react-bootstrap";
export default function Axios({ stateName1 }) {
  const [post, setPost] = useState(null);
  const baseURL = `https://api.weatherapi.com/v1/current.json?key=05ccd01d3f294845bc0193119221201&q=${stateName1}&aqi=yes`;

  const handleClose = () => setPost(null);

  useEffect(() => {
    stateName1 !== "" &&
      axios
        .get(baseURL)
        .then((response) => {
          setPost(response.data);
          // console.log(response.data);
        })
        .catch((err) => {
          console.log("err");
        });
  }, [stateName1]); 

  if (!post) return null;

  return (
    <div>
      <Modal show={post !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Weather</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>{post.location.region}</h1>
          <p>{post.location.localtime}</p>
          <p>{post.current.temp_c} 'C</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
