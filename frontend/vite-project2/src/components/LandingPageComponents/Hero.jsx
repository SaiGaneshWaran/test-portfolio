import Typewriter from "typewriter-effect";
import DashboardImg from "../assets/DashboardImage.png";

function Hero() {
  return (
    <div className="max-h-screen h-screen bg-gray-900 flex justify-center items-center flex-col">
      <div className="text-center text-4xl text-white mb-8 md:mt-4 mx-4 md:mx-8">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Innovastruct can <span class='text-primary'>help building bridge between client and constructor</span>"
              )
              .pauseFor(1000)
              .deleteChars(15)
              .typeString("<span class='text-primary'>visualize data</span>")
              .pauseFor(1000)
              .deleteChars(14)
              .typeString("<span class='text-primary'>manage timetables</span>")
              .pauseFor(1000)
              .deleteChars(17)
              .typeString(
                "<span class='text-primary'>support multiple user roles</span>"
              )
              .start();
          }}
        />
      </div>
      <img
        src={DashboardImg}
        alt="Dashboard"
        className="mb-4 md:mt-8 mx-4 md:mx-8 shadow-2xl rounded-lg"
        width={900}
      />
    </div>
  );
}

export default Hero;