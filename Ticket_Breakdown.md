# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket #1: Update Database to Save Custom IDs in Agents Table

In order to give Facilities the ability to save their own custom ids, we must alter our Agents table to include a custom-id attribute that we can utilize when running`getShiftsByFacility`. Please also update any database queries to include the newly added custom-id value when applicable. Once complete, Facilities should be able to update their current Agents to include custom ids as well as provide a custom id to any new agent they add.

The estimated time to complete the ticket is three days.

### Ticket #2: Refactor `getShiftsByFacility` to Include the Custom IDs from Agents

Please refactor the `getShiftsByFacility` function to include the Agents custom-id values when returning out all shifts worked during specified quarter. You must also refactor unit tests associated with function, ensuring that the refactor does not break the functionality. 

The estimated time to complete the ticket is two days.

### Ticket #3: Refactor `generateReport` to Allow Generating by Custom IDs

Please refactor the `generateReport` function to allow Facilities to generate reports based on Agents custom ids. In order to complete this, you must refactor the function to take in the list of shifts and optional custom id values. If a custom id is present, the function should return only the shift reports from the specified agent(s). If there is no custom id value passed in, the function should return all of the shifts. Please also refactor unit tests associated with function, ensuring that the refactor does not break the functionality.

The estimated time to complete the ticket is two days.
