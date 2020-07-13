import React, {useState} from "react";

const Form = props => {
    const defaultState = { name:"", email:"", roll:""};
    const [newForm, setNewForm] = useState(defaultState);

    const handleChange =event => {
        console.log(event.target.value);
        setNewForm({
            ...newForm,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event =>{
        event.preventDefault();
        setNewForm(defaultState);
        props.setMembers([...props.members, newForm]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            onChange={handleChange}
            type="text"
            name="name"
            value={newForm.name}
            />

            <input
            onChange={handleChange}
            type="text"
            name="email"
            value={newForm.email}
            />

            <input
            onChange = {handleChange}
            type="text"
            name="roll"
            value={newForm.roll}
            />
            <button type="submit">Add New Member</button>
        </form>
    );

};

export default Form;