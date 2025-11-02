import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import PAV from "../assets/PAV logo.jpg"

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <a href="/" className="flex items-center">
            <img
              src={PAV}
              alt="PAV Logo"
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <Dropdown label="Home">
            <DropdownItem name="Home 01" href="/" />
            <DropdownItem name="Home 02" href="/index-2" />
            <DropdownItem name="Home 03" href="/index-3" />
          </Dropdown>

          <Dropdown label="Pages">
            <DropdownItem name="About Us" href="/about" />
            <DropdownItem name="Track Your Order" href="/order" />
            <DropdownItem name="Login" href="/login" />
            <DropdownItem name="Sign Up" href="/sign-up" />
            <DropdownItem name="Categories" href="/categories" />
            <DropdownItem name="Coming Soon" href="/coming-soon" />
            <DropdownItem name="Forget Password" href="/forgate-password" />
            <DropdownItem name="My Account" href="/my-account" />
            <DropdownItem name="FAQ" href="/faq" />
          </Dropdown>

          <Dropdown label="Shop">
            <DropdownItem name="Shop Grid" href="/shop-grid" />
            <DropdownItem name="Shop Left Sidebar" href="/shop-left-sidebar" />
            <DropdownItem name="Shop Right Sidebar" href="/shop-right-sidebar" />
            <DropdownItem name="Shop Cart" href="/shop-cart" />
            <DropdownItem name="Checkout" href="/checkout" />
          </Dropdown>

          <Dropdown label="Blog">
            <DropdownItem name="Blog Grid" href="/news-grid" />
            <DropdownItem name="Blog List" href="/news-list" />
            <DropdownItem name="Blog Details" href="/news-details" />
          </Dropdown>

          <a href="/contact" className="hover:text-green-600 transition">
            Contact Us
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden sm:flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <input
              type="text"
              placeholder="Search for Products..."
              className="bg-transparent outline-none px-2 text-sm"
            />
            <FaSearch className="text-gray-600" />
          </div>

          {/* Wishlist */}
          <button className="relative text-gray-700 hover:text-green-600">
            <FaHeart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1 rounded-full">
              4
            </span>
          </button>

          {/* Cart */}
          <div className="relative">
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              <FaShoppingBag className="text-xl" />
            </button>
            {cartOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border shadow-lg rounded-lg p-4">
                <h4 className="font-semibold text-gray-700 mb-2">Cart</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Android Phone</span>
                    <span>$118</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>MacBook Pro</span>
                    <span>$268</span>
                  </div>
                </div>
                <div className="flex justify-between mt-3 font-semibold">
                  <span>Total:</span>
                  <span>$386.00</span>
                </div>
                <a
                  href="/shop-cart"
                  className="block mt-3 bg-green-600 text-white text-center py-2 rounded-md hover:bg-green-500 transition"
                >
                  View Cart
                </a>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 hover:text-green-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-inner">
          <div className="flex flex-col p-4 space-y-3 text-gray-800 font-medium">
            <a href="/" className="hover:text-green-600">
              Home
            </a>
            <a href="/about" className="hover:text-green-600">
              About
            </a>
            <a href="/shop-grid" className="hover:text-green-600">
              Shop
            </a>
            <a href="/news-grid" className="hover:text-green-600">
              Blog
            </a>
            <a href="/contact" className="hover:text-green-600">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

// ---- Helper Components ----
interface DropdownProps {
  label: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ label, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center space-x-1 hover:text-green-600 transition">
        <span>{label}</span>
        <FaChevronDown size={12} />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 bg-white border shadow-md rounded-md w-48 z-50">
          <ul className="flex flex-col text-gray-700 text-sm">{children}</ul>
        </div>
      )}
    </div>
  );
};

interface DropdownItemProps {
  name: string;
  href: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ name, href }) => (
  <li>
    <a
      href={href}
      className="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition"
    >
      {name}
    </a>
  </li>
);

export default Navbar;
