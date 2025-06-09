import Link from 'next/link';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-24">
      <div className="flex flex-col gap-6 max-w-2xl text-center">
        <Link href="/" className="mb-6">
          <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight">ripple</h1>
        </Link>

        <p className="text-2xl font-semibold text-gray-700">The new age tweeter...</p>
        <p className="text-gray-600 text-lg">The bird is dead anyway.</p>
        <p className="text-gray-600 text-lg">The thread is already broken.</p>
        <p className="text-gray-600 text-lg">Why not switch to the better one?</p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <Link href="/signup">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">Sign Up</button>
          </Link>
          <Link href="/home">
            <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 transition">
              Get Started
            </button>
          </Link>
          <Link href="/learn-more">
            <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
