import React, { useState } from 'react';

function MyComponent(props) {
  // Using React state (count) and a function (setCount) to update it
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Accessing props passed from parent (e.g., props.name) */}
      <h2>Hello, {props.name}!</h2>
      
      <p>You clicked the button {count} times</p>
      
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default MyComponent;
