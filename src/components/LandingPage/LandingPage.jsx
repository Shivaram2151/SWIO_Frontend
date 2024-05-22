import React, { useState } from "react";
import "../LandingPage/LandingPage.css";
import PaymentModal from "../PaymentModal"; // Changed import name
import Modal from "react-modal"; // Added Modal import

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold m-3 md:m-6">
        Vintage Career
      </div>
      <div className="bg-black text-white p-4 sm:p-6 md:p-8 lg:p-2 flex flex-col items-center justify-center ">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl max-w-5xl md:text-5xl font-bold mb-4 sm:mb-8">
            The ultimate gateway to your dream career.
          </h1>
          <p className="text-center mx-auto my-2 text-lg md:text-xl lg:text-2xl lg:max-w-3xl">
            JobFinder sits on your desktop, providing real-time updates and
            control over your job applications on LinkedIn &nbsp;
            <i className="fab fa-linkedin fa-lg" title="LinkedIn"></i>, Indeed,
            and Glassdoor
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-white m-4 text-black font-bold py-2 px-4 rounded-2xl shadow-md">
          Mac App Store
        </button>
        <button
          onClick={handleOpenModal}
          className="bg-transparent m-4 border border-white text-white font-bold py-2 px-4 rounded-2xl shadow-md"
        >
          Buy Directly &nbsp;
          <span className="bg-white text-black font-bold py-2 px-4 rounded-full shadow-md disabled: pointer-events-none">
            $455
          </span>
        </button>
      </div>
      <div className="text-center mt-5 text-sm md:text-sm lg:text-l max-w-sm mx-auto">
        No subscriptions. No in-app purchases. Requires macOS 11 Big Sur or
        later.
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-transparent text-center m-4 border border-white text-white font-bold py-2 px-4 rounded-2xl shadow-md">
          Discover new features and enhancements
        </button>
      </div>
      <div className="m-10 text-center text-blue-600">
        NEW IN{" "}
        <span className="rounded p-1 bg-blue-300 text-black "> 2.0 </span>
      </div>
      <div className="text-center m-3 font-bold text-xl md:text-2xl lg:text-3xl">
        Personalize Your Job Search. Unlimited Themes.
      </div>
      <div className="m-5 pr-40 pl-40 text-sm md:text-l lg:text-xl w-full text-center">
        JobFinder’s themes make customizing your job search experience
        effortless. Share your themes with colleagues and switch between
        unlimited designs with a simple double-click.
      </div>
      <div className="bg-blue-500 min-h-80 bg-rgb(34, 34, 34) rounded m-16 flex justify-evenly overflow-hidden">
        <div className="h-48 mt-14 -ml-52 mr-9 w-2/6 flex bg-white/10 backdrop-blur-sm p-1 rounded-xl shadow-md inline-block ">
          <img
            src="public/images/job2.jpg"
            alt="Placeholder image"
            className="rounded-lg ml-9 m-1"
          />
        </div>
        <div className="h-44 mt-14 w-2/6 flex bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md inline-block">
          <div className="w-1/3 mr-6 h-full">
            <img
              src="public/images/job1.jpg"
              alt="Placeholder image"
              className="rounded-lg object-fill mt-8"
            />
          </div>
          <div className="w-2/3 h-full">
            <h2 className="text-1xl font-bold mb-2">
              Software Engineer at Tech Solutions Inc.
            </h2>
            <p className="font-serif text-xs">
              Join our dynamic team as a Software Engineer. You will work on
              cutting-edge projects and collaborate with top industry
              professionals.
            </p>
          </div>
        </div>
        <div className="h-5/8 mt-10 mb-10 ml-11 mr-9 w-56 flex bg-white/10 backdrop-blur-sm p-1 rounded-xl shadow-md inline-block ">
          <img
            src="public/images/job3.jpg"
            alt="Placeholder image"
            className="rounded-lg m-1 object-center"
          />
        </div>
        <div className="h-5/8 mt-10 mb-10 ml-11 mr-9 w-56 flex bg-white/10 backdrop-blur-sm p-1 rounded-xl shadow-md inline-block ">
          <img
            src="public/images/job4.jpg"
            alt="Placeholder image"
            className="rounded-lg m-1 object-center"
          />
        </div>
      </div>
      <div className="flex">
        <div className="border bg-gray-800 m-7 w-1/2 rounded-lg border-none h-72 flex items-center">
          <div className="w-1/2">
            <div>
              <p className="m-6 mt-10 font-sans text-xl font-bold">
                Switch between job search themes with just a click.
              </p>
              <p className="m-6 font-sans">
                Modify the built-in themes or create your own using our
                extensive preferences.
              </p>
            </div>
          </div>
          <img
            src="public/images/job6.jpg"
            alt="Placeholder image"
            className="rounded-lg m-1 w-3/6 mr-5"
          />
        </div>

        <div className="h-44 w-1/2 m-7 h-72 flex bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md inline-block">
          <div className="w-1/3 mr-6 h-full">
            <img
              src="public/images/job5.jpg"
              alt="Job portal themes image"
              className="rounded-lg h-full w-full object-cover"
            />
          </div>
          <div className="w-2/3 h-full">
            <h2 className="text-1xl font-bold mb-2">
              Share and Install Themes
            </h2>
            <p className="font-serif text-xs mb-2">
              Export your customized job portal themes and share them with
              friends using the handy new Job Portal Theme file format.
            </p>
            <p className="font-serif text-xs mb-2">
              Install themes from anywhere with just a double-click or a simple
              drag and drop. Customize your job search experience effortlessly!
            </p>
            <ul className="list-disc list-inside">
              <li className="font-serif text-xs">
                Easily share your customized job portal look and feel
              </li>
              <li className="font-serif text-xs">
                Install themes with a double-click or drag and drop
              </li>
              <li className="font-serif text-xs">
                Customize your job search experience effortlessly
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center m-10">CUSTOMIZATION</div>
      <div>
        <p className="m-6 mt-10 font-sans text-4xl font-bold text-white text-center">
          Countless ways to customize.
        </p>
        <p className="m-6 font-sans text-white m-5 pr-40 pl-40 text-sm md:text-l lg:text-xl w-full text-center">
          Customization is at the core of the job portal experience — choose
          from any combination of job categories, locations, and preferences to
          find the perfect fit for your career.
        </p>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <PaymentModal onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default LandingPage;
