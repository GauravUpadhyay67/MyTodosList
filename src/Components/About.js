import React from 'react'

const About = () => {
  return (
    <div className='container'>
      <br />
        <h6>
    The MyTodosList website, built with React, is a simple to-do list app that enables users to manage tasks efficiently through a clean, responsive interface. It allows users to add, view, and delete tasks dynamically. React’s state management ensures that changes happen in real time, creating a seamless user experience. The website is structured with modular components: the main `App` component holds the list’s state, while `TodosList` displays the tasks, and `TodoItem` handles each task's details. This structure makes the app highly maintainable and easily extendable, offering a solid foundation for future enhancements, such as saving tasks in local storage or marking them as completed.
         </h6>
        <br />
        <hr />

        <h5>Key Features:</h5>
        <br />
        <ul>
          <li><b>Add New Tasks:</b> Easily add tasks by providing a title and description to keep track of what needs to be done.</li>
          <br />
          <li><b>Delete Tasks:</b> Remove tasks when they're complete, so you always see what’s still pending.</li>
          <br />
          <li><b>Persistent Storage:</b> All tasks are saved in your browser's local storage, so your list remains available even after refreshing or closing the app.</li>
          <br />
          <li><b>Modular Components:</b> Each feature, such as the header, footer, to-do list, and add-to-do form, is encapsulated in reusable React components, enhancing both functionality and maintainability.</li>
          <br />
          <li><b>Real-Time State Management:</b> MyTodosList uses React’s useState and useEffect hooks to dynamically update and manage the task list. The app instantly reflects changes when you add or delete tasks, providing a seamless and interactive user experience.</li>
          <br />
          <li><b>Reusable Components:</b> Built using React components like Header, Footer, AddTodo, and Todos, the app maintains clean code structure and separation of concerns. Each component is modular, which makes the application easy to extend and customize.</li>
        </ul>

        <br />
        <hr />
        <h5>Future Improvements:</h5>
        <br />
        <ul>
          <li><b>Editing Tasks:</b> Allowing users to edit tasks instead of just adding or deleting them.</li>
          <br />
          <li><b>Due Dates and Reminders:</b> Adding deadlines and notification reminders for time-sensitive tasks.</li>
          <br />
          <li><b>Task Prioritization:</b> Enabling users to mark tasks as high-priority or categorize them based on urgency.</li>
          <br />
          <li><b>Dark Mode:</b> A toggle for dark mode, making the app easier on the eyes in low-light environments.</li>
        </ul>
    </div>
  )
}

export default About
