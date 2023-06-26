# Interactive Calendar

This is an interactive calendar written in React that generates a full screen calendar for a given year and enables users to pick days by clicking day numbers & store them in the app state, so you can use this data according to your needs.

Every day object contains props:

- dayIndex (number: 0 = Monday),
- dayNumber,
- isSelected (boolean),
- monthIndex,
- weekIndex (for the particular month),
- year.

This app is a reusable & customizable component, that can be integrated with other React apps.

## Tech Stack

- React 18.2
- React Context & useReducer state management
- React Bootstrap 2.7
- Bootstrap 5.2.3