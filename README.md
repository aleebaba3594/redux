# theory about redux

- Redux is a predictable state container for JavaScript apps.
- It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
- You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), 
but has a large ecosystem of addons available.
- Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular,
Vue, Ember, and vanilla JS
- Although Redux and React are commonly used together, they are independent of each other.
- If you are using Redux with any kind of UI framework, you will normally use a "UI binding" library to tie Redux
together with your UI framework, rather than directly interacting with the store from your UI code.
- React Redux is the official Redux UI binding library for React. If you are using Redux and React together,
you should also use React Redux to bind these two libraries.
- Redux is a pattern and library for managing and updating application state, using events called "actions".

# keypoints to use redux 

  - ### define actions in action file
 - ### these actions will be handled by reducer in reducer file
- ### combine all reducers in rooteducer file because we can have only one rootreducer so we combine all reducers in one rootreducer.
- ### now make a store in store file and add this rootreducer into this store.
- ### wrap the App component with Provider tag and pass it store as a props
  - example 
	 Provider store={store}
  	  App 
         Provider 
    - where provider is open and close tag wrapping the App component)
- ### now select that reducer with useSelector and call the function with useDispatch in any component as per your requirement.
- ### import both usedispatch and action function in every component where you want to create any action
- ### call dispatch function with parameter that action function call.
