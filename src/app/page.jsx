"use client"

import LyricsScreen from "@/components/LyricsScreen"
import Music from "@/components/Music"
import { motion, AnimatePresence } from "framer-motion"
import Screen1 from "@/components/Screen1"
import Screen2 from "@/components/Screen2"
import { useState } from "react"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(1)
  const [musicStarted, setMusicStarted] = useState(false)

  return (
    <div className="min-h-screen bg-black bg-gradient-to-tr from-purple-950/80 via-black to-pink-950/70">

      <AnimatePresence mode="wait">
        {currentScreen === 1 && <Screen1 key="screen1" onNext={() => setCurrentScreen(2)} />}
        {currentScreen === 2 && <Screen2 key="screen2" onNext={() => {
          setCurrentScreen(3)
          setMusicStarted(true)
        }} />}
        {currentScreen === 3 && <LyricsScreen key="screen3" />}
      </AnimatePresence>

      <Music shouldPlay={musicStarted} />

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="fixed bottom-4 right-4 text-sm text-white/40 pointer-events-none z-50">
        @anujbuilds
      </motion.div>
    </div>
  )
}
