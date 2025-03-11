import React, { useState, useEffect } from 'react';
// import Preloader from './Preloader';  
import { 
  Globe, 
  Truck, 
  Package, 
  Shield, 
  Flag, 
  Menu,
  X
} from 'lucide-react';
import logo from '../assets/images/dealo-logo.png';
import SearchComponent from './Search';

const Navbar = () => {
    const [isSolutionsExpanded, setIsSolutionsExpanded] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Effect to push content down when solutions menu expands
    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            setNavHeight(navbar.offsetHeight);
        }
    }, [isSolutionsExpanded]);

    // Handle menu expansion with transition delay
    const handleMenuEnter = () => {
        setIsTransitioning(true);
        setIsSolutionsExpanded(true);
    };

    const handleMenuLeave = () => {
        setIsSolutionsExpanded(false);
        // Keep transitioning state for duration of animation
        setTimeout(() => {
            setIsTransitioning(false);
        }, 300); // Match this with your transition duration
    };

    const solutions = [
        { href: "/trading-solutions", icon: Globe, text: "Trading Solutions" },
        { href: "/freight-forwarding-solutions", icon: Truck, text: "Freight Forwarding Solutions" },
        { href: "/clearance-solutions", icon: Package, text: "Clearance Solutions" },
        { href: "/cargo-insurance-solutions", icon: Shield, text: "Cargo Insurance Solutions" },
        { href: "/racing-solutions", icon: Flag, text: "Racing Solutions" },
    ];

      // const [isNavigating, setIsNavigating] = useState(false);
      // const router = useRouter();
    
      // const handleNavigation = (path) => {
      //   setIsNavigating(true);
      //   setTimeout(() => {
      //     router.push(path);
      //     setIsNavigating(false);
      //   }, 800); // Sync with preloader duration
      // };

    return (
        <>
        <nav className="navbar justify-center fixed w-full z-50 bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl transition-all duration-300">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="text-gray text-2xl font-bold">
                <a href='/'>
                  <img src={logo} alt="Logo" className="h-8" />
                </a>
              </div>
  
              {/* Desktop Menu */}
              <div className="hidden md:flex text-gray gap-6 justify-center flex-grow">
                <a href="/" className="hover:text-cyan-400 transition">
                  Home
                </a>
                <div
                  className="relative group"
                  onMouseEnter={handleMenuEnter}
                  onMouseLeave={handleMenuLeave}
                >
                  <button className="hover:text-cyan-400 transition">
                    Solutions
                  </button>
                </div>
                <a href="/dealo-tech" className="hover:text-cyan-400 transition">
                  Dealo Tech
                </a>
                <a href="/partnerships" className="hover:text-cyan-400 transition">
                  Partnerships
                </a>
              </div>
  
              {/* Search and Mobile Menu Button */}
              <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                  <SearchComponent />
                </div>
  
                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-gray hover:text-cyan-400 transition"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
  
            {/* Solutions Submenu - Desktop */}
            <div
              className={`
                absolute left-0 w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg
                transition-all duration-300 ease-in-out
                ${isSolutionsExpanded || isTransitioning ? "visible" : "invisible"}
                ${isSolutionsExpanded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
              `}
              style={{ top: "100%" }}
              onMouseEnter={handleMenuEnter} // Keep open when hovering over submenu
              onMouseLeave={handleMenuLeave} // Close when leaving submenu
            >
              <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-5 gap-4">
                  {solutions.map((solution) => (
                    <a
                      key={solution.href}
                      href={solution.href}
                      className="flex flex-col items-center p-4 hover:bg-cyan-400 hover:bg-opacity-20 transition rounded-lg"
                    >
                      <solution.icon className="h-6 w-6 mb-2" />
                      <p className="text-center text-sm">{solution.text}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>


                    {/* Mobile Menu */}
                    <div 
                        className={`
                            md:hidden fixed left-0 w-full bg-gray-200 bg-opacity-1 backdrop-filter backdrop-blur-lg
                            transition-all duration-300 ease-in-out
                            ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
                        `}
                        style={{ top: '100%' }}
                    >
                        <div className="container mx-auto px-4 py-4">
                            <div className="flex flex-col gap-4">
                                <a href="/" className="hover:text-cyan-400 transition py-2">Home</a>
                                <div className="flex flex-col gap-4">
                                    <p className="font-bold">Solutions</p>
                                    {solutions.map((solution) => (
                                        <a
                                            key={solution.href}
                                            href={solution.href}
                                            className="flex items-center gap-2 hover:text-cyan-400 transition pl-4"
                                        >
                                            <solution.icon className="h-4 w-4" />
                                            <span>{solution.text}</span>
                                        </a>
                                    ))}
                                </div>
                                <a href="/dealo-tech" className="hover:text-cyan-400 transition py-2">Dealo Tech</a>
                                <a href="/partnerships" className="hover:text-cyan-400 transition py-2">Partnerships</a>
                                
                                {/* Mobile Search */}
                                <div className="relative mt-4">
                                  <SearchComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
            {/* Spacer div to push content down when solutions menu is expanded */}
            <div 
                className="transition-all duration-300 ease-in-out" 
                style={{ 
                    height: isSolutionsExpanded ? navHeight + 200 : navHeight,
                    marginBottom: '1rem'
                }} 
            />
        </>
    );
};

export default Navbar;