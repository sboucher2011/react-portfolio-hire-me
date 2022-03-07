import React, { useState } from 'react';

const ProjectList = () => {

    const [projects] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            gitHub: 'link',
            deployed: 'link'
        },
        {
            name: 'Grocery aisle',
            category: 'commercial',
            gitHub: 'link',
            deployed: 'link'
        },
        {
            name: 'Grocery aisle',
            category: 'commercial',
            gitHub: 'link',
            deployed: 'link'
        },
        {
            name: 'Grocery aisle',
            category: 'commercial',
            gitHub: 'link',
            deployed: 'link'
        },
        {
            name: 'Grocery aisle',
            category: 'commercial',
            gitHub: 'link',
            deployed: 'link'
        },
        {
            name: 'Grocery aisle',
            category: 'commercial',
            gitHub: 'link',
            deployed: 'link'
        }
    ]);

    const selectedProject = projects.filter(project => project.category === 'commercial');

    return (
        <div>
            <p>
                test
                {selectedProject.name}
            </p>
        </div>
    );
};

export default ProjectList;
