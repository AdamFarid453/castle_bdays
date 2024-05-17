# Friends Birthday Reminder

A simple React application to keep track of your friends' birthdays. The app categorizes upcoming birthdays into different time frames and displays a special message for birthdays that fall on the current day.

## Table of Contents

- [Features](#features)
- [Components](#components)

## Features

- Displays friends' birthdays sorted by the number of days left.
- Categorizes birthdays into four categories:
  - **Birthdays Today** 🎉
  - **In 30 Days** 👀
  - **In 3 Months**
  - **Later**
- Special message for birthdays falling on the current day.
- Dynamically updates and sorts the list of friends based on their birthdays.

## Components

### Birthdays.js

Contains the list of friends with their names, birthdays, unique IDs, and image URLs.

```js
export const friends = [
  // Sample data
  {
    name: "Aimee",
    birthdayDate: "2023-12-27",
    id: Math.floor(Math.random() * 1000),
    imgURL: "",
  },
  // More friends
];
```

### FriendList.js

Handles the logic for sorting and categorizing friends based on their birthdays. Also contains helper functions for calculating the number of days left until a friend's birthday.

### Person.js

Displays individual friend's details and calculates the days left until their birthday. Shows a special message if the birthday is today.

### Helper Functions

daysLeftToBd: Calculates the number of days left until the next birthday.
isBdSoon, isBdThreeMonthsAway, isBdLater, isBdToday: Helper functions to categorize friends based on their upcoming birthdays.
