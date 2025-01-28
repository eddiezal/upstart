import React from 'react';
import WordSwap from '../components/ui/WordSwap';

export default function Home() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold text-green-600">
          Tailwind CSS is working!
        </h1>
        <WordSwap />
      </div>
    );
  }
