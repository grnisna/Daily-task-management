import React from "react";

const Home = () => {
  const today = new Date();
  const date =
    today.getDate() +
    1 +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getFullYear();

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      const inputValue = event.target.value;
      console.log(inputValue);
    }
  };

  return (
    <div className="lg:m-12 m-8">

      <h1 className="text-3xl text-green-500 my-4 text-center lg:text-left">Add your Task in Today</h1>

      <textarea
        onKeyPress={handleEnterKey}
        className="textarea textarea-bordered h-24 w-full"
        name="textarea"
      ></textarea>

      <label className="text-orange-400"> After completing your task just press enter key.</label>

    </div>
  );
};

export default Home;
