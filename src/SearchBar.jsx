import React,{useState} from "react";
import { Col, Row,Form,Button} from "react-bootstrap";

const SearchBar = ({submitText}) => {
  const [term, setTerm] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    //alert(term)
    console.log(term);
    submitText(term);
  }

  return (
    <>
      <Form onSubmit={submitForm}>
        <Row className="align-items-center">
          <Col style={{ flex: 1 }}></Col>
          <Col xs lg="5">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control id="inlineFormInputName" placeholder="Author Name"
              value={term}
              onChange={(e)=> setTerm(e.target.value)}
            />
          </Col>

          <Col xs="auto" className="my-1">
            <Button type="submit">Submit</Button>
          </Col>
          <Col style={{ flex: 1 }}></Col>
        </Row>
      </Form>
    </>
  );
};

export default SearchBar;



