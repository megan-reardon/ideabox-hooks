import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
  const [state, setState] = useState({
    title: '',
    description: ''
  })

  const handleTitleChange = (e) => {
    setState({ description: state.description, title: e.target.value })
  }

  const handleDescriptionChange = (e) => {
    setState({ description: e.target.value, title: state.title })
  }

  const submitIdea = (e) => {
    e.preventDefault();
    const newIdea = {
      id: Date.now(),
      title: state.title,
      description: state.description
    }
    props.addIdea(newIdea);
    setState({ title: '', description: '' })
  }

  return (
    <form>
        <input
        type='text'
        placeholder='Title'
        name='title'
        value={state.title}
        onChange={event => handleTitleChange(event)}
        />

        <input
        type='text'
        placeholder='Description'
        name='description'
        value={state.description}
        onChange={event => handleDescriptionChange(event)}
        />
    <button onClick={submitIdea}>SUBMIT</button>
  </form>
  )

}

export default Form;