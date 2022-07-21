import React, { useState } from "react";

function Form(props) {
    const [firstName, setFirstName] = useState("Sylvia");
    const [lastName, setLastName] = useState("Woods");
    const [submittedData, setSubmittedData] = useState([]);

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }
    function handleSubmit(event) {
      event.preventDefault();
    return ( <
        form >
        <
        input type = "text"
        onChange = { handleFirstNameChange }
        value = { firstName }
        /> <
        input type = "text"
        onChange = { handleLastNameChange }
        value = { lastName }
        /> <
        button type = "submit" > Submit < /button> <
        /form>
    );
}

export default Form;