import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900">
      <div className="relative h-full w-full overflow-hidden">
        <img
          src="./image.jpg"
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  );
}

export default App;
