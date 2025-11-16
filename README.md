# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
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

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](./screencapture-localhost-3000-2025-11-16-21_58_23.png)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Tailwind

### What I learned


# CSS Grid Layout Implementation Notes

## Grid Template Columns with Custom Minmax

I learned how to use `grid-template-columns` with custom `minmax` values, which let me control exactly how wide the left and right cards can grow on desktop.

## Desktop Layout Structure

The desktop layout uses three grid columns:

- **Left card**
- **A tiny middle "spacer" column**
- **Right card**

### Grid Stacking Technique

To get the overlapping effect on desktop, I used a grid-stacking technique:

- The left card spans from column 1 to column 3
- The right card sits on columns 2-4

```css
/* Desktop grid configuration */
sm:grid-cols-[minmax(250px,300px)_12px_minmax(250px,300px)]
sm:grid-rows-1
md:grid-cols-[minmax(150px,325px)_14px_minmax(150px,325px)]
lg:grid-cols-[350px_15px_350px]
```

I created a reusable Score component to keep the layout clean and avoid repeating markup for each category item.

```jsx
<>
  <div className="justify-self-start text-xl sm:text-lg">
    <div className="grid grid-cols-[auto_auto] items-center justify-start gap-3">
      <div className="relative h-[18px] w-[18px]">
        <Image
          src={`${item.icon}`}
          alt="reaction-icon"
          fill={true}
          className="object-cover"
        ></Image>
      </div>
      <div className="font-bold">{item.category}</div>
    </div>
  </div>
  <div className="font- justify-self-end text-xl sm:text-lg">
    <span className="text-Neutral-dark-gray-blue">{item.score}</span>{" "}
    <span className="text-Neutral-dark-gray-blue/50">/ 100</span>
  </div>
</>
```
### I also leanerd about conditional rendering with tailwind. so the text color and the background colors render according to the category name.

    ```jsx
    {data.map((item, i) => (

  <div
    key={i}
    className={`grid grid-cols-2 rounded-xl p-3 sm:p-2 ${
      item.category === "Reaction" &&
      "bg-Primary-light-red/8 text-Primary-light-red"
    } ${
      item.category === "Memory" &&
      "bg-Primary-orangey-yellow/8 text-Primary-orangey-yellow"
    } ${
      item.category === "Verbal" &&
      "bg-Primary-green-teal/8 text-Primary-green-teal"
    } ${
      item.category === "Visual" &&
      "bg-Primary-cobalt-blue/8 text-Primary-cobalt-blue"
    }`}
  >
    <Score item={item} />
  </div>
))}

```

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
```
