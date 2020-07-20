const INITIAL_STATE = [
    {
        title: 'title-1',
        author: 'author-1',
        size: 'large',
        difficulty: 'high'
    },
    {
        title: 'title-2',
        author: 'author-2',
        size: 'small',
        difficulty: 'medium'
    },
];

function scanwordReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default: return state;
    }
}

export default scanwordReducer;
