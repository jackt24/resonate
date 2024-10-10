
# Resonate Demo Project w/ Playwright & Azure 

A small demo project that performs the following:

* Contains a number of Cucumber/Playwright tests that check the basic functionality of https://www.resonate.com
* Whenever a change is made, these tests will run via GitHub Actions and produce a report to an Azure blob here. Change the report run section to the latest to get the report - 
    https://resonatestorage.blob.core.windows.net/$web/cucumber-run-11271442789-1/cucumber-report.html


Some possible next steps for the project are as follows:

* Implement a page object structure to improve scalability and maintainability
* Add screenshots and video recordings to test results
* Increase run efficiency and coverage by adding more platofrms and test parallelism/tags
* Link to an Azure test plan
* Set up notifications and alerts for something like Slack

### Installation

Before you begin, ensure you have the following installed on your machine:

* Node.js (version 14 or higher)
* npm (Node package manager)all

Note that I havent had time to check this yet! 

Clone the repo
   ```sh
   git clone https://github.com/jackt24/resonate.git
   ```
Install NPM packages
   ```sh
   npm install
   ```
Run tests
   ```sh
   npx cucumber.js
   ```
