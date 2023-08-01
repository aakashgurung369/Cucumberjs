Feature: Add todo list
  As a user 
  i want to add todo items in my todo app
  So that i can manage my task

  Scenario: Add a single todo list item 
    Given i user has opened the todo application
    When i add a single todo list with name "doHomework" 
    Then the todo "doHomework" should be listed in the todo application

  Scenario: Add multiple todo list items
    Given i have opened the todo application
    When i add a single todo list with name "doHomework"
    When i add a single todo list with name "writeFeatureFiles"
    When i add a single todo list with name "writeJscode"
    When i add a single todo list with name "writePhpCode"


