const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              RTG Templates
            </h3>
            <p className="text-gray-400 mb-4 max-w-md text-sm">
              Generate production-ready applications with your favorite tools in
              seconds.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Docs
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Resources</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Examples
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-xs">
            © 2024 RTG Templates. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-400 text-xs mt-2 md:mt-0">
            Made with ❤️ for developers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
