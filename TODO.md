# TIMERS
## ADDING A TIMER TO EACH TODO
function TIMER(durationFromTodo) {
   cosnt newInterval = use setInterval(callBackFN (durationFromTodo) {
    durationFromTodo -= 1
    if ( durantionFromTodo === 0 ) {
      then do something else like make a sound / send an alert to add time or check as complete
    }
    clearInterval(newInterval)
  }, 1000)
}
will need a start, pause buttons
[what is clicked when completed]

from here that data needs to be stored somewhere to be able to be referred back
to for a progress report type print out
-GREEN if it was completed early or +RED if it took more time
should have the name of the task as well

# STORING THE STATE IN THE LIST
the list is able to capture the state and start an over arching timer.
this would need the same logic as above,
OR 
maybe their is a button when you hover over the timer that will allow you to pause the current timer
what happens when you start another todo while you're in the middle of one timer??

## should be able to input text for the title of the list (group)
an input without a submit button?
