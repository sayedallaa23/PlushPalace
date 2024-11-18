import React from "react";
import { MostSellingCards } from "./MostSellingCards";

function MostSelling() {
  const pexel = (id) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
  const images = [
    // Front
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: "/img1_.jpg" },
    // Back
    { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: "/img2_.jpg" },
    { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: "/img3_.jpg" },
    // Left
    {
      position: [-1.75, 0, 0.25],
      rotation: [0, Math.PI / 2.5, 0],
      url: "/img4_.jpg",
    },
    {
      position: [-2.15, 0, 1.5],
      rotation: [0, Math.PI / 2.5, 0],
      url: "/img5_.jpg",
    },
    {
      position: [-2, 0, 2.75],
      rotation: [0, Math.PI / 2.5, 0],
      url: "/img6_.jpg",
    },
    // Right
    {
      position: [1.75, 0, 0.25],
      rotation: [0, -Math.PI / 2.5, 0],
      url: "/img7_.jpg",
    },
    {
      position: [2.15, 0, 1.5],
      rotation: [0, -Math.PI / 2.5, 0],
      url: "/img8_.jpg",
    },
    {
      position: [2, 0, 2.75],
      rotation: [0, -Math.PI / 2.5, 0],
      url: "/img9_.jpg",
    },
  ];
  return (
    <div>
      <MostSellingCards images={images} />
    </div>
  );
}

export default MostSelling;
