import Link from "next/link";

export default function Demo() {
    return (
        <div className="center">
        <h1 className="h1-3d">Demo Page</h1>
        <nav>
        <Link href="/"className="text-blue-500">
        Go back to Home
        </Link>
        </nav>
        

      </div>


    );
}