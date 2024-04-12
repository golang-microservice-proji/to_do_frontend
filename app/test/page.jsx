"use client";
import { HoverEffect } from "../components/ui/car-hover-effect.tsx";
import React, { useState } from "react";
import Modal from "react-modal";

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
      zIndex: 1000,
    },
  };
  return (
    <div className="min-h-screen">
      <div className="text-5xl lg:text-9xl text-center p-3">just do it,</div>
      <div className="text-4xl text-center p-3">what are you waiting for?</div>
      <div className="max-w-6xl mx-auto px-8 z-10">
        <HoverEffect items={projects} />
      </div>
      <div className="max-w-6xl mx-auto px-8">
        {plus.map((item, index) => (
          <div key={index} onClick={toggleModal}>
            {item.title}
          </div>
        ))}
      </div>
      <Modal
        style={modalStyles}
        isOpen={modalOpen}
        onRequestClose={toggleModal}
        contentLabel="Add New To-Do Item"
      >
        <div className="modal-content z-0">
          <div className="text-4xl flex justify-center items-center p-4 m-3">
            Add New To-Do Item
          </div>
          <div className="grid grid-rows-3 gap-4 justify-items-center">
            <input type="text" placeholder=" Title" className="rounded-md" />
            <input
              type="text"
              placeholder="Description"
              className="rounded-md"
            />
            <input type="text" placeholder="Link" className="rounded-md" />
          </div>
          <div className="text-2xl flex justify-center items-center p-4 m-3">
            <button onClick={toggleModal}>Close</button>
          </div>
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
