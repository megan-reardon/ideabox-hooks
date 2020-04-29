import React from 'react';
import './Idea.css';

const Idea = ({ title, description, id, deleteIdea }) => {
    return (
        <div className='idea-card' id={id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => deleteIdea(id)}>Delete</button>
        </div>
    )
}

export default Idea;