export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo_831_442.svg"
            alt="Silverio.NL"
            className="h-10 w-auto"
          />
        </a>

        {/* NAVIGATION */}
        {/*
        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </nav>
        */}
        {/* MOBILE MENU BUTTON */}
        {/*
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        */}
      </div>
    </header>
  );
}
