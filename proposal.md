# Proposal

Requirements for the weekend

`1` An application name / concept
Coding Companion

Codewars is a great resource for practicing different coding languages and strategies, but I often forget approaches I've used in the past to solve problems and have to dig through all my unorganized solutions to find what I want. My app will let me tag these solutions by subject, so that I can more easily them.

`2` A repo for your project 2 (built from express_auth template)
did it!

`3` Wireframe for your app - (Lucidchart)

`4` An ERD with two models (minimum) > User + 1 Resource (one to many) - (Lucidchart)
Models
Name: user
Attributes: language: string

Name: solution
Attributes: name: string, link: string, description: text

Name: tag
Attributes: name: string

Name: solutionsTags [this will be a many-to-many table]
Attributes: solutionId: integer, tagId: integer

`5` Create (3-5) User Stories for the base user experience - ( [Reference](https://revelry.co/resources/development/user-stories-that-dont-suck/) )

Overview:
As a user, I want to tag my codewars solutions. For instance, I would like to group together all solutions that focus on arrays.

As a user, I want to assign multiple tags to a single solution.

As a user, I want to select a tag and see all solutions associated with that tag.

`6` Resource's Restful Routing table ( [Readme](https://romebell.gitbook.io/sei-412/node-express/00readme-1/01intro-to-express/00readme#restful-routing) )

GET /, homepage with all tags
POST /solutions, creates a new solution, then redirect back to GET /
GET /solutions/new, page with form for entering a new solution and tagging it
GET /solutions/:id, page with info on a specific solution
PUT /solutions/:id, update a specific solution
DELETE /solutions/:id, delete a specific solution
GET /tags, shows all tags
GET /tags/:id, shows a specific tag and all solutions associated with that tag

`7` Find API and test to see if you can get data ( _be able to print data in the console using Axios, Node-Fetch, and/or Postman_ )
https://dev.codewars.com/#code-challenges-api
https://www.codewars.com/users/leaderboard

tested with Axios and am able to get data back

'8' stretch goals
Toggle between languages
input multiple tags at once (comma separated list)
ability to add additional resources (both write in and as links)
add other codewars-like sites
can I access other solutions to a kata?
pull from leaderboard and pull katas according to CW tag
