Feature: Registering a new user into the Mercury Tours

  Scenario: user is new to this site and have to register as a new user

    Given user is on home page
    When user is on registeration page
    And user enters his contact information
    And user enters his Mailing information
    And user enters his user information
    Then display the title of page

    
