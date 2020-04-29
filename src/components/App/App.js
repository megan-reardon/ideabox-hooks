import React, { useState } from 'react';
import './App.css';
import IdeaContainer from '../IdeaContainer/IdeaContainer';
import Form from '../Form/Form';

const App = () => {
  const [state, setState] = useState({
    ideas: [
      {
        id: 1,
        title: 'Adopt a puppy!',
        description: 'Because they are cute'
      },
      {
        id: 2,
        title: 'Build shit',
        description: 'Wooden things'
      }
    ]
  })

  const addIdea = (idea) => {
    const updatedIdeas = [...state.ideas, idea]
    setState({ideas: updatedIdeas})
  }

  const deleteIdea = (id) => {
    const filteredTasks = state.ideas.filter(idea =>
      idea.id != id);
      setState({ ideas: filteredTasks });
  }

  return (
    <main>
      <h1>Ideabox</h1>
      <Form
        addIdea={addIdea}
      />
      <IdeaContainer 
        ideas={state.ideas}
        deleteIdea={deleteIdea}
      />
    </main>
  );
}

export default App;
