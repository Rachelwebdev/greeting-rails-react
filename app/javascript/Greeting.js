import React from 'react';
import { useSelector } from 'react-redux';

const Greetings = () => {
  const greetings = useSelector((state) => state.greeting.greetings);

  return (
    <>
      <h1>
        <h1>Random Greeting: </h1>
        <h2>{greetings.message}</h2>
      </h1>
    </>
  );
};

export default Greetings;
