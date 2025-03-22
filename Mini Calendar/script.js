const monthElement = document.querySelector(".month");
const dayElement = document.querySelector(".day");
const dateElement = document.querySelector(".date");
const yearElement = document.querySelector(".year");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Function to update the calendar
const updateCalendar = () => {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const date = currentDate.getDate();

  // Update the elements
  monthElement.textContent = months[month];
  dayElement.textContent = days[day];
  dateElement.textContent = date;
  yearElement.textContent = year;
};

// Initialize the calendar
updateCalendar();
