import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';

const SearchBox = () => {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault()
    if(keyword.trim()) {
      history.push(`/search/${keyword.trim()}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} >
      <Row className='g-1'>
        <Col className='d-flex' md={8}>
          <Form.Control type='text' name='q' onChange={(e) => setKeyword(e.target.value)} placeholder='Search Products...' className='p-1'></Form.Control>
        </Col>
        <Col className='d-flex'>
          <Button type='submit' variant='outline-success' className='me-2 p-2'>Search</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox;