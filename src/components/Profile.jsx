import React, { useEffect, useRef } from "react";
import Paarth from "../assets/paarth.png";
import { Typewriter } from "react-simple-typewriter";

function Profile() {
  //   const typewriterRef = useRef(null);

  //   useEffect(() => {
  //     const typewriter = typewriterRef.current;
  //     if (typewriter) {
  //       const instance = new Typewriter(typewriter, {
  //         strings: ["Fullstack Developer", "Software Engineer"],
  //         autostart: true,
  //         loop: true,
  //       });
  //       return () => {
  //         instance.stop();
  //       };
  //     }
  //   }, []);
  //   const typewriterRef = useRef(null);

  //   useEffect(() => {
  //     const typewriter = typewriterRef.current;
  //     if (typewriter) {
  //       const instance = new Typewriter(typewriter, {
  //         strings: [
  //           "Hello, World!",
  //           "Welcome to Typewriter Effect!",
  //           "This is a demo.",
  //         ],
  //         autoStart: true,
  //         loop: true,
  //       });

  //       return () => {
  //         instance.pause();
  //       };
  //     }
  //   }, []);

  return (
    <div name="home" className="h-screen w-full ">
      <div className="max-w-screen-6xl mx-auto flex flex-col md:flex-row items-center justify-evenly h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-6xl sm:text-7xl font-bold max-w-xl margin-block-start pb-6">
            Hey, I'm Srishti
          </h2>
          {/* <h2 className="text-3xl pb-4">I'm a</h2>
          <Typewriter
            className="text-3xl pb-4"
            onInit={(typewriter) => {
              typewriter
                .loop(0)
                .typeString("I'm a Fullstack Web Developer")
                .pauseFor(500)
                .deleteChars(23)
                .typeString("Software Engineer")
                .start();
            }}
          /> */}
          <h2 className="text-3xl pb-4">
            I'm a
            <span className="text-3xl pb-4">
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  " Fullstack Web Developer",
                  " Software Engineer",
                  " Coder",
                ]}
                loop={0}
                // cursor
                // cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="py-4 max-w-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure est
            sint pariatur corrupti. A voluptas neque quo dignissimos expedita
            obcaecati libero, iste voluptatum dolor ipsam. Iusto amet distinctio
            eius culpa laborum veritatis dolores sit quidem, quis officia,
            obcaecati, maiores et.
          </p>
          <div className="mt-3">
            <button className="rounded-lg bg-slate-600 py-3 text-white px-8">
              Resume
            </button>
          </div>
        </div>
        <div className="ml-14 w-72 md:w-[27rem] ">
          <img src={Paarth} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
