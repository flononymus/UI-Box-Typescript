# To-Do 
___

- ### Currently working on

___

- [ ] Visualizer sound

- [ ] Hot Reloading:
https://github.com/codesbiome/electron-react-webpack-typescript-2024
https://github.com/codesbiome/react-webpack-typescript-2023

https://github.com/codesbiome/electron-react-webpack-typescript-2024

  Things to try out:
  - Move webpack.config to seperate folder
  - set "--config ./folder/webpack.config" flag for "npm run dev"
  - Look into "webpack serve"
___

<br>


- **Pages + Functionality**

  - [ ] **Cube**
    - [ ] Add more stuff

  - [ ] **Switches**
    - [ ] Vertical switch: add friction to make it snap to top or bottom, reverse in other half

  - [ ] **More examples**
    - [ ] **Scrolling lock thing**
    - [ ] Sliders (?)
    - [ ] Idea: play with friction/resistance of slider based on position 
    - [ ] Add more inspiration gifs

  - [ ] **Ball**
    - [ ] Add a reference for pull direction/pull strenght
    - [ ] calculate trajectory mode, + button to turn it on/off
    - [ ] Ball --> add a randomize button to randomize hoop position

  - [ ] **Tether**
    - [ ] Make tethers interact with eachother
    - [ ] Tether effects on drag
      - [ ] changes in color the further the drag?
    - [ ] 

- **Styles + Design** 

- **General/QOL**

- **Low priority**
  - [ ] Fix lefthalf and righthalf transition spinner
  - [ ] Consistent fps 
  - [ ] fix DOM cant find darkmodeToggle when it starts on canvas page
  - [ ] Page transitions --> https://vuejs.org/guide/built-ins/transition.html

___

# Done

  - [ ] **Cube**
    - [x] Reset perspective when mouse is outside of box
    - [x] Cube: add "motions" --> "swipe left" to turn it 180 degrees, "swipe up" etc

  - [x] **Spinner**
    - [x] Figure out if possible
    - [x] Mousewheel
    - [x] Add velocity and friction
    - [x] Add lefthalf and righthalf** for scrolling
    - [x] Fix lefthalf and righthalf dragging/set reference to actual center(?)

  - [x] **Particles**
    - [x] Figure out why mouse isnt at center 
    - [x] Fix font not displaying
    - [x] Fix canvas size

  - [x] **Button**
    - [x] Smoother animations
    - [x] some toggle buttons
    - [x] button1 correct light mode colors
    - [x] Effects onpress

  - [x] **Tethers**
    - [x] Figure out inconsistency with damping and stiffness --> initscene called twice on window resize
    - [x] Add actual tether

  - [x] **Ball**
    - [x] Prototype 2d basketball thingy
    - [x] Reset button in the center of screen + bigger
    - [x] Ball start position from wherever the mouse is down?
    - [x] Add a hoop
    - [x] Ball --> calculate bounding box correctly
    - [x] Ball: dont "spawn" ball when click in navbar area

  - [x] **Switches**
    - [x] add a "manual" switch instead of click switch
    - [x] More designs
    - [x] Better style 3 segment
    - [x] Vertical switch: make it "snap" to points
    - [x] Vertical switch: add lines for segments

  - [x] **Logo**
    - [x] Fix/Design better logo
    - [x] Preview for ReadMe
    - [x] Center on page

  - **General/QOL**
    - [x] Fix content centered in the middle of screen
    - [x] Working darkmode toggle
    - [x] Factor out Navbar into react component instead of on the index.html
    - [x] properly align icons in the navbar
    - [x] Figure out why settings button is not working on homepage
    - [x] Reload the canvas pages when darkmodetoggle
    - [x] Remove settings and replace with darkmode toggle instead
    - [x] Add settings button next to "ui-box" title
    - [x] Scale up active element in navbar/remove padding

  - [x] **Github pages**
    - [x] Github actions to automatically push to gh-pages branch
    - [x] Fix position of ball and particles
    - [x] Fix particle sizes --> not depending on screen size

  - [x] **Joystick**
    - [x] Add some keyboard page with wasd 
    - [x] Joystick --> mouse and keyboard seperately
    - [x] Joystick: Reset mouse position on keyboard press

  - [x] **Navbar & Menus**
    - [x] Indicate what page is active
    - [x] Navbar better style
    - [x] Icons instead of text

  - [x] **Low priority**
    - [x] Fix keyboard not resetting onmousedown joystick
    - [x] Navbar Tab styles --> https://github.com/adamschwartz/chrome-tabs/tree/gh-pages