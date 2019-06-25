const initState = {
    projects: [
    {id: '1', title: 'Title 1', content: 'blah blah blah'},
    {id: '2', title: 'Title 2', content: 'blah2 blah blah'},
    {id: '3', title: 'Title 3', content: 'blah3 blah blah'}
    ]
};

const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('project created', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer