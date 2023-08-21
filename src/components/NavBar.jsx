import React, { useState } from "react";

function NavBar() {
  const [nav, setnav] = useState(false);
  const arr = [
    {
      id: 1,
      link: "Profile",
    },
    {
      id: 2,
      link: "Experience",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Projects",
    },
    {
      id: 5,
      link: "Certificates",
    },
  ];
  return (
    // <>
    //   <ul className="w-full bg-blue-900 h-17 justify-evenly align-middle p-4 text-white hidden md:flex">
    //     {arr.map(({ id, link }) => (
    //       <li
    //         key={id}
    //         className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 px-6 py-2 rounded"
    //       >
    //         {link}
    //       </li>
    //     ))}
    //     <li className="md:hidden">
    //       <a href="" className="text-4xl">
    //         &#8801;
    //       </a>
    //     </li>
    //   </ul>
    // </>
    <nav className="w-full h-14 md:h-16 bg-blue-900 flex justify-end md:justify-center px-4 items-center md:px-4">
      {/* <div className="text-2xl text-white font-bold"> My Portfolio</div> */}
      <ul className="md:flex md:justify-evenly hidden font-semibold w-full text-white">
        {arr.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 px-6 py-2 rounded"
          >
            {link}
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <button onClick={() => setnav((nav) => !nav)}>
          {nav ? (
            <div className="text-6xl pt-6">&#735;</div>
          ) : (
            <div className="text-4xl ">&#8801;</div>
          )}
        </button>
      </div>

      {/* <ul className="flex flex-col justify-center">
        <li>home</li>
        <li>home</li>

        <li>home</li>
      </ul> */}
    </nav>
  );
}

export default NavBar;
