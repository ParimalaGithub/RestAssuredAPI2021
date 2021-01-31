$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user login into application with username\u003d\"Pari\" and password\u003d\"QA Test\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.user_is_on_landing_page()"
});
formatter.result({
  "duration": 123558800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pari",
      "offset": 43
    },
    {
      "val": "QA Test",
      "offset": 63
    }
  ],
  "location": "stepDefination1.user_login_into_application_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 1538900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination1.home_page_is_populated()"
});
formatter.result({
  "duration": 45500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefination1.cards_displayed_are(String)"
});
formatter.result({
  "duration": 110400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user login into application with username\u003d\"Parighgfjh\" and password\u003d\"QA Test\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination1.user_is_on_landing_page()"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parighgfjh",
      "offset": 43
    },
    {
      "val": "QA Test",
      "offset": 69
    }
  ],
  "location": "stepDefination1.user_login_into_application_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 66600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination1.home_page_is_populated()"
});
formatter.result({
  "duration": 16400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "stepDefination1.cards_displayed_are(String)"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
});