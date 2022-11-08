# Cypress E2E Testing 

This repo is meant to showcase e2e tests for example app (https://todomvc-app-for-testing.surge.sh/) using Cypress.io.
- Page Object Model design pattern is used, it increases readability of code and is much easier to manage.


## Setup
1- Open terminal and change the current working directory to the location where you want the cloned directory.

2- Clone this repo by running the following command.
`git clone git@github.com:RadwaSaleh/e2e-automation-cypress.git`

3- Install NPM `npm install`

## Run Tests
- Run all tests interactively.
  `npm cypress`

- Run all tests non-interactively.
  `npm test`

- Run just one test file
- `npm test --spec "cypress/integration/todomvc-actions.spec.js"`

- Run and generate a report
  `npm test-and-report`
