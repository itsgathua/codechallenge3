document.addEventListener("DOMContentLoaded", () => {
    const filmsList = document.getElementById("films");
    const poster = document.getElementById("poster");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const runtime = document.getElementById("runtime");
    const showtime = document.getElementById("showtime");
    const availableTickets = document.getElementById("available-tickets");
    const buyTicketButton = document.getElementById("buy-ticket");
  
// Fetch all films and populate the list
fetch("http://localhost:3000/films")
.then((res) => res.json())
.then((films) => {
films.forEach((film) => addFilmToMenu(film));
displayFilmDetails(films[0]); // Show the first film by default
});
  
// Add a film to the sidebar menu
function addFilmToMenu(film) {
    const li = document.createElement("li");
    li.textContent = film.title;
    li.addEventListener("click", () => displayFilmDetails(film));
    filmsList.appendChild(li);
}
  
// Display the selected film's details
function displayFilmDetails(film) {
    poster.src = film.poster;
    title.textContent = film.title;
    description.textContent = film.description;
    runtime.textContent = film.runtime;
    showtime.textContent = film.showtime;
    updateTickets(film);
    
    // Attach "Buy Ticket" functionality
    buyTicketButton.onclick = () => buyTicket(film);
}
  
// Update tickets available for the selected film
function updateTickets(film) {
    const ticketsLeft = film.capacity - film.tickets_sold;
    availableTickets.textContent = ticketsLeft > 0 ? ticketsLeft : "Sold Out";
}
  
// Handle ticket purchase
function buyTicket(film) {
    if (film.capacity - film.tickets_sold > 0) {
        film.tickets_sold++;
        updateTickets(film);
    } else {
        alert("Tickets are sold out!");
    }
}
});
  