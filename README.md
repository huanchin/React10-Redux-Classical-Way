# Intro to Redux

This project is built to demostrate how redux works with react

## Step 1 initial state

Create initial state for reducer

## Step 2 Reducer

create reducer with switch case(action.type)

## Step 3 Action Creator

function return action

## Step 4 Create Redux store

### npm i redux

## Step 5 Connect redux store with react by adding Provider

### npm i react-redux

## Step 6 in React, we get access to the state by using the useSelector hook

useSelector creates a subscription to the store

### const customer = useSelector((state) => state.customer.fullName);

## Step 7 in React, we get access to the dispatch function by using the useDispatch hook

### const dispatch = useDispatch();

## Step 8 need middleware(thunk) for API call (async function)

not return action but dispatch directly in the end in the thunk
