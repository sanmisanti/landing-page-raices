'use client'

import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-stone-200/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L8 8h8l-4-6Z" fill="currentColor" opacity="0.8" />
                  <path d="M12 6L7 12h10l-5-6Z" fill="currentColor" opacity="0.6" />
                  <path d="M12 10L6 16h12l-6-6Z" fill="currentColor" opacity="0.4" />
                  <path d="M12 16v6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg leading-none ${
                  isScrolled ? 'text-stone-800' : 'text-stone-800'
                }`}>
                  Raíces
                </span>
                <span className={`text-sm leading-none ${
                  isScrolled ? 'text-amber-600' : 'text-amber-700'
                }`}>
                  y Diseño
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {[
                { name: 'Home', href: '/', description: 'Metamorfosis Material' },
                { name: 'Museo', href: '/museo', description: 'Galería Interactiva' },
                { name: 'Workshop', href: '/workshop', description: 'Taller Digital' },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link 
                    href={item.href}
                    className="group relative flex flex-col items-center"
                  >
                    <span className={`font-medium transition-colors duration-200 ${
                      isScrolled 
                        ? 'text-stone-700 group-hover:text-amber-600' 
                        : 'text-stone-800 group-hover:text-amber-700'
                    }`}>
                      {item.name}
                    </span>
                    <span className={`text-xs transition-colors duration-200 ${
                      isScrolled 
                        ? 'text-stone-500 group-hover:text-amber-500' 
                        : 'text-stone-600 group-hover:text-amber-600'
                    }`}>
                      {item.description}
                    </span>
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      layoutId="navbar-underline"
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className={`${
                  isScrolled
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-amber-600/90 hover:bg-amber-700 text-white border border-amber-500/50 hover:border-amber-600'
                } transition-all duration-300 rounded-full px-6 shadow-lg backdrop-blur-sm`}
              >
                Contacto
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${
                isScrolled ? 'text-stone-700' : 'text-stone-700'
              } hover:bg-white/10`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden fixed top-16 left-0 right-0 z-40 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-stone-200/50' 
            : 'bg-white/90 backdrop-blur-md'
        }`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: 'hidden' }}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {[
              { name: 'Home', href: '/', description: 'Metamorfosis Material' },
              { name: 'Museo', href: '/museo', description: 'Galería Interactiva' },
              { name: 'Workshop', href: '/workshop', description: 'Taller Digital' },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-3 hover:bg-amber-50 rounded-lg transition-colors duration-200"
                >
                  <span className="text-stone-800 font-medium block">
                    {item.name}
                  </span>
                  <span className="text-stone-600 text-sm">
                    {item.description}
                  </span>
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="pt-2"
            >
              <Button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white transition-all duration-300 rounded-full shadow-lg"
              >
                Contacto
              </Button>
            </motion.div>
          </nav>
        </div>
      </motion.div>
    </motion.nav>
  )
}