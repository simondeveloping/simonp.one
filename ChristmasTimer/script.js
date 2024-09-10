let currentDay = new Date();
let christmasDay = new Date(currentDay.getFullYear(), 11, 24);
let difference = christmasDay - currentDay;
let daysUntilChristmas = Math.ceil(difference / (1000 * 60 * 60 * 24));
document.getElementById("day").innerHTML = "Only " +daysUntilChristmas+ " days left till christmas!";