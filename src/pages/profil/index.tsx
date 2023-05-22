import Image from "next/image";

const page = () => {
  return (
    <main className="flex flex-grow p-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center gap-2">
          <div className="aspect-square w-20 overflow-hidden rounded-md">
            <Image
              src="https://avatars.githubusercontent.com/u/63666318?v=4"
              width={500}
              height={500}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3>Lamine Diamoutene</h3>
            <p>Pridila.2006@gmail.com</p>
            <p>Tunis, Tunisie</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
