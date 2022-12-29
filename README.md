# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

I will include screenshots in my GitHub repository.

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This project was quite the test of my layout skills, and it gave me quite a bit of difficulty. I attempted using Grid at first for the desktop layout, but I just couldn't get it to work the way I wanted it to. It was ignoring some of my commands, and I couldn't figure out why. So I ended up using Flex, which I'm definitely more comfortable with.

I had to do some thinking about the JavaScript, but I figured it out pretty quickly.

The thing that really frustrated me was the positioning of the Social popup for the desktop layout. I could position it where it needed to be at 1440px, but as the screen shrank it moved. It seemed like I would have to make a media query for every possible screen size to have it appear where I wanted it to. I ended up just putting it somewhere in the middle and letting it be. I really want to see if it's possible to have it move more responsively with the screen size instead of me needing to make dozens of media queries.

I did learn how to make triangles with CSS, which was fun. I also turned the share arrow SVG white for the active state, which I think was useful to learn since I couldn't find a white one that looked exactly like the gray one.

### Continued development

This project has shown me that I have so many gaps in my Grid and positioning knowledge for the bigger layouts, so I'm going to crack down and study those topics more in-depth. I'm also going to continue working on bigger layouts and on my JavaScript.

### Useful resources

- [Resource 1](https://www.youtube.com/watch?v=2JMGG_8T-vY&list=PL4cUxeGkcC9hudKGi5o5UiWuTAGbxiLTh&index=9) - I watched this video to refresh my knowledge on absolute positioning. I'm planning on watching the entire CSS Positioning PLaylist by this YouTuber.
- [Resource 2](https://css-tricks.com/snippets/css/css-triangle/) - This is where I got the CSS for my triangle that I used for the popup bubble.
- [Resource ](https://css-tricks.com/snippets/css/complete-guide-grid/) - I used this as a reference while I tried to figure out the Grid layout. Unfortunately I gave up and used Flex after a while of struggling.


## Author

- GitHub - [@nevercanon](https://www.github.com)
- Frontend Mentor - [@nevercanon](https://www.frontendmentor.io/profile/nevercanon)

## Acknowledgments

Thanks to Kevin Powell and the Net Ninja for their wonderful education videos, and to everyone out there who provides free resources to help me in my learning journey.
