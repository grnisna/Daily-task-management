import React, { useEffect, useState } from "react";

const Home = () => {
  const [todoTask, setTodoTask] = useState([]);

  // const today = new Date();
  // const date =
  //   today.getDate() +
  //   1 +
  //   "-" +
  //   (today.getMonth() + 1) +
  //   "-" +
  //   today.getFullYear();

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      const addedTask = {
        todo: event.target.value,
      };
      console.log(addedTask);

      const url = `http://localhost:5000/allTodo`;
      fetch(url, {
        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(addedTask)
      })
        .then(res => res.json())
        .then(data => {
          event.target.value='';
          alert("successfully added");
        });
    }
  };

  useEffect(() => {
    const url = `https://lower-toonie-73993.herokuapp.com/service`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTodoTask(data));
  }, []);

  return (
    <div className="lg:m-12 m-8">
      <h1 className="text-3xl text-green-500 my-4 text-center lg:text-left">
        Add your Task in Today
      </h1>
      <p>{todoTask.length}</p>
      <textarea
        onKeyPress={handleEnterKey}
        className="textarea textarea-bordered h-24 w-full"
        name="textarea"
      ></textarea>

      <label className="text-orange-400">
        {" "}
        After completing your task just press enter key.
      </label>
    </div>
  );
};

export default Home;
