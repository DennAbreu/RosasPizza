<div align="center"><img src="src\assets\rpLogo.png"></div>
<h1 align="center">Rosa's Pizzeria Ordering App</h1>

<div align="center"><a href='https://www.youtube.com/watch?v=V-tVElokCMM'>Click to see a quick demo!</a></div>

<h2>About</h2>
Rosa's Pizzeria Ordering App is a 'single-page application' (SPA) built in React for New York City's famous Rosa's Pizza.

<h2>Goals</h2>

My goal was to practice the fundamentals of the React frontend Javascript library, learn to manage state, and implement hooks during development.

<h2>Key Learnings</h2>

- More practice with APIs, especially in retrieving/sending data to a backend provided by Google Firebase.
- Managing state variables in functional components through the useState() hook.
- Using the useEffect() hook to manage side-effects after a component has been rendered.
- Using the useReducer() hook to manage more complex states through dispatch functions.
- Using the useContext() hook to avoid 'prop drilling' and to manage a global state to pass data to several specific components that required it.
- Rendering components, such as a modal, into a DOM node that exists outside of the DOM hierarchy.

<h2>Built With</h2>

| Package                                                 | Docs                                                                            |
| ------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [HTML](https://www.w3schools.com/html/)                 | [:notebook: Click Me!](https://www.w3schools.com/html/)                         |
| [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | [:notebook: Click Me!](https://www.w3schools.com/cssref/default.asp)            |
| [JavaScript ES6](https://www.javascript.com/)           | [:notebook: Click Me!](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| [React JS Library](https://reactjs.org/)                | [:notebook: Click Me!](https://reactjs.org/docs/getting-started.html/)          |

<h2>Getting Started</h2>

To get a local copy running on your machine please follow the steps below:

1. Download this project as a zip file _or_ clone the repo.

   ```sh
   git clone https://github.com/DennAbreu/RosasPizza.git
   ```

2. Open a terminal and use the following command to install NPM packages:

   ```sh
   npm install
   ```

3. Visit [Google's Firebase site](https://firebase.google.com/) to start a new account.
4. Once finished go to the console and click `Add a Project`.
5. Navigate towards `Realtime Database` and set up a test database.
6. Import the downloaded JSON item, `pizzaItems.json`, that is located in the `RosasPizza/src/assets/` folder in your local repository.
7. Copy the URL that is unique to your account.
8. Once you have the database URL navigate towards the local repository where you cloned the project.
9. You will need to replace the URL to the database in two locations. The first location is located in `RosasPizza/src/components/Food/DisplayFood.js`. Change the string `URL GOES HERE` to your own Firebase URL in the variable `dbUrl = 'URL GOES HERE'`. Make sure to add a '/pizzaItems.json' tp the end of the URL.

   `Example: YourUrl.firebaseio.com/pizzaItems.json`

10. The second location is located in `RosasPizza/src/components/Cart/Checkout.js`. Change the string `'URL GOES HERE'` to your own Firebase URL in the variable `dbUrl = 'URL GOES HERE'`. make sure to add `/orders.json` to the end of the URL.

    `Example: YOUR_URL.firebaseio.com/orders.json`

11. The project is now setup to run! Run the following command to run and use the app.
    ```sh
    npm start
    ```

<h2>Credits</h2>

- Author: <a href="https://www.linkedin.com/in/dennabreu/" target="_blank">Dennis Abreu</a>
- Graphics: <a href="https://www.linkedin.com/in/dennabreu/" target="_blank">Dennis Abreu </a>

<h2>Copyright</h2>
This project is licensed under the terms of the MIT license and protected by Udacity Honor Code and Community Code of Conduct. See <a href="LICENSE.md">license</a> and <a href="LICENSE.DISCLAIMER.md">disclaimer</a>.
