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