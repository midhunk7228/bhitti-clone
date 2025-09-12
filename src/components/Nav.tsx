import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="border-y border-gray-300 p-2">
      <ul className="flex justify-center space-x-4">
        <li><Link href="#" className="hover:underline">News</Link></li>
        <li><Link href="#" className="hover:underline">Culture</Link></li>
        <li><Link href="#" className="hover:underline">Books & Fiction</Link></li>
        <li><Link href="#" className="hover:underline">Humor</Link></li>
        <li><Link href="/magazine" className="hover:underline">Magazine</Link></li>
      </ul>
    </nav>
  );
}