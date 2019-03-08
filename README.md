# Weather App
Note: when searching; the WeatherAPI doesn't have ALL the cities in the world, and seems to only have major populated ones. Be sure to use a Zip Code if your City doesn't show up. 

1. [Quick Start](#quick-start)  
2. [File Structure](#file-structure)
3. [Front-End Architecture](#front-end)  
4. [Back-End Architecture](#back-end)
6. [Trade-Offs](#trade-offs)
5. [Testing](#testing)
7. [To-Do](#to-do)  

## 🚀 Quick Start
<a name="quick-start"/>

Clone the site and change to its directory. 

  ```sh
  git clone https://github.com/bar0191/wapp
  cd wapp
  ```

1.  **Development**

    Install `yarn` dependencies.
    
    ```sh 
    yarn
    ```
    
    Run develop server.
    
    ```sh
    yarn develop
    ```

1.  **Production**
    
      Install `yarn` dependencies.
      
      ```sh 
      yarn
      ```
      
      Run develop server.
      
      ```sh
      yarn prod
      ```
    
## 🧐 File Structure
<a name="file-structure"/>

A quick look at the top-level files and directories.

    .
    ├── README.md
    ├── package.json
    ├── public
    ├── src
    │   ├── App.js
    │   ├── assets
    │   ├── components
    │   ├── index.js
    │   ├── server
    │   ├── styles
    │   └── vendor
    └── yarn.lock

  1.  **`/src/assets`**: This directory contains any site assets like imgs, fonts, icons, etc. 

  1.  **`/src/components`**: This directory contains any stateless/pure reusable component.
      
  1.  **`/src/styles`**: This directory contains any site styles (sass/scss).
  
  1.  **`/src/server`**: This directory contains back-end server logic (express/micro-services) 

  1.  **`/src/vendor`**: This directory contains third-party scripts, styles, fonts, etc. 


## ⚙️ Front-End Architecture
<a name="front-end"/>

### Built on CRA

Since this project was spun up using Create-React-App, it's purely client side rendered. 

### Styles

Styles in this project are written in SASS using SCSS syntax. Implementation is handled by node-sass, and webpack. BEM model is used.

### Animations/Transitions

All Animations and transitions are done through react-pose and pure SCSS. 

### Design

I followed I very minimalist design approach. The site was styled mobile first, meaning media queries are done for desktop. 

## ⚙️ Back-End Architecture
<a name="back-end"/>

### Express

This project uses an express back-end to render build in production and is used to consume weather micro-services. Following a model/controller stucture where routes are calling a controller to manage the micro service. 

### Security/API Auth

Currently the project is using a static (Non-secret) Token to authorize API calls, purely as an example of how one would authorize an API call in Express. I added Helmet just to show how easy it is to add a little extra protection to a nodeJS application. 

## 👨‍💻 Trade Offs
<a name="trade-offs"/>

### Error Handling
Due to time constraints, this projects doesn't have much error handling if the user enters a zip or city that doesn't exist. Right now if a city or zip doesn't exists the form just doesn't submit. That isn't ideal for UX in the real world. 


### Design
Due to time constraints, I only really designed the project with mobile in mind, so there isn't a very unique desktop design or change from the mobile version. Font's and icon sizes are increased. I would have also liked the change to make the search field more interactive, with autofill/autocomplete functionality.

### Functionality
Due to time constraints, I didn't get to implement a kind of autofill/auto complete feature on the search bar, where if the user types "San" it would display search results for "San Fran", "San Diego", etc. Right now the search functionality will go to the closest matching value. Not ideal for UX either. 

### Testing
<a name="testing"/>

Unit Testing to come soon hopefully, but right now no unit tests have been created. 


## ✔️ To Do
<a name="to-do"/>

  1. Error Handling

  1. Unit Testing
  
  1. Better desktop design
  
  1. Fix exit animation on back
  
  1. Add autofill functionality to search form
  
  1. implement pre-fetching with autofill functionality on searhc form
