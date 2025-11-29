## Boring Philosophy Stuff

Before this project I didn't actually know much about pinball. Like, obviously I knew what it was and had played them in some arcades and things, but over the course of designing this table we really went down the rabbit hole into a deep and charming world of people who really, really love the game.

As a designer, it's cool to sit with subcultures and try to learn what makes them tick. This is often to an aesthetic end - what sorts of things do you see often and how can you reproduce them - but those are just the outputs of the crowd; the real juicy part is the what and why and how did they end up with those outputs, what are their ethos and personalities and goals that arrived at those outputs.

Pinball, to me now, is this expression of fun through precision in the face of chaos. When you first play you're just trying to keep the ball alive long enough to not lose your quarters, but as you build up those basic skills you start to unlock more advanced ball control and realize that each table has a specific flow. Then you start realizing that different tables from different eras, companies and specific designers have different vibes - you start to have opinions and preferences for this machine or that one. You have a play style. You like and dislike certain elements.

To steal a term from the video gamers, pinball is often a game of executing _frame perfect_ shots. Some tables are more or less generous with this, but at the far end of the skill curve are shots that you can only make if you hit the flipper at exactly the right millisecond, and sometimes multiple times in a row. It's a game of random physics happening, sure, but it's also a game of being in explicit command of the timing. That alternating back and forth from control to chance is, I think, one of the most unique parts of pinball as a genre, and what gets that flow state going.

## What we wanted

One thing we all agreed on is we liked long flowing rallies over the more staccato bouncing of certain games. We didn't like ball locks, which interrupted the rhythm. We liked big ramps and the chance for a third flipper shot where you go all the way around the top and then - if you time it just right - the perfect place for the third flipper to get the otherwise inaccessible target.

But we also had an entirely virtual world to play with, so then it’s like: what else can we do with this?

## The Underground Era

So one of our first big twists is that the board originally went “underground” and there was a full second board that was hidden “inside” the machine cabinet. I was thinking we’d theme it appropriately, with the wires and gears and mechanisms lining the walls of the play space, dramatic spotlights lighting the middle, and some sort of WarioWare style minigame system where every time you ended up down there, we’d randomize from a collection of simple single-verb skills shot activities.

The first ones, just to have something to work with and hack on, were a soccer goal with a goalie that moved left and right, and a basketball hoop in the style of 1995’s Shaq Attack.

It was boring.

There were a few problems:

Having a full size table worth of play space to make a mini game’s worth of content was weird and felt wrong. You can contain it and lower the play area and make nice decorations around but then you have to ask why you’re bothering at all.
But also, we have to support mobile and VR which are platforms where it’s far worse or impossible to move the camera around arbitrarily.

So we went down that path for a week or two and ultimately cut it.

## The Modular Minigame

By that point, though, we liked the idea and had a list of a half dozen little minigames we were excited about, so we needed them to go somewhere.

If you click through the images in this folder you’ll see some sketches where I originally drew a carousel under the globe, and that was a throwaway idea for a second: the concept was that since we had the big globe there (and we always had the globe there, for obvious reasons) we could have a big turret that spun around it and contained a variety of targets to shoot.

What we learned is that it is actually pretty decent to just have a rotating cast of these single action goals. What we also learned is that having them all work at the same time and with a fixed position is tricky.

For example, the first sale tower is really tall - how would we make that rotate under the ramps and rails?

But if it came up through the floor…

And so the modular minigame was born.

It was convenient for many reasons, but a free bonus is that they were extremely easy to swap out, which is much easier than committing to permanent parts of your board during development. Permanency has implications for the model, but also light baking and materials and programming the logic for each thing together and so on. Modularity is lovely.

The other thing it gets us is unbinding the relative location of each mini - the milestone can interrupt minigame #1 and then when you finish that you can go to minigame #3 and then first sale happens and it goes back to #3, you beat that and go to #4 or #5 and so on.

## Ramps are Hard

Originally I had designed these intricate ramps that split into and out of each other, which is a real thing different tables do, but it was extremely tricky to program with our 2D physics engine because there was no real true gravity -- there was nothing to bring the balls downward (into the table).

I’m sure there would have been ways to overcome this in the programming, but the truth was it didn’t feel like it added much to the game.

The biggest change we made (and you’ll see this as a core shift in the renders and sketches) is adding the main central lane back into the pop bumper zone.

It changed the whole feel.

Originally that middle area was a few ramp entrances and some walls. We thought this was a pretty normal arrangement of elements from real tables, but for some reason it felt really claustrophobic and frustrating. Because that’s a natural place for your flipper shots to most often end up, and because it just sort of stopped you immediately, even with targets and things to hit the overwhelming feeling of that play wasn’t flow but rejection.

Opening it up into another path that took you up and away from the flippers was fresh air for this table.

The other ramps moved around, but they’re sort of just ramps either way. I like that we ended up with an easier one and a more difficult one naturally.

## Pinball as She is Played

The rest is pretty much just standard pinball.

We thought a lot in the beginning about being weird with it - sideways gravity, a left-right tilt system, the table rotates and the walls are the new floor, the underground part as mentioned above, etc etc.

But in the end, sometimes you just gotta make a normal thing really well.

I’m glad, now having spent hundreds of hours crafting (and as many play-testing it), that we went with a normal table.

It lets you obsess over the important bits instead of just trying to barely figure out the novelty bits.
