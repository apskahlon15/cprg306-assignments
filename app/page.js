import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen p-2 bg-red-200">
      <center className="text-black font-bold flex flex-col items-center h-3/4 w-1/3 bg-red-300 ">
        <h3 className="py-5">CPRG 306 Assignments</h3>
        <ul className="">
          <li className="my-2 p-5 w-15 h-15 bg-red-200 rounded-full hover:bg-red-700 hover:text-white">
            <Link href="./week-2">Week 2</Link>
          </li>
          <li className="my-2 p-5 w-15 h-15 bg-red-200 rounded-full hover:bg-red-700 hover:text-white">
            <Link href="./week-3">Week 3</Link>
          </li>
          <li className="my-2 p-5 w-15 h-15 bg-red-200 rounded-full hover:bg-red-700 hover:text-white">
            <Link href="./week-4">Week 4</Link>
          </li>
          <li className="my-2 p-5 w-15 h-15 bg-red-200 rounded-full hover:bg-red-700 hover:text-white">
            <Link href="./week-5">Week 5</Link>
          </li>
          <li className="my-2 p-5 w-15 h-15 bg-red-200 rounded-full hover:bg-red-700 hover:text-white">
            <Link href="./week-6">Week 6</Link>
          </li>
          <li className="my-2 p-5 w-15 h-15 bg-red-200 rounded-full hover:bg-red-700 hover:text-white">
            <Link href="./week-7">Week 7</Link>
          </li>
        </ul>
      </center>
    </main>
  );
}
