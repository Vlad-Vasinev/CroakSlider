# Croak Popup(JavaScript popup)💻

## This project is using:
- HTML: basic html-layout 💡
- CSS: slider's styling 💡
- JS: slider's logic 💡

## Features:
- keyboard control (left/right) 💡
- custom left/right buttons control 💡
- slide click control 💡
- swipe control (mobile only) 💡

# Let's get started

1. Add following attribute
```
data-el
```
to your desirable slider elements

2. Fill your slider element with img:
```
<img src="slider/mantella-1.jpg" data-el>
```
2. Video(img inside div as a preview)
```
<div data-el data-video-el data-src-webm="slider/escape.webm" data-src-mp4="slider/escape.mp4">
  <img src="slider/mantella-2.jpg">
</div>
```
2. Video(you can use img and put **data-video-el** to specify video element):
```
<img src="slider/mantella-33.jpg" data-el data-video-el data-src-webm="slider/escape.webm" data-src-mp4="slider/escape.mp4">
```
3. Add **left**/**right** buttons for navigation:
```
<button class="stories-prev"></button>
<button class="stories-next"></button>
```
4. Add the "marker" to your HTML, it allows Croak to count slides properly
```
<hr class="marker">
```

5. Your basic HTML-markdown should look like this:
```
<hr class="marker">
<div data-croak-container>
  <button class="stories-prev"></button>
  <button class="stories-next"></button>
  <div data-el data-video-el data-src-webm="slider/escape.webm" data-src-mp4="slider/escape.mp4">
    <img src="slider/mantella-1.jpg">
  </div>
  <img src="slider/mantella-2.jpg" data-el>
  <img src="slider/mantella-33.jpg" data-el data-video-el data-src-webm="slider/escape.webm" data-src-mp4="slider/escape.mp4">
</div>
```

6. Create basic slider essence:
```
let frog22 = new croakSlider({
  stories: {
    DOMElement: "div[data-croak-container]",
    customGap: {
      customGapValue: 160
    },
    customScale: {
      customScaleValue: 1.25
    },
    customOpacity: {
      customOpacityValue: 0.95
    }
  },
});
```

7. use 
- customGapValue
- customScaleValue
- customOpacityValue 
in order to set **gap** between slides, **scale** of slides and **opacity** of the background respectively

# How does it work?

- the main logic hides behind getDistanceStories function, it takes 2 parametres: current element aka as "el"
and galleri wrapper, aka as "storiesGallery"
- simply put, the function counts the distance between the marker and the element's distance from the right screen corner

- whole function's code: 
```
function getDistanceStories(el, galleriEssence) {
  let elRight = el.getBoundingClientRect().right
  let markerRight = document.querySelector('.marker').getBoundingClientRect().left
  let distanceCheck = markerRight - elRight

  galleriEssence.style.transform = `translateX(${distanceCheck + galleriEssence.getBoundingClientRect().left + (el.getBoundingClientRect().width / 2)}px) translateY(-50%)`
}
```
# Code Examples:

- 
- 
- 
