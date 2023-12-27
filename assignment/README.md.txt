# improvIT - Frontend Developer Exercise

This is a simple frontend code challenge created to serve two purposes:

1. Show off your skills
1. Give us a better understanding of your skills

## The Task
You are building a list of improvIT team members.

The programming challenge consists of 2 parts:
* Part A: HTML + CSS
* Part B: Javascript

### PART A: HTML + CSS

<!-- ![alt text](https://bitbucket.org/improvit-exercises/front-end-exercise/raw/db75cc72d80711b9431f0697c39c6caf41bcee3c/improvIT_exercise_mockup.png "Exercise design mockup") -->

* Create a responsive layout based on the given screen (improvIT_exercise_mockup.png).
* The design does not include a mobile version so it is up to the developer to use their own judgement to present this.
* Style the layout consistently and beautifully, adhering as closely to the design as possible.
* **NOTE:** You are free to use any responsive HTML + CSS framework (Bootstrap, Foundation, Bulma etc), any preprocessor you wish, or write raw CSS. *Bonus points for an explanation of your choice.*

<br />
<br />

### PART B: Javascript

![alt text](https://bitbucket.org/improvit-exercises/front-end-exercise/raw/db75cc72d80711b9431f0697c39c6caf41bcee3c/improvIT_exercise_functionality.gif "Exercise functionality") 

* Consume this public API @ http://jsonplaceholder.typicode.com/users to retrieve the team members for the list. How you consume the API is up to you.
* Display all team members in the HTML + CSS layout created in step A, sticking to the layout, placing data where it fits.
* You should be able to filter the list by typing into the filter text input.
* Clicking on a row should expand it to reveal the team member's photo, email and address -- only one row should be able to be expanded at a time.
* **NOTE:** You are free to use any framework you wish, or do it with Vanilla JS style. *Brief explanation of your choice.*

## Additional Instructions

* Leave comments where you were not sure how to properly proceed.
* Include a README file in your exercise describing the tools used and instructions on how to setup the viewing environment.
* After you're done, provide us the link to your GitHub repository or send us the exercise in a .zip file
* No pull requests.

## Bonus Points

* Use ES6
* Demonstrate knowledge of modern best practices / coding patterns.
* Usage of MV* framework / library (e.g Vue.js, React, Angular, etc).
* Demonstrate knowledge on how to construct and re-use components.
* Pixel perfection.

#### For fun / Extra Bonus Points
- Add animation to the expanding rows.
- Output some location-relative information using the latitude / longitude returned by the API endpoint for each team member.
- Add a "loading" indicator when the team members are being fetched.

---

#### Notes
- The static images you need are inside the `img` folder
- The webfonts used in the design are [Montserrat](https://fonts.googleapis.com/css?family=Montserrat) and [Roboto](https://fonts.googleapis.com/css?family=Roboto)
- The design shows just a sample of team members. You should display all of the team members that the API endpoint returns.
