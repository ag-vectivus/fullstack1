import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  margin-left: 20px;
`;

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 120px;
  margin: 10px 0;
  padding: 8px;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  color: white;
  margin-top: 24px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  background: crimson;
  color: white;
  padding: 6px;
  border: 0;
  font-size: 1.2em;
  cursor: pointer;
`;

const Span = styled.span`
  color: crimson;
`;

const CreateBlog: React.FC = () => {
  return (
    <Main>
      <Form action="http://localhost:3000" method="POST">
        <Label htmlFor="title">
          Blog title<Span>*</Span>:
        </Label>
        <Input type="text" id="title" name="title" required />
        <Label htmlFor="snippet">
          Blog snippet<Span>*</Span>:
        </Label>
        <Input type="text" id="snippet" name="snippet" required />
        <Label htmlFor="body">
          Blog body<Span>*</Span>:
        </Label>
        <TextArea id="body" name="body" required />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Main>
  );
};

export default CreateBlog;
