# FancyCars.ca React App

## Getting Started

    * Clone the repository
    * Within repository root run npm install and npm start
    * View http://localhost:8080 in web browser

## Notes

I used a minimal React/Redux/Redux-saga boilerplate setup called [redux-minimal](https://redux-minimal.js.org).
After looking at a variety of setups I found this to be similar to what I had worked with and was familiar with. Using
an established boilerplate saved time, however a few things are not set up quite as I would expect.

I removed all references to external CSS. In particular, the redux-minimal uses Bootstrap by default.

There is no linting set up, nor are there any tests. Sagas, reducers and components are separated, however, which
would facilitate unit testing.

API calls are made using sagas which call into a fake API client. A real one could be substituted very easily without
disrupting the rest of the app.

API data state is maintained by redux, however I did use a React component state to handle the sort state due to its
locality. (I've done it both ways and have complicated thoughts about it).

I used a string rather than a number for car ID as that seemed to make more sense.

## Possible improvements

The React components could be broken down further. In particular, the sort selector should probably be its own thing.

Data-providing components (containers) could be separated from pure view components.

The Sass files could be cleaned up with common values such as text formats and dimensions defined centrally.

The button HTML element could be replaced by a better looking button based on div.

The car data maintained by redux isn't necessarily optimal. I tried a few different approaches to dealing with the
separation of availability from the rest of the car data, ultimately deciding to keep the main car data as an array
and update both and the sorted versions as needed. Sorting could be done on-demand, and the data could potentially be
updated in more efficient ways. Ultimately I had to pick something and move on. It's fine for a small data set but
might have to be reconsidered for a larger one (modulo paging etc).

used all class-based components, should use other types (eg pure funcs)
