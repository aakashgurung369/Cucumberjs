Feature: Delete todo list
  As a user 
  I want to delete todo items in my todo app
  So that I can manage my task

    Scenario: delete todo list item 
    Given i user has opened the todo application
    And user added todo items with name "doHomework" 
    When i have deleted a single todo list with name "doHomework" 
    Then the todo "doHomework" should be removed in the todo application
