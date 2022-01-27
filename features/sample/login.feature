Feature: The SwagLabs E commerce site
  
  Scenario Outline: user has to buy an item in the site

    Given user is on login page of SWAGLABS
    When  user login with his username and <password>
    And user is on shopping page and add an item to cart
    And user clicks on cart and checkout
    And user filled his <firstname> and <lastname> and <postalcode>
    And user checked his order and finish the order
    Then user should see the <message>

    Examples:
      | password | firstname | lastname | postalcode| message | 
      | secret_sauce | smith | steve | 54789 | THANK YOU FOR YOUR ORDER | 