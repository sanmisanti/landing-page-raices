'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface DynamicCursorProps {
  tool: 'hammer' | 'saw' | 'brush' | 'ruler' | 'chisel' | 'sandpaper' | 'default'
}

export default function DynamicCursor({ tool }: DynamicCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number }>>([])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => {
      setIsClicking(true)
      if (tool !== 'default') {
        // Add sawdust particles on click
        const newParticles = Array.from({ length: 5 }, (_, i) => ({
          id: Date.now() + i,
          x: mousePosition.x + (Math.random() - 0.5) * 20,
          y: mousePosition.y + (Math.random() - 0.5) * 20
        }))
        setParticles(prev => [...prev, ...newParticles])
        
        // Remove particles after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => !newParticles.some(np => np.id === p.id)))
        }, 1000)
      }
    }

    const handleMouseUp = () => setIsClicking(false)

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', updateMousePosition)
      window.addEventListener('mousedown', handleMouseDown)
      window.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', updateMousePosition)
        window.removeEventListener('mousedown', handleMouseDown)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [tool, mousePosition])

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  const getToolIcon = () => {
    switch (tool) {
      case 'hammer':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-800">
            <path d="M5 15L9 11L13 15L9 19L5 15Z" fill="currentColor"/>
            <path d="M15 8L19 4L20 5L16 9L15 8Z" fill="currentColor"/>
            <path d="M9 11L15 8L16 9L10 12L9 11Z" fill="currentColor"/>
          </svg>
        )
      case 'saw':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
            <path d="M20 4L4 20L5 21L21 5L20 4Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M6 6L8 8M10 10L12 12M14 14L16 16" stroke="currentColor" strokeWidth="1"/>
          </svg>
        )
      case 'brush':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-600">
            <rect x="8" y="2" width="8" height="12" fill="currentColor" rx="1"/>
            <path d="M8 14L10 20L14 20L16 14" fill="currentColor"/>
          </svg>
        )
      case 'ruler':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
            <rect x="2" y="10" width="20" height="4" fill="currentColor"/>
            <path d="M4 10V8M8 10V8M12 10V8M16 10V8M20 10V8" stroke="white" strokeWidth="1"/>
          </svg>
        )
      case 'chisel':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-stone-700">
            <path d="M18 6L6 18L4 16L16 4L18 6Z" fill="currentColor"/>
            <path d="M16 4L18 2L20 4L18 6L16 4Z" fill="currentColor"/>
          </svg>
        )
      case 'sandpaper':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-yellow-700">
            <rect x="4" y="6" width="16" height="12" fill="currentColor" rx="2"/>
            <circle cx="8" cy="10" r="1" fill="white" opacity="0.5"/>
            <circle cx="12" cy="12" r="1" fill="white" opacity="0.5"/>
            <circle cx="16" cy="14" r="1" fill="white" opacity="0.5"/>
            <circle cx="10" cy="15" r="1" fill="white" opacity="0.5"/>
          </svg>
        )
      default:
        return null
    }
  }

  if (tool === 'default') {
    return (
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-amber-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 800,
          mass: 0.5
        }}
      />
    )
  }

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isClicking ? 0.8 : 1,
          rotate: isClicking ? 10 : 0
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 800,
          mass: 0.5
        }}
      >
        <div className="relative">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-black/10">
            {getToolIcon()}
          </div>
          
          {/* Tool glow effect */}
          <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-sm -z-10 animate-pulse" />
        </div>
      </motion.div>

      {/* Sawdust Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed w-1 h-1 bg-amber-700/70 rounded-full pointer-events-none z-[9998]"
          initial={{
            x: particle.x,
            y: particle.y,
            scale: 1,
            opacity: 1
          }}
          animate={{
            x: particle.x + (Math.random() - 0.5) * 40,
            y: particle.y + Math.random() * 30 + 20,
            scale: 0,
            opacity: 0
          }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Cursor Trail */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-amber-400/30 rounded-full pointer-events-none z-[9997]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 400,
          mass: 0.8
        }}
      />
    </>
  )
}