# CodersCamp 2020 - TypeScript Project

**The project was created as part of the 6th edition of the [CodersCamp](https://coderscamp.pl/) course.**

## Table of Contests
- [The project team](#the-project-team)
- [General info](#general-info)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Organization of work](#organization-of-work)

## The project team
Authors of this project are course participants who worked under the supervision of an experienced mentor.

**Authors:**
-	[Kamila Grusza](https://github.com/kami3la) (Tech Lead)
-	[Konrad Mierzejewski](https://github.com/KonradMierzejewski) (Product Owner)
-	[Weronika Brzeczkowska-Kuzianik](https://github.com/brzeczkowskaw) (Development Manager)
-   [Dominik Puchała](https://github.com/Suegro24) 
-	[Jędrzej Ratajczak](https://github.com/Mrozelek)
-	[Adrianna Krupa](https://github.com/adax10/)

**Mentor:** [Filip Kuca](https://github.com/ruljin) 

## General info
Our project is an application to play dice game Yahtzee. This is a browser based web application, so no installation is required. 

<img src="https://res.cloudinary.com/ded5al291/image/upload/v1613255903/CodersCamp%20projekt%201%2C%20wizytowka/screen1_nbgwoc.jpg">
<img src="https://res.cloudinary.com/ded5al291/image/upload/v1613256346/CodersCamp%20projekt%201%2C%20wizytowka/screen2_wbntmo.jpg">

## Features
-	The main page contains short introdution to a game and menu panel directing to Scores, Rules, Game and Authors.
-	Before each game, player is taken to the Settings, where he/she can choose how many playes would play. Maximum is four players and minimum is two players. Player can choose to play with a friends (on the same computer) or with computer. Computer has three difficulty levels - Easy/Hard/Medium. Player can mix game with computer/friends in the way he/she wants. Additionaly, in Settings panel player can choose style of the game - Classic Game / Play with Pirates / Beat the Dragon, which affects boardgame style and colours of dices. 
-	Once the game starts, players and computers take they draws according to the rules of Yahtzee game. After each round, player can choose the categhory where the points from the draw would be assigned. Additionaly, scores table shows with green color which cathegory player can choose to gain points (green color) or which cathegory would get 0 points (red color). Points are being counted by the application.
-   During the game, when player clicks on the cathegory name the modal with a tip will be shown. While clicking on the points in any cathegory, modal with hostory of draws in this round will be shown. 
-   After 13 rounds game ends and player can see a modal with all players and their points as well as the history of the game. 
-	After finishing the game, the player's score is summed up and all players scores are put it the ranking. It can be seen in Scores section. 
-   Rules section shows rules of Yahtzee game. 
-   Authors sections shows names of developers working on the application.
-	The application is responsive, so there is an option to display it on tablets and phones.

## Technologies
-	HTML
-	SCSS
-	TypeScript
-   Webpack
-   BEM methodology
-   Jest
-   ESLint
-   StyleLint
-   HTML-validate
-   Scrum
-   Figma
-   Jira

## Setup
#### Demo
To view a demo click [here](https://ruljin.github.io/CodersCamp2020.Project.TypeScript.YahtzeeGame/).

#### Getting started
If you want to run the application on the local machine, follow these steps:
1. Clone down this repo
2. Install dependencies with the command: `yarn install`
3. Start development server `yarn start` 

The application will be available at `localhost:8080/#`

#### Running tests
To run the application tests, follow these steps:
1. Install dependencies with the command: `yarn install` (if you haven't already done so before)
2. Run the tests by running the command: `yarn test`

## Organization of work
#### Figma
Using Figma, we created our own prototype of a user interface adapted to Desktop, and also made a version adapted to display on Phones. All designs can be viewed [here](https://www.figma.com/file/czhzeRuTVklI2ugoefPEbG/Yahtzee?node-id=0%3A1).
#### Jira
We also used Jira, where we organized all our work. More precisely, we shared responsibilities for each sprint, exchanged comments and approved our tasks.