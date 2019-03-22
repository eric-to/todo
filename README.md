This project was bootstrapped using create-react-app. No 3rd party libraries were used in the making of this to-do list.

Assumptions:
  1. Clicking ADD NEW should change the text to an input field; I assumed we could use two input fields
  and require that the user fills both in to indicate the todo task description and deadline / time.
  2. I assumed the to-do list has a min-height since in the design png, the to-do list has a lot of empty
  space at the bottom despite there being only 5 tasks.
  3. I assumed we didn't need to implementing edit and delete for to-do items, although I can if you'd like
  me to.
  4. I used sessionStorage to store information on the app as session data. I purposely did this because we
  weren't asked to implement delete. Closing the tab and opening up a new one will reset the to-do list. This
  makes testing a little easier.
  5. I assumed the time for tasks did not need to be formatted. I left it up to the user to use whatever time
  format they desire (24 hr, 12 hr, etc.).