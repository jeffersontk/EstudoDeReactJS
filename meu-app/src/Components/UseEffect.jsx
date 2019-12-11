import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [title, setTitle] = useState("Test React");

  useEffect(() => {
    document.title = title;
  }, [title]);

  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
      <input type="text" value={title} onChange={handleChange} />
    </div>
  );
};

export default UseEffect;
