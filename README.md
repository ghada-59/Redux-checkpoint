# Redux ToDo Checkpoint

A ready-to-run React ToDo application using Redux Toolkit and React-Redux.

## Features

- Add a task
- Mark a task as done / not done
- Filter tasks: All, Done, Not done
- Edit a task description
- Delete a task (extra feature)
- Each task has `id`, `description`, and `isDone`

## Run the project

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

To create a production build:

```bash
npm run build
```

## Project structure

```text
src/
├── app/
│   └── store.js
├── components/
│   ├── Addtask.jsx
│   ├── ListTask.jsx
│   └── Task.jsx
├── features/
│   └── tasks/
│       └── tasksSlice.js
├── App.jsx
├── main.jsx
└── index.css
```

## Redux concepts used

- **Store:** `src/app/store.js` holds the global Redux state.
- **Slice:** `src/features/tasks/tasksSlice.js` defines the task state and reducer logic.
- **Actions:** `addTask`, `toggleTask`, `editTask`, and `deleteTask` describe state changes.
- **Provider:** `src/main.jsx` makes the store available to React components.
- **useDispatch:** components dispatch actions to update the store.
- **useSelector:** `ListTask` reads the current tasks from the store.

The filter selection and in-progress edit form text are local UI state. The actual task data is stored globally in Redux.
