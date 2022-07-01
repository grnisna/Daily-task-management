import React, { useEffect, useState } from 'react'

const Todo = () => {
  const [currentTask, setCurrentTask] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/currentDay`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrentTask(data));
  }, []);

  return (
    <div >
      <div >
        {
          currentTask.map(todayTask => <div>
            <h3 className='text-3xl'> {todayTask.date} </h3><br />
            <textarea 
            className='w-full h-14'
            value={todayTask.todo}
            ></textarea>
          </div>)
        }
      </div>
    </div>
  )
}

export default Todo
