import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen p-2">
      <div>
        <h3>CPRG 306 Assignments</h3>

        <li>
          <Link href="./week-2">Week 2 </Link>
        </li>
        <li>
          <Link href="./week-3">Week 3</Link>
        </li>
        <li>
          <Link href="./week-4">Week 4</Link>
        </li>
      </div>
    </main>
  );
}
