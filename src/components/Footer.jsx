import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-12 px-4 mt-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Keen<span className="text-[#EFAD44]">Keeper</span>
        </h2>

        <p className="max-w-md mx-auto text-sm text-gray-300 mb-8 px-4 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="mb-12">
          <h4 className="font-bold mb-4 text-lg uppercase tracking-widest">
            Social Links
          </h4>
          <div className="flex justify-center gap-4">
            <button className="bg-white p-3 cursor-pointer rounded-full text-[#244D3F] hover:scale-110 transition-transform shadow-lg">
              <FaInstagramSquare size={22} />
            </button>
            <button className="bg-white p-3 cursor-pointer rounded-full text-[#244D3F] hover:scale-110 transition-transform shadow-lg">
              <FaFacebookSquare size={22} />
            </button>
            <button className="bg-white p-3 cursor-pointer rounded-full text-[#244D3F] hover:scale-110 transition-transform shadow-lg">
              <FaXTwitter size={22} />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-500 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p className="md:order-1 font-medium">
            &copy; 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:order-2">
            <a href="#" className="hover:text-white transition-all">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-all">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-all">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
