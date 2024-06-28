# To-Do 
___

- **General/QOL**
  - [ ] Reload the canvas pages when darkmodetoggle
  - [ ] properly align icons in the navbar
  - [ ] Figure out why settings button is not working on homepage

  - [x] Remove settings and replace with darkmode toggle instead

- **Pages + Functionality**

  - [ ] **Spinner**
    - [ ] Fix lefthalf and righthalf transition

  - [ ] **Ball**
    - [ ] Ball start position from wherever the mouse is down?
    - [ ] Add a hoop
    - [ ] Add a reference for pull direction/pull strenght
    - [ ] calculate trajectory mode, + button to turn it on/off
    - [ ] make hoop like button, and calculate collision based on that

  - [ ] **Tether**
    - [ ] Make tethers interact with eachother

  - [ ] **Buttons**
    - [ ] Effects onpress

  - [ ] **Switches**
    - [ ] add a "manual" switch instead of click switch
    - [ ] More designs

  - [ ] **More examples**
    - [ ] Scrolling lock thing

- **Styles + Design**

  - [ ] **Navbar & Menus**
    - [ ] Page transitions --> https://vuejs.org/guide/built-ins/transition.html

- **Rest**
  - [ ] Switch for navbar on top --> side: https://gist.github.com/reecelucas/2f510e6b8504008deaaa52732202d2da
  - [ ] Consistent fps 

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

  - [x] **Tethers**
    - [x] Figure out inconsistency with damping and stiffness --> initscene called twice on window resize
    - [x] Add actual tether

  - [ ] **Ball**
    - [x] Prototype 2d basketball thingy
    - [x] Reset button in the center of screen + bigger

  - [x] **Logo**
    - [x] Fix/Design better logo
    - [x] Preview for ReadMe
    - [x] Center on page

  - **General/QOL**
    - [x] Fix content centered in the middle of screen
    - [x] Working darkmode toggle
    - [x] Factor out Navbar into react component instead of on the index.html

  - [x] **Github pages**
    - [x] Github actions to automatically push to gh-pages branch
    - [x] Fix position of ball and particles
    - [x] Fix particle sizes --> not depending on screen size

  - [x] **Keyboard**
    - [x] Add some keyboard page with wasd 

  - [x] **Navbar & Menus**
    - [x] Navbar better style
    - [x] Icons instead of text