# Learning Redux Simple Way

## Steps

### 1. Create Action Types (Generally It's an Enumeration of Possible Actions)
### 2. Create Reducer for a specific action (Ideally, there may be multiple reducers, or you may create one reducer with multiple switch cases)
### 3. If you have mulitiple reducers, create a combined reducer (Most of the scenarios, you may have to combine mutiple reducers together into a single reducer)
### 4. Create a Redux store with Reducers, Initial State and enhancers (For browsers visibility, you can use a browser provided enhancer called __REDUX_DEVTOOLS_EXTENSION__)
### 5. Create a subscriber to the store to handle change events of the state
### 6. Create an UI event handler, which responds to an UI action and write the logic to prepare the payload which includes action types and the data, and dispatch to the Store. And the store in turn executes all available reducers to produce a state based on the current state, which enables subscribes to be notified when the state is changed (new).

#### Steps to prepare for Redux Project ...
#### npm install redux http-server
#### http-server