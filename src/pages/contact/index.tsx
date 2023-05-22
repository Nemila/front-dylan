import Image from "next/image";

const page = () => {
  return (
    <main className="flex flex-grow p-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8">
        <h2 className="text-4xl font-bold">
          Contact <span className="text-green-500">Us</span>
        </h2>

        <div className="grid w-full max-w-xl grid-cols-2 items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Name"
            className="rounded-md bg-dark px-4 py-2 text-white"
          />
          <input
            type="text"
            placeholder="Email"
            className="rounded-md bg-dark px-4 py-2 text-white"
          />
          <input
            type="text"
            placeholder="Number"
            className="rounded-md bg-dark px-4 py-2 text-white"
          />
          <input
            type="text"
            placeholder="Subject"
            className="rounded-md bg-dark px-4 py-2 text-white"
          />
          <textarea
            placeholder="Type here..."
            className="col-span-2 rounded-md bg-dark px-4 py-2 text-white"
          ></textarea>
          <button className="rounded-md bg-dark px-8 py-4 text-white">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
