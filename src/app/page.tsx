import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  return (
    <div className="center">
      <Link href="/about" className="top-right h1-3d">
      About
      </Link>
      <h1 className="type-in mb-2">StudyHub</h1>
      <Link href="/demo" className="h2-subtitle">
       continue to demo
      </Link>
      <h2 className="h2-subtitle"> sign in to google</h2>
    </div>
  );
}
