import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/user/userSlice";

export default function Home() {
  const [fullName, setFullName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userName = useSelector(state => state.user.fullName);
  const firstName = userName.split(' ').at(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(fullName));
    navigate("/menu");
    setFullName("");
  };

  return (
    <section className="pt-20 home-section">
      <div className="intro-text-container w-[80%] mx-auto">
        <div className="mb-8">
          <h2 className="font-semibold  text-center text-[2rem]">
            The best pizza.
          </h2>
          <p className="font-semibold text-[1.6rem] text-center text-yellow-500 text">
            Straight out of the oven, straight to you.
          </p>
        </div>
        {!isLoggedIn ? (
          <div className="flex flex-col items-center gap-y-4 ">
            <p className="text-center text-[1rem]">
              {" "}
              👋 Welcome! Please start by telling us your name:
            </p>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your full name"
                className="w-64 px-4 py-2 transition-all duration-300 bg-white border-2 rounded-full outline-none focus-within:border-yellow-500 focus:w-72 placeholder:ps-2 placeholder:text-stone-500"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </form>
          </div>
        ) : (
          <div className="flex justify-center">
            <Link to="/menu" className="px-4 py-2 tracking-widest bg-yellow-500 rounded-full">
              CONTINUE ORDERING, {firstName.toUpperCase()}
            </Link>
          </div>
        )}

        {fullName && !isLoggedIn &&(
          <form onClick={handleSubmit} className="flex justify-center">
            <button  className="px-4 py-2 mt-4 bg-yellow-500 rounded-full">
              Start Ordering
            </button>
          </form>
        )}
      </div>

      <Link to="/menu">Menu</Link>
    </section>
  );
}
