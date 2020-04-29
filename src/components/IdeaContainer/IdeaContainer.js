import React from 'react';
import Idea from '../Idea/Idea';
import './IdeaContainer.css';

const IdeaContainer = ({ ideas, deleteIdea }) => {
    return (
        <section className="ideas-container">
            {
                ideas.map(idea => (
                    <Idea
                        title={idea.title}
                        description={idea.description}
                        id={idea.id}
                        key={idea.key}
                        deleteIdea={deleteIdea}
                    />
                ))
            }
        </section>
    )
}

export default IdeaContainer;