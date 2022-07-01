import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const today = new Date();
  const currentDate = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const nextDate = today.getDate() + 1 + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  // current Day task management ************************
  const currentDayTask = (event) => {
    if (event.key === "Enter") {
        const addedTask = {
          todo: event.target.value,
          date: currentDate
        };

        const url = `http://localhost:5000/currentDay`;
        fetch(url, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(addedTask),
        })
          .then((res) => res.json())
          .then((data) => {
            event.target.value = "";
            alert("successfully added");
          });      
    }
  };

  // next Day task management ************************
  const nextDayTask = (event) => {
    if (event.key === "Enter") {
      const addedTask = {
        todo: event.target.value,
        date: nextDate
      };

      const url = `http://localhost:5000/nextDay`;
      fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(addedTask),
      })
        .then((res) => res.json())
        .then((data) => {
          event.target.value = "";
          alert("successfully added");
        });
    }
  };



  return (
    <>
      {/* Current date task management */}
      <div className="lg:p-24 lg:my-5 p-8 bg-gray-200">
        <h1 className="text-3xl text-green-500 my-4 text-center lg:text-left">
          Add your Task in Today
        </h1>

        <textarea
          onKeyPress={currentDayTask}
          className="textarea textarea-bordered h-24  w-full"
          name="textarea"
        ></textarea>

        <label className="text-orange-400">

          After completing your task just press enter key.
        </label>
      </div>
      <Link to='/todo'>
        <button className="btn btn-warning lg:w-72 w-full lg:ml-10 my-3 hover:bg-green-400 hover:border-green-400 " >See All To-Do List</button>
      </Link>
      {/* Next date task management */}
      <div className="lg:p-24 lg:mt-5 p-8 bg-gray-200">
        <h1 className="text-3xl text-green-500 my-4 text-center lg:text-left">
          Add your Task in {nextDate}
        </h1>

        <textarea
          onKeyPress={nextDayTask}
          className="textarea textarea-bordered h-24 w-full"
          name="textarea"
        ></textarea>

        <label className="text-orange-400">
          After completing your task just press enter key.
        </label>
      </div>

    </>
  );
};

export default Home;
