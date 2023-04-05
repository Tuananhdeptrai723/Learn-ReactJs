import React from "react";

const UserForm = ({ onSubmit }) => {
    const [name, setName] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;