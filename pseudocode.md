# Todo List

## Funtionality
I want to have a to do list that I  can view what items I have on my agenda, be able to digitally cross them off, and see what items are left. I want to be able to defer to the list to see what items are still undone at any time. I want to see the number of items still left to complete. I want a button that will uncheck all the items completed for a fresh list.

### Components
page/ app


#### infoCard - Template.

M. Input to handle adding items to todo list <form>, create [array] to handle items.
onclick event when submitted pushes to array.

V. Submit info <input>, list of items to complete.[], poopulates it Items, adds to {list}.

C. submit <button>, onClickHandler, should populate to items [array]. send to update view.


#### Buttons to mark items done.
M. clickable tiles, or <button>s to make all items added to the todo list clickable to mark off.

V. possible on hover effect, needs to change when a button or tile is clicked. Needs to show items marked off.

C. onlick event handler, move items to archive, cross them out.


#### Reset button
M.

V.

C. button to reset list unmark all the done items to rest the list of undone items.
onclick = {list=0}

#### toDo, Completed, and all "tabs"
filter bar / fitler by vlue
bootstrap - list group