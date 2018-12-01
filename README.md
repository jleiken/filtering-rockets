```
    _                        _
   / \   _ __ ___   ___ _ __(_) ___ __ _ _ __
  / _ \ | '_ ` _ \ / _ \ '__| |/ __/ _` | '_ \
 / ___ \| | | | | |  __/ |  | | (_| (_| | | | |
/_/   \_\_| |_| |_|\___|_|  |_|\___\__,_|_| |_|

 ____            _        _
|  _ \ ___   ___| | _____| |_ ___
| |_) / _ \ / __| |/ / _ \ __/ __|
|  _ < (_) | (__|   <  __/ |_\__ \
|_| \_\___/ \___|_|\_\___|\__|___/
```

To open this website, [React and npm](https://codeburst.io/installing-reactjs-and-creating-your-first-application-d437706498ed) must be installed.
Once you have those, navigate to the folder containing this file and run
`npm start`. React will automatically open it in your default web browser!

This website, written for CSCI 1300: UI/UX, demonstrates a number of the
principles learned in that class. First, it's clear that the only
controllable sections of the interface are at the top of the page.
Filters are on the top left, then sorting, then search is on the top right.
These are fairly standardized positions for the respective components.
The grid layout make it easier for users to see more information than a
linear layout would have been. These features work to promote the central
goal of the site - comparing rockets by a variety of criteria. With more
information this site could be useful for space mission managers to compare
and pick rockets for launches.

On the back-end, this app is designed to contain one central copy of the
rocket data while the [Filter](src/Filter.jsx) and [Sorter](src/Sorter.jsx)
modifiers register functions to change it. When a component of either is
created and a user selects an option, they register that filter or sort
function with their parent, [App.js](src/App.js), which then refreshes. It
applies those functions to the data and supplies the new, filtered copies to
[Grid](src/Grid.jsx), which handles the output completely. Its state changes
whenever a new copy is supplied.