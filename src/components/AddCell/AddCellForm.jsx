import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Input } from "reactstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";

import { UUIDV4_NAMESPACE } from "../../constants";

import useForm from "../../hooks/useForm";

const StyledForm = styled(Form)`
  display: flex;
`;

const AddCellForm = ({ onSubmit }) => {
  const { values, handleChange, handleSubmit } = useForm(
    {
      name: "",
      id: uuidv4(UUIDV4_NAMESPACE),
      children: null,
    },
    onSubmit
  );

  return (
    <StyledForm data-testid="addNodeForm" onSubmit={handleSubmit}>
      <Input
        onChange={(e) => handleChange(e)}
        name="name"
        value={values.name}
        placeholder="name"
      />
      <Button color="success" size="xs" type="submit">
        <FontAwesomeIcon icon="check" />
      </Button>
    </StyledForm>
  );
};

AddCellForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddCellForm;
