import { Link } from "react-router-dom";

export default function Home() {
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
        <div className="flex flex-col items-center gap-y-4 ">
          <p className="text-center text-[1rem]"> 👋 Welcome! Please start by telling us your name:</p>
          <input
            type="text"
            placeholder="Your full name"
            className="w-64 px-2 py-2 transition-all duration-300 bg-white border-2 rounded-full outline-none focus:w-72 placeholder:ps-2 placeholder:text-stone-500"
          />
        </div>
      </div>

      <Link to="/menu">Menu</Link>
    </section>
  );
}
