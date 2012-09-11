CloudSpokes: Magical Disappearing Salesforce Button with jQuery
=============
http://www.cloudspokes.com/challenges/1363

Challenge
-------

### Overview

Salesforce.com allows you to add custom buttons to a standard page layout. We want to dynamically show and hide buttons on standard Salesforce.com page layouts based upon the current value of a picklist field.

### Challenge Requirements

Create a custom button and add it to the Account page layout. Create a new picklist on the Account object with the values "High" and "Low". When the records displays (not the edit screen), if the value of the picklist is "High" show the button. If the value of the picklist is "Low" then hide the button.

Instructions
-------

1. Setup your Account page layout to include the custom button and the custom picklist ("High" / "Low") field. It doesn't matter what you name the button or field, what matters is what you label them (see Step 5). The label is what JQuery will use to find these objects when it scrapes the page.

2. Go to Setup -> App Setup -> Home -> Home Page Components and "New" Custom Component.

3. Name your custom component (remember it for Step 5) and make it an "HTML Area" type. Click "Next"

4. Select "Narrow (Left) Column" for the Component Position, then select the "Show HTML" option at the top right of the "Formatting Controls" box.

5. Open the ComponentCode.js file and set the following variables to match the name of your custom component, the label of your button, and the label of your picklist field.
```apex
   /* Set your sidebar component, button, and picklist field labels here */
   var customComponentName = 'Disappearing Button';
   var buttonLabel = 'Do Something Cool';
   var picklistLabel = 'My Picklist';
```
6. Copy and paste the contents of the file into the "Formatting Controls" box and "Save" your custom component.

7. Go to Setup -> App Setup -> Home -> Home Page Layouts and edit your default layout.

8. Check off your new custom component in "Select Narrow Components to Show" and click "Next."

9. It doesn't matter what position you place the component. Just click "Save" to save the default.

10. Go to Setup -> App Setup -> User Interface and make sure that "Show Custom Sidebar Components" is checked off.

And you should be all set. Go to an account page and change the picklist value to "High" to see the button disappear. 
