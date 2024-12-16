# Flatdango

This is my live link - 

## Description

Flatdango is a simple movie ticket app for the Flatiron Movie Theater. 
Users can view movies, see details, and buy tickets. 
The app updates available tickets automatically and prevents buying tickets for sold-out movies.

## Installation
Installation

### Requirements

- **Install Node.js.**

- **Install JSON Server globally**: npm install -g json-server

**Setup**
- Create a db.json file in your project folder.
- Copy the db.json data provided in the link below to your db.json file:
    https://docs.google.com/document/d/1KKqnHX4woJXQD1DSARTOcFD66uniLy0qwJFoHmmQDbA/edit?ta

- **Start the JSON server**: json-server --watch db.json
- The server will run at http://localhost:3000 by default.

- **Run the Application**
- Clone or download this repository.
- Open the index.html file in your browser.





## Features

- **Movie Details on Load**: The first movie's title, poster, description, runtime, showtime, and available tickets are displayed when the page loads.
- **Movie List Navigation**: A dynamic list of all available movies is displayed on the left sidebar for easy navigation.
- **Real-Time Ticket Updates**: Users can purchase tickets, reducing the number of available tickets in real time.
- **Sold-Out Prevention**: The app prevents users from buying tickets once the available count reaches zero.

## Usage
- **View Movie Details**:
The first movie's details are shown by default when the app loads.
These details include the poster, title, runtime, description, showtime, and available tickets.

- **Browse Other Movies**:
All available movies are listed in the sidebar. Click on a movie title to view its details.

- **Purchase Tickets**:
Click the Buy Ticket button to decrease the number of available tickets.
If tickets are sold out, the button will no longer function.

## Author
- Ian Mbui Gathua

# License
- This project is open-source and available under the MIT License.