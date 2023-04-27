import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample(props) {
  const [title, setTile] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and description Can't be empty");
    } else {
      props.addTodo(title, desc);
      setTile("");
      setDesc("");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">Add Tod</h3>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => {
              setTile(e.target.value);
            }}
            type="text"
            placeholder="Enter Title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Write description</Form.Label>
          <Form.Control
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            type="text"
            placeholder="description"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-success">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default BasicExample;
