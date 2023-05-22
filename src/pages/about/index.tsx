import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex flex-grow p-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-14">
        <h2 className="text-4xl font-bold">
          About <span className="text-green-500">Us</span>
        </h2>

        <div className="flex items-center justify-center gap-8">
          <div className="aspect-video flex-1 items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose flex-1">
            <h2>We will give a very special celebration for you</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              alias, eligendi eius iure odit repudiandae excepturi voluptate
              quis, eveniet est vitae veniam autem nihil, minus harum? Harum
              nobis facere et.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores aspernatur exercitationem magni aut eius debitis ex
              iusto repellat id sed eveniet, obcaecati dignissimos omnis porro
              laboriosam! Qui doloribus eius repellat.
            </p>
            <Link
              href="/contact"
              className="rounded-md bg-dark px-8 py-4 text-white no-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
