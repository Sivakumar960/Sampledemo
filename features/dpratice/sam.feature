Feature: Testing a site

    Scenario Outline: User want to test a sample site
       Given user is on login page
       When User enters <username> and <password>
       Then User should see the message
    Examples:
        | username | password | 
        | tomsmith | SuperSecretPassword! |