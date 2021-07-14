### `Soulution for the Career Foundry Challenge : Calendar /Booking app`

The app has been deployed on github pages . Use [this link](https://julienyaware.github.io/challengeCareerFoundry/) to access it

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## There are two ways you can view the code

(Without necessarily cloning the repository)

1. You can view the code using codeSandBox on your browser using [this link](https://codesandbox.io/s/github/julienyaware/challengeCareerFoundry)

2. Clone this repository

In the project directory, you can run:

### `npm install`

Installs all the libraries needed that are in the package.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `Libraries and Tools used`

React UI Library for UI design

react-calendar-js for dates

Simple CSS for simple styling

Moment JS to manipulate dates

Firebase to save confirmations in a Firestore collection called confirmations

Axios to interact with the API through fetching of data

### `Design Decisions`

The app fullfils all the user stories mentioned in the challenge

On the lading page is a calendar . I used react-js-calendar library so because of its flexibility incase a  student would like to book an appointment even a year from now .

When a date is selected all time slots in the date are shown regardless of whether its already booked or not as the user stories suggest.Once a date is selected an API call to the mock API is made so as to get the date and times of already taken timeslots and this information is used to determine what happens on clicking a time slot.

Upon selection of an already booked time slot an alert is shown that the slot is unavailable. 

When the user books an available time slot a confirmation box is shown upon which the user can enter the reason and submit. The details are then sent to the database.Upon successful submission to the database a popup with the details of time and reason is shown.

The application is also responsive so that it can be viewed at ease on multiple devices.To make it responsive I have used flex-box, grid and media queries.


### `What to expect`

![image](https://user-images.githubusercontent.com/13431164/125536808-fab8f42e-4388-4f1f-9f6d-ee11eaadb97e.png)
![image](https://user-images.githubusercontent.com/13431164/125536854-8c455e7c-8f00-4684-80b4-1efff8b00289.png)
![image](https://user-images.githubusercontent.com/13431164/125536924-a8a44835-e231-4c30-a8a8-d0d267f38d2f.png)



