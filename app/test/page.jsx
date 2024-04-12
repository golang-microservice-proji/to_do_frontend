"use client";
import { HoverEffect } from "../components/ui/car-hover-effect.tsx";
import React, { useState } from "react";
import Modal from "react-modal";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation.tsx";

export default function CardHoverEffectDemo() {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  const plus = [
    {
      title: "click to add a new to do item",
      description: "",
      link: "",
    },
  ];
  const modalStyles = {
    overlay: {
      zIndex: 100000,
    },
  };

  return (
    <div className="min-h-screen">
      <BackgroundGradientAnimation>
        <div className="text-5xl lg:text-9xl mt-2 text-center p-3">
          just do it,
        </div>
        <div className="text-4xl text-center p-3">
          what are you waiting for?
        </div>
        <div className="max-w-6xl mx-auto px-8 z-10">
          <HoverEffect items={projects} />
        </div>
        <div className="max-w-6xl mx-auto px-8 z-10">
          {plus.map((item, index) => (
            <div key={index} onClick={toggleModal}>
              <HoverEffect items={plus} />
            </div>
          ))}
        </div>
      </BackgroundGradientAnimation>
      <Modal
        style={modalStyles}
        isOpen={modalOpen}
        onRequestClose={toggleModal}
        contentLabel="Add New To-Do Item"
        className="min-h-screen m-8 backdrop-blur-sm bg-black/50 "
      >
        <div className="modal-content z-0 ">
          <div className="text-4xl flex justify-center items-center p-4 m-3 font-bold">
            Add New To-Do Item
          </div>
          <div className="grid grid-rows-3 gap-4 justify-items-center">
            <input
              type="text"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title"
            />
            <input
              type="text"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Description"
            />
            <input
              type="text"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Link"
            />
          </div>
        </div>
        <div className="text-2xl flex justify-center items-center p-4 m-3">
          <button
            type="button"
            onClick={toggleModal}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export const projects = [
  // fetch from db
  {
    title: "go mini proji",
    description: "micro-services bull",
    link: "",
  },
  {
    title: "os proji",
    description: "ptree impli? seriously?!!",
    link: "",
  },
  {
    title: "cn proji",
    description: "network network, full network",
    link: "https://google.com",
  },
];
