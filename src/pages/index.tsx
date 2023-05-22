import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-grow p-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-8">
        <div className="flex-1">
          <Image
            className="h-full w-full rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
            alt=""
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col items-start gap-2">
          <h1 className="text-4xl font-bold uppercase">
            It is time to celebrate!
          </h1>

          <h3 className="text-2xl ">
            The Best{" "}
            <span className="font-medium text-green-500">Event Organizer</span>
          </h3>

          <Link
            href="/contact"
            className="rounded-md bg-dark px-8 py-4 text-white no-underline"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
