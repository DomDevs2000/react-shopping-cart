## The Test
+ We’d like you to create a 2 step application. You are required to write custom JavaScript, HTML and Sass (or css) to reproduce a working version of the designs (see /design folder). We’ve provided you with a starter framework which your custom code should be added to. __Please use this framework and no other__. Installation notes have been provided below.

+ The provided package.json file contains several packages. You are **not** required to use them all and can disable any you don’t require. You may use additional packages but please provide references to these in your notes. Note all packages used will be reviewed and may impact on your final score if they have impacted on the overall difficulty of this test.


### Requirements

#### Step 1 (see design files in /design/Store)
+ Allow users to add video games to the basket
+ Once a video game has been added to the basket, it cannot be added again (the item should be disabled, see design files). It can however be removed from the basket and the user should be able to add again.
+ Other video games can be added to the basket
+ The basket total should display the total prices of all video games in the basket
+ If the basket contains items the continue button should be enabled and when clicked the user should be redirected to the Step 2

#### Step 2 (see design files in /design/Checkout)
+ The basket should mirror the video games added on the Store Step
+ Video games can be removed on this step and the changes should be reflected on the Store Step
+ User should be able to navigate from Checkout Step back to the Store Step using a button

### Installation Notes

#### Setup
+ To install packages please run "npm install" from the project folder
+ To start the application run "npm start" or "npm run start"

#### File structure
+ /js - Folder where you write your javascript code
+ /sass - Folder where you write your styles
+ /assets - Folder contains all the required assets
+ /design - Folder contains the desired design files which you should replicate

#### Setup files (the listed files should NOT be edited)
+ /.babelrc
+ /index.html
+ /README.MD
+ /server.js
+ /webpack.config.js
