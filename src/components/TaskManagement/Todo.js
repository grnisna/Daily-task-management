import React, { useEffect, useState } from 'react'

const Todo = () => {
  const [currentTask, setCurrentTask] = useState([]);
  const [nextTask, setNextTask] = useState([]);
  console.log(nextTask);

  useEffect(() => {
    const url = `http://localhost:5000/currentDay`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrentTask(data));
  }, []);

  useEffect(() => {
    const url = `http://localhost:5000/nextDay`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNextTask(data));
  }, []);

  return (
    <div >
      <div className="lg:p-24 lg:mt-5 p-8 bg-gray-200">
        {
          currentTask.map(todayTask => <div>
            <h3 className='text-3xl'>To-day Task:( {todayTask.date} ) </h3>
            <textarea 
            className='w-full h-24 p-3'
            value={todayTask.todo}
            ></textarea>
          </div>)
        }
      </div>

      <div className="lg:p-24 lg:mt-5 p-8 bg-gray-200">
        {
          nextTask.map(nextDayTask => <div>
            <h3 className='text-3xl'>Next-Day Task:( {nextDayTask.date} ) </h3>
            <textarea 
            className='w-full h-24 p-3'
            value={nextDayTask.todo}
            ></textarea>
          </div>)
        }
      </div>
    </div>
  )
}

export default Todo
