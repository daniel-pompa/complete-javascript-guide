/**
 * This exercise demonstrates the use of JavaScript objects, arrays, date manipulation,
 * and conditional statements to determine the open/closed status of a shop based on the current day and time.
 * It includes logging the current date and time in a formatted manner and displays appropriate messages regarding the shop's status.
 * The code creates a shop object with opening hours, checks the current day and time,
 * and uses conditional logic to determine if the shop is open or closed. Finally, it logs the current date, time, and shop status to the console.
 */

console.log(
  '%cShop - Conditional statements example',
  'color: #1e3a8a; font-weight: bold;'
);

// Define the shop object with its name and opening hours
const shop = {
  name: 'Shop',
  openingHours: {
    weekdays: { open: 9, close: 20 },
    weekends: { open: 10, close: 14 },
  },
};

// Array to store the days of the week
const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// Define options for formatting dates
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log({ shop });

// Create a new Date object representing the current date and time
const currentDate = new Date();

// Get the current day of the week and hour of the day
const day = currentDate.getDay();
const currentHours = currentDate.getHours();

// Function to get the current time and log it in HH:MM:SS format
const getCurrentTime = () => {
  const timeString = currentDate.toLocaleTimeString('es-ES');
  console.log(timeString);
};

// Determine the opening hours based on the current day of the week
const openingHour = [0, 6].includes(day)
  ? shop.openingHours.weekends
  : shop.openingHours.weekdays;

// Determine the message based on the current day and time
let message;
if (day === 0) {
  message = 'Sorry, we are closed on Sundays';
} else if (currentHours >= openingHour.open && currentHours < openingHour.close) {
  message = 'We are open!';
} else {
  message = 'We are closed!';
}

// Format the current date and capitalize the first letter
const formattedDate = currentDate.toLocaleDateString('es-ES', options);
const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

// Log the formatted date and time to the console
console.log(capitalizedDate);
getCurrentTime();

// Log the message about the shop status
console.log(message);
