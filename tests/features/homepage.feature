Feature: Comprehensive Website Check for Resonate

  # Scenario 1: Check that the homepage title is correct
  Scenario: Verify the title of the homepage
    Given I navigate to "https://www.resonate.tech"
    When I get the page title
    Then the page title should be "Resonate | Traffic Management Control | Traffic Disruption Management"

  # Scenario 2: Verify the presence of the "Contact Us" link in the navigation
  Scenario: Check for the presence of the Contact Us link in the navbar
    Given I navigate to "https://www.resonate.tech"
    When I check for the "Say Hello" link
    Then I should see the "Say Hello" link on the page

  # Scenario 3: Verify that the Contact Us page has the form
  Scenario: Check the form exists on the Contact Us page
    Given I navigate to "https://www.resonate.tech/ui/content/contactus.aspx"
    Then I should see a form on the page

  # Scenario 4: Check that important content is visible on the homepage
  Scenario: Validate homepage content for the "Welcome" message
    Given I navigate to "https://www.resonate.tech/ui/content/contactus.aspx"
    Then I should see the text "Say Hello" on the page

  # Scenario 5: Check that the footer contains the correct copyright information
  Scenario: Verify footer contains copyright information
    Given I navigate to "https://www.resonate.tech"
    Then the footer should contain "© Copyright 2024 Resonate Group Limited. All rights reserved."

  # Scenario 6: Validate all images load on the homepage
  Scenario: Check all images load correctly on the homepage
    Given I navigate to "https://www.resonate.tech"
    When I check all images
    Then all images should be loaded correctly

  # Scenario 7: Test if the website is responsive for mobile screens
  Scenario: Verify the website is responsive on mobile devices
    Given I open the website on a mobile device
    Then the layout should be adjusted for a mobile view

  # Scenario 8: Check for broken links on the homepage
#   Scenario: Verify there are no broken links on the homepage
#     Given I navigate to "https://www.resonate.tech"
#     When I check for broken links
#     Then there should be no broken links