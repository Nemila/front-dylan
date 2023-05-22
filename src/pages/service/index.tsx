import {
  HiCake,
  HiEnvelope,
  HiFilm,
  HiMapPin,
  HiMusicalNote,
  HiShoppingCart,
} from "react-icons/hi2";

const services = [
  {
    icon: <HiMapPin className="text-3xl" />,
    name: "Venue Selection",
    desc: "Je mange bien et vous",
  },
  {
    icon: <HiEnvelope className="text-3xl" />,
    name: "Invitation Card",
    desc: "Je mange bien et vous",
  },
  {
    icon: <HiMusicalNote className="text-3xl" />,
    name: "Entertainement",
    desc: "Je mange bien et vous",
  },
  {
    icon: <HiCake className="text-3xl" />,
    name: "Food And Drinks",
    desc: "Je mange bien et vous",
  },
  {
    icon: <HiFilm className="text-3xl" />,
    name: "Picture And Videos",
    desc: "Je mange bien et vous",
  },
  {
    icon: <HiShoppingCart className="text-3xl" />,
    name: "Custom Food",
    desc: "Je mange bien et vous",
  },
];

const page = () => {
  return (
    <main className="flex flex-grow p-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 text-center">
        <h2 className="text-4xl font-bold">
          Our <span className="text-green-500">Services</span>
        </h2>

        <div className="grid w-full grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              className="flex flex-col items-center justify-center gap-3 rounded-md bg-dark px-4 py-6 text-white shadow-sm"
              key={service.name}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
