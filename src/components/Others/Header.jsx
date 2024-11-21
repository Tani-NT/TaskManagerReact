import { useState, useEffect } from "react";

const Header = (props) => {
  const [username, setUsername] = useState('admin'); 

  useEffect(() => {
    if (props.data && props.data.name) {
      setUsername(props.data.name);
    } else {
      setUsername('admin');
    }
  }, [props.data]); 

  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-[1.4vw] font-medium">
        Hello, <br />
        <span className="text-[2vw] font-semibold">{username} 👋</span>
      </h1>
      <button
        onClick={logoutUser}
        className="text-[1.5vw] bg-red-600 font-semibold px-2 py-1 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
