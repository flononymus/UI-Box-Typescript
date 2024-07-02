# To-Do 
___

- **General/QOL**
  - [ ] fix DOM cant find darkmodeToggle when it starts on canvas page

- **Pages + Functionality**

  - [ ] **Settings**
    - [ ] Button to switch navbar to the left/right?

  - [ ] **Tether**
    - [ ] Make tethers interact with eachother

  - [ ] **Switches**
    - [ ] Vertical switch: make it "snap" to points
    - [ ] Vertical switch: add lines for segments

    - [ ] Better style 3 segment

  - [ ] **More examples**
    - [ ] Scrolling lock thing
    - [ ] Sliders (?)
      - Idea: play with friction/resistance of slider based on position 
    - [ ] Add more inspiration gifs

  - [ ] **Ball**
    - [ ] Add a reference for pull direction/pull strenght
    - [ ] calculate trajectory mode, + button to turn it on/off
    - [ ] make hoop like button, and calculate collision based on that

- **Styles + Design**

  - [ ] **Navbar & Menus**
    - [ ] Tab styles --> https://github.com/adamschwartz/chrome-tabs/tree/gh-pages
    - [ ] Page transitions --> https://vuejs.org/guide/built-ins/transition.html

- **Rest**
  - [ ] Switch for navbar on top --> side: 
  - [ ] Consistent fps 


- **Low priority**
  - [ ] Fix lefthalf and righthalf transition spinner
  - [ ] Fix keyboard not resetting onmousedown joystick


___

# Done
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

  - [x] **Switches**
    - [x] add a "manual" switch instead of click switch
    - [x] More designs

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

  - [x] **Github pages**
    - [x] Github actions to automatically push to gh-pages branch
    - [x] Fix position of ball and particles
    - [x] Fix particle sizes --> not depending on screen size

  - [x] **Keyboard**
    - [x] Add some keyboard page with wasd 

  - [x] **Navbar & Menus**
    - [x] Indicate what page is active
    - [x] Navbar better style
    - [x] Icons instead of text