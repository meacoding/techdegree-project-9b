# Portfolio - Techdegree FEWD Project 9b

A single page portfolio for myself.

![portfolio screenshot](https://user-images.githubusercontent.com/16675876/59713480-8d8ae200-91dd-11e9-9ca8-8fc186ee7f86.jpg)

## Technologies and skills used 

+ HTML
+ CSS
+ JavaScript
+ jQuery
+ Adobe XD 

## Reason for creation
To build a portfolio—the final project of the Treehouse Techdegree FEWD program. 

## What I did
 It's a standard sectional single page website. I prototyped it in Adobe XD. The project information is displayed via modal overlays. The courses are inserted via $.getJSON. The contact form is inserted via iframe to prevent index.html refreshing upon PHP submit. 
 
## Backstory
 This portfolio exists because I was displeased with how my original portfolio was turning out—[here](https://github.com/meacoding/techdegree-project-9). I scrapped that project and started on this one. Since I have a Windows machine, I found Adobe XD as an alternative to Sketch for making prototypes. Like a kid in a candy store, I created the website you see with slight modifications.

An issue I ran into deals with fixed modal overlays on iOS. In the modal overlay, you had the ability to scroll the body underneath the modal even though it's styling was set to overflow: hidden. I shake my fist at you! This issue does not appear, to the best of my knowledge, on any other platform. The long scrolling of the body has been mitigated but a slight "glitch" still exists where if you hold and drag the top or bottom of the screen the page will refresh when on an iOS device using either Chrome or Safari. Good times. The user will only experience these if they are super awkwardly scrolling through the modal like I was trying to "break" it.

## License
None.
