import Feature from './Feature';
import Link from 'next/link';
const LearnMore = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 text-gray-800">
      <h1 className="text-5xl font-extrabold text-center mb-6 leading-tight text-gray-900">
        Why <span className="text-black">ripple</span>?
      </h1>

      <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto mb-16">
        The old bird has fallen silent. Ripple lets your voice carry further, louder, and freer — without the noise.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Feature
          emoji="🚫"
          title="No Algorithmic Chaos"
          description="Your feed is clean and linear — based on who you follow, not what keeps you addicted."
        />
        <Feature
          emoji="🔒"
          title="Privacy First"
          description="We don’t sell your data. Ripple is built for people, not for ads."
        />
        <Feature
          emoji="👥"
          title="Community Focused"
          description="Ripple isn’t about going viral — it’s about creating ripples through real conversations."
        />
        <Feature
          emoji="🛠️"
          title="Open & Transparent"
          description="Built in public. Powered by modern tech. Ripple is shaped by its community."
        />
        <Feature
          emoji="🚀"
          title="Modern Web Stack"
          description="Next.js, Tailwind CSS, TypeScript, Prisma, PostgreSQL. Fast. Secure. Open Source."
        />
        <Feature
          emoji="❤️"
          title="The Future is Ripple"
          description="Join us in reimagining what microblogging should feel like — authentic and truly yours."
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
        <Link href="/signin">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">Sign In</button>
        </Link>
        <Link href="/home">
          <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LearnMore;
