const ActionTypes = {
    AddBook: "addBook",
    AddAuthor: "addAuthor"
};

const addBookReducer = (state = [], action) => {
    let nextState = state;

    if (action.type === ActionTypes.AddBook) {
        nextState = [...state, {
            bookId: action.bookId,
            title: action.title,
            isbn: action.isbn
        }];
    }

    return nextState;
};

const addAuthorReducer = (state = [], action) => {
    let nextState = state;

    if (action.type === ActionTypes.AddAuthor) {
        nextState = [...state, {
            authorId: action.authorId,
            name: action.name,
            email: action.email
        }];
    }

    return nextState;
};

const combinedReducers = (state = {}, action) => {
    return {
        books: addBookReducer(state.books, action),
        authors: addAuthorReducer(state.authors, action)
    };
};

const { createStore } = Redux;
const store = createStore(combinedReducers, {},
    __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    const state = store.getState();

    console.info(`State Changed ... ${state.books?.length} ${state.authors?.length}`);
    console.info(JSON.stringify(state));
});

let bookId = 0;
let authorId = 0;
let getRandom = () => Math.floor(Math.random() * (10000000 - 1) + 1);

document.getElementById("btnAddBook").onclick = () => {
    const payload = {
        type: ActionTypes.AddBook,
        bookId: ++bookId,
        title: `Book-Title-${getRandom()}`,
        isbn: `ISBN-${getRandom()}`
    };

    store.dispatch(payload);
};

document.getElementById("btnAddAuthor").onclick = () => {
    const payload = {
        type: ActionTypes.AddAuthor,
        authorId: ++authorId,
        name: `Book-Author-${getRandom()}`,
        email: `info-${getRandom()}@email.com`
    };

    store.dispatch(payload);
};
