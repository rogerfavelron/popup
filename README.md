# Popup

This project is a popup project where we can create popups with custom messages.
Live link: https://rogerfavelron.github.io/popup/ 

## Features

- Set headline, description, success message for popup
- Warn when email is invalid or empty
- Get fonts data from API and filter the data

## Tech Stack

- React
- Redux
- CSS (I'd use styled components if it's been permitted)
- Axios

## Folder Structure

##### Components

In this folder you can find presentational components. It means that these components don't care about global state. They may have their own state or props. They're about how things seem on a page.

In this folder we have our components. These components are:

- Popup,SuccessPopup
- PopupWrapper
- Settings
- Sidebar

##### Other details
This project uses Redux to store popup settings and also personal data (email,name,font). 
In our Redux folder, we have:
- personalDataSlice,settingsSlice
- store

Other than redux, we have utils (axios with baseURL).

## Note
I didn't use localStorage to store personal data. Because if I'd use localStorage, I wouldn't be able 
to show custom error messages. Instead, I've used Redux which is way better.

## Installation

```sh
git clone
cd popup
npm install
npm start
```
