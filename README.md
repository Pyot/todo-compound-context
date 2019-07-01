# ToDo App - ReactJS

### How to start
In the project directory:
```sh
$ npm install
$ npm start
```
or 
```sh
$ yarn
$ npm start
```

### Branches

The ToDo project has got 5 branches:

1. `features/app-logic` - where you can see whole logic without too much styling

2. `features/app-design` - styling has been added on this branch. I've chosen the [reactstrap](https://reactstrap.github.io/ "reactstrap") for it. 

3. `fatures/drag-and-drop` - drag and drop functionality has been added on that branch. I selected to that a [react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc "react-sortable-hoc")

4. `features/local-storage` - todo array is added to the browser local storage. 

5. `master` - where you can see the most updated app.

### Features

![](http://skx.ovh/img/todo-info.png)

- User can add todo items - To add a task, please use input **(1)**, to acknowledge press an enter or an add button.
- Todo can be edited - To edit please double click on task name **(2)**.
- Todo can be removed - To remove todo please click on the red remove button **(3)**.
- User can mark todos as “complete” - To change it to completed please click on the checkbox **(4)**.
- User can see filtered todos: all, complete, incomplete - Please click on **(5)** Show only drop-down list on the navigation bar and select the correct checkbox.
- User can search through todos - Please type searched phrase inside input **(6)**.
- Todos reordering by Drag and drop - Please click on the selected item and drag it to the new position. It only available when all tasks are visible. All filters and searches have to be deactivated. User sees a notification **(7)** is he allow to drag and drop an item.
- Data is kept in local storage - after first run data is kept in the browser local storage.
- User sees a time when the task has been added **(8)**.

### Design Pattern

To create the todo app, I decided to use ***the Compound Component Pattern*** with ***Context API***.

More material about it you can see [here](https://github.com/pandao/editor.md "here"). Ryan Florence Explain it without Context API instead he use ***React.cloneElement***. The Context API is more efficient and it makes the implementation of the pattern more readable. 

### Browser supported
- Chrome
