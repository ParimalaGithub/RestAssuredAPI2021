Feature: Application login

Scenario: Home page default login

Given user is on landing page
When user login into application with username="Pari" and password="QA Test"
Then home page is populated
And Cards displayed are "true"

Scenario: Home page default login
Given user is on landing page
When user login into application with username="Parighgfjh" and password="QA Test"
Then home page is populated
And Cards displayed are "false"