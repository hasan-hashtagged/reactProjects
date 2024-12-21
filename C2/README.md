# Project 2

This project focuses on how to work on react apps Step-by-Step. I'll be
following the approach mentioned on react official site. I'll also try to add
CSS styling which wasn't there in earlier project.

This project will create a simple product search component where the user can
search for products and it will be displayed accodingly in same component.

We will follow the five steps on how to work with react app. We will assume a
mockup has been given to us.

## Break the UI into component hierarchy
We will look at the mockup and divide it based on the criteria that suits us.
For example, we can split it based on domain-knowledge:
1. Programming - use the design principles(single-responsibility principle)
to split the components into subcomponents.
2. CSS - Split based on the class-selectors.
3. Design - Split on the basis of design layer.

## Build a static version in React
Build the static react application using the `props`. At this point, the app
doesn't need to have the interactivity. Just check with the data-format you
want to recieve from the server.

We can implement the components in "top-down" or "bottom-up" approach. If the
app is simple enough, we can easily use "top-down" approach. Otherwise, we can
always go with the "bottom-up" approach.

## Find minimal but complete representation of UI
Adding the state so that users can change the data-model. There should be a
minimal set of states keeping in mind "DRY(don't repeat yourself)".
-> If it doesn't change over time => Not a state.
-> Passed from parent via `props` => Not a state.
-> computable based on existing states or `props` of componenet => Not a state.

In our case, `SearchBar` and `CheckBox` are state as they change over users'
interaction and cannot be computed.

## Identify where the state should live
React uses one-way data flow (parent to child component).

For each state:
-> Identify the components that use the state.
-> Find latest common ancestor.
-> We can either keep it at LCA, or component above that or create a component
solely to manage the state (if it's complicated enough).

In our case, the states are in `searchBar` component and are also used by 
`ProductTable`. Thus, we keep in LCA, i.e. `FlterableProduct`.

Create the states and pass it respective components as `prop`.

## Add inverse data-flow
To have the interactivety, we add the `handlers` to handle the change. Since
the `state` belongs to `FilterableProduct`, only it can call `set` state
calls. So, we pass it as `prop` to children components. and add `onChange` to
the `input` fields.
