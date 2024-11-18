import { FocusCards } from "./ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Designing",
      src: "/design.jpg",
    },
    {
      title: "Consulting",
      src: "/consulting.jpg",
    },
    {
      title: "manufacturing",
      src: "/manufacturing.jpg",
    },
    {
      title: "delivery",
      src: "/delivery.jpg",
    },
    {
      title: "installation",
      src: "/installation.jpg",
    },
    {
      title: "customer service",
      src: "/customerservice.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
