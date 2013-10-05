# Uber Code Session: Food Trucks

By Jordan Feldstein - jfeldstein@gmail.com

## Tech Choices

Mimosa (http://mimosa.io) bundles a lot of tech that I enjoy leaning on, and is built for speed-to-coding. Seemed like a good fit for bootstrapping an interview type problem. 

Ive never used Mimosa, or all these tools bundled in this way. Total exploration of a new toolkit. 

I chose to implement this project with: 

* Express backend
* Stylus (never used before, but recommended by Mimosa team, so why not.)
* Handlebars client side templates (I'm more familiar with underscore and mustache templates, but again, why not try something new)
* Jade server-side templates (Never seen this before, but it was recommened)

## Assumptions

* Someone else is going to make a better API for returning the right data. I'm just dumping a static JSON file for now.

## Plan
  √ Render a map
  √ Plot data points on map
  √ Change pin to look like a truck
  √ Center map on a given address
  √ Allow user to enter their own address
  - Support for geolocation (if browser supports)
  √ Sign up for "new truck" notifications (gather emails)
  - Invite someone for lunch (virality)

## Hiccups

The only issue I ran into was at the very end, when pushing to Heroku. Had to Procfile etc. 

Also, gmaps and bootstrap didn't like being compiled through bower/requirejs. I didn't feel like debugging the issue with all new tools, so I just included them statically in the HTML for the purpose of this demo. 

# Results

The app is live at http://uberfoodtrucks.herokuapp.com/

A repo is on github at https://github.com/jfeldstein/coding-challenge-tools

There's a lot of code, most of which is Mimosa boilerplate. My code lives in /assets/javascripts/ and /routes/. (I hope that helps make reviewing my work easier on whoever's looking at this)

Thanks for taking the time to read my code. Questions? Email jfeldstein@gmail.com