# Engineering

On the surface pinball is a very simple game, but when you dig deeper you find an incredible number of systems that need to work together to create a fun experience. You have things like:

- A physics simulation that needs to resolve high speed collisions with a myriad of objects like flippers, pop bumpers, slingshots, kickers, spinner targets, etc.

- A light system that needs to control dozens of lights (in our case 86) to play fun animations and communicate things like missions, bonuses, special events, etc.

- A dot matrix display (DMD) that needs to render dozens of different animations.

- A sound system that needs to play both mechanical and electronic sounds to create an engaging experience.

The fact that pinball machines are built in real life feels like nothing short of a miracle after overcoming all the obstacles required to simulate one with software.

## Physics

When we first started working on this project we were using the Rapier 3D physics engine. We thought using a 3D engine would make it easy to handle things like ramps. You just create a collider for the ramp and allow the physics engine to roll the ball up and down the ramp.

As our scene grew more complex, we found that our pinball machine stopped feeling good on older mobile devices. The math required to do a 3D physics simulation was too much for those devices, especially when events like multiball were triggered.

At that point we made the hard decision to pivot to the Rapier 2D physics engine. We had to refactor a lot of code, but we knew it would be worth it in the end.

You might find this surprising. How does our ball go up and down ramps and get thrown by Shoppy if we are using a 2D physics engine?

To make that work we had to create a system of sensors that activate and deactivate colliders as the ball moves around. When the ball touches the entrance of a ramp, for example, all the colliders on the table get disabled except for the colliders of the ramp. When the ball touches the exit of a ramp we do the opposite. It's all a carefully orchestrated dance.

It was painful to pivot to 2D, but everything got better after that. Even with 6 balls on the table with continuous collision detection (CCD) enabled on them, our physics step is on average 0.2 milliseconds long, which leaves plenty of room for rendering fun things like confetti!

## Rendering

On the rendering side, this entire website is powered by Three.js and React-Three-Fiber (R3F). Three.js is an incredible render engine, and the composability added to it by R3F makes it easy to build any system you can dream up.

Most of the materials in our scene are MeshBasicMaterials because our lighting was baked in Blender. This is great for performance!

## State Management

For state management we use zustand, which is probably one of the best open source projects out there right now.

## Mini Games

One thing we are pretty proud of is the mini game system that's in our pinball machine. There are five different mini games and two special mini games that are triggered by live data.

When a user completes a mini game, it gets lowered into the ground and a new one rises. This is fast and fun, but there are lots of edge cases that we had to consider while building this. For example:

- What if there's a ball in the mini game area when you complete a mini game? We need to wait until it exits the area before doing the swap.

- Now what if you have 6 balls in play? Then we need to check that none of them are in the mini game area before doing the swap.

The ramifications are insane. Note how when a swap starts, we quickly raise a metal fence in front of the mini game area. That's for preventing you from messing around in there when a swap is happening!

## Personal Notes

Everyone on this team played Space Cadet pinball growing up in the 90s. A lot of us played it in the computer room of our elementary schools, but not one of us imagined that we would one day try to build a game like Space Cadet.

Building a pinball machine is both deeply humbling and deeply rewarding. It seemed so easy in the beginning.

We hope you enjoy playing it as much as we enjoyed building it.

With love,

The BFCM Live Globe Team
