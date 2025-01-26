"use client";

import Link from "next/link";
import { useState, FormEvent} from "react";
import axios from 'axios';

export default function Demo() {
    const [location, setLocation] = useState('');
    const [locationType, setLocationType] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:8000/api/process/', { location, locationType });
        setResponse(res.data);
      } catch (error){
        console.error(error);
      }
    };

    return (
        <div className="center">
        <h1 className="h1-3d">Demo Page</h1>
        <nav>
        <Link href="/"className="text-blue-500">
        Go back to Home
        </Link>
        </nav>
        <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter Location"
                    required
                />
                <input
                    type="text"
                    value={locationType}
                    onChange={(e) => setLocationType(e.target.value)}
                    placeholder="Where Will You Be Studying?"
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {response && (
                <div>
                    <h2>Results:</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        

      </div>


    );
}