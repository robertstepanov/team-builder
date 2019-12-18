import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const MemberForm = props => {
  const [member, setMember] = useState({
    fullName: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  };

  const addMember = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ fullName: "", email: "", role: "" });
  };

  return (
    <div className="form-wrapper">
      <Form inline onSubmit={addMember}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="fullName" className="mr-sm-2">
            Full Name:
          </Label>
          <Input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Full Name"
            onChange={handleChanges}
            value={member.fullName}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="email" className="mr-sm-2">
            Email:
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChanges}
            value={member.email}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="role" className="mr-sm-2">
            Role:
          </Label>
          <Input
            type="text"
            name="role"
            id="role"
            placeholder="Role"
            onChange={handleChanges}
            value={member.role}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default MemberForm;
