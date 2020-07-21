Feature: Validation of menus on Whatfix homepage
 
Scenario: Webpage validation
Given Application should be launched on browser
Then Verify the tile of the webpage

Scenario: Customers link validation
Given User is on homepage
When User click on Customers link
Then User is navigate to the Customers webpage

Scenario: Pricing link validation
Given User is on Customers page
When User click on Pricing link
Then User is navigate to the Pricing webpage

Scenario: Partners link validation
Given User is on Pricing page
When User click on Partners link
Then User is navigate to the Partners webpage

Scenario: Resources link validation
Given User is on Partners page
When User click on Resources link
Then User is navigate to the Resources webpage
