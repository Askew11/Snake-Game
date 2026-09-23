# Snake Game

A classic Snake game built with [p5.js](https://p5js.org/). Eat the food to grow, and don't run into the walls or yourself. The snake speeds up with every bite. Works on desktop and phones.

**Play it live:** https://jamaribenologa.com/snake/

## How to Run

No build step or dependencies to install. It's plain HTML/CSS/JS, and the p5.js library is included in the repo.

1. Clone or download this repository.
2. Open `index.html` in a browser, **or** serve it locally (e.g. with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension).

## Controls

| Input | Action |
| --- | --- |
| Arrow keys / WASD | Steer (an arrow key also starts the game) |
| Space or P | Start / pause / resume |
| R | Restart |
| Swipe on the board | Steer on phones and tablets |
| On-screen arrows | Steer on touch devices |
| Tap the board | Start, resume, or play again |

The game pauses on its own if you switch tabs or windows.

## How It Works

- The board is a fixed 20×20 grid scaled to fit the screen, so scores are comparable on any device.
- Movement runs on a fixed time step, independent of frame rate. The snake starts at 7 moves per second and gains 0.4 per food, up to 18.
- Turns go into a small queue checked against the last queued direction, so pressing two keys quickly (e.g. Up then Left while moving right) turns cleanly instead of reversing the snake into itself.
- The snake can move into the cell its tail is leaving, as in classic Snake. Food only spawns on empty cells, and filling the board wins the game.
- Your best score is saved in the browser with `localStorage`.
- Colors follow your system's light or dark mode.

## Tech Stack

- HTML / CSS / JavaScript
- [p5.js](https://p5js.org/) for canvas rendering and the game loop
