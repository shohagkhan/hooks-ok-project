export const BookReducer = (state, action) => {
    switch (action.type) {
        case 'addBook':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: state.length
            }]
        case 'removeBook':
            return state.filter((book) => book.id !== action.id)
        default:
            return state;
    }
}