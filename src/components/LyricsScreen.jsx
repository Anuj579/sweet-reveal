"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Heart, Sparkles, Star } from "lucide-react"
import { useState, useEffect } from "react"

export default function LyricsScreen() {
    const lyrics = [
        "Tu haseen tera naam haseen ae",
        "Tere ishq da jaam haseen ae",
        "Eh be-matlabi zindagi",
        "Jado di tere naam haseen ae",
    ]

    const [currentLyric, setCurrentLyric] = useState(0)
    const [showLyric, setShowLyric] = useState(true)
    const [finished, setFinished] = useState(false)
    const elements = [
        { Icon: Heart, color: "text-pink-400", size: "w-4 h-4" },
        { Icon: Star, color: "text-yellow-300", size: "w-3 h-3" },
        { Icon: Sparkles, color: "text-purple-300", size: "w-3 h-3" },
    ]

    const [floatingItems, setFloatingItems] = useState([])
    const [stars, setStars] = useState([])

    useEffect(() => {
        const width = window.innerWidth

        const items = Array.from({ length: 10 }).map((_, i) => ({
            x: Math.random() * width,
            delay: Math.random() * 10,
            duration: Math.random() * 6 + 8,
            Element: elements[i % elements.length],
        }))
        setFloatingItems(items)

        const twinkles = Array.from({ length: 20 }).map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: Math.random() * 2,
            duration: Math.random() * 4 + 3,
        }))
        setStars(twinkles)
    }, [])

    useEffect(() => {
        if (currentLyric >= lyrics.length) {
            setFinished(true)
            return
        }

        const interval = setInterval(() => {
            setShowLyric(false)
            setTimeout(() => {
                setCurrentLyric((prev) => prev + 1)
                setShowLyric(true)
            }, 500)
        }, 2100)

        return () => clearInterval(interval)
    }, [currentLyric])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut" }}
            className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">

            {/* Floating elements */}
            <div className="fixed inset-0 pointer-events-none ">
                {floatingItems.map(({ x, delay, duration, Element }, i) => (
                    <motion.div
                        key={i}
                        className="absolute opacity-25"
                        initial={{ x, y: window.innerHeight + 50, opacity: 0 }}
                        animate={{
                            y: -100,
                            x: Math.random() * window.innerWidth,
                            rotate: [0, 360],
                            opacity: [0, 0.3, 0],
                        }}
                        transition={{
                            duration,
                            delay,
                            repeat: Infinity,
                            ease: "easeOut",
                        }}
                    >
                        <Element.Icon className={`${Element.color} ${Element.size} fill-current`} />
                    </motion.div>
                ))}

                {stars.map(({ left, top, delay, duration }, i) => (
                    <motion.div
                        key={`star-${i}`}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                        style={{ left, top }}
                        animate={{ opacity: [0, 0.6, 0], scale: [0, 1, 0] }}
                        transition={{ duration, delay, repeat: Infinity }}
                    />
                ))}
            </div>

            {/* Lyrics container */}
            <div className="text-center z-10 max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                    {showLyric && currentLyric < lyrics.length && (
                        <motion.h1
                            key={currentLyric}
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -50, scale: 0.8 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-wide will-change-transform"
                            style={{
                                textShadow:
                                    "0 0 20px rgba(255,255,255,0.35), 0 0 40px rgba(255,192,203,0.25)"

                            }}
                        >
                            {lyrics[currentLyric]}
                        </motion.h1>
                    )}
                </AnimatePresence>
            </div>

            {/* Ending Heartbeat Overlay */}
            {finished && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 flex flex-col gap-6 items-center justify-center pointer-events-none "
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                    >
                        <img src="/gifs/3.gif" className="w-60" alt="flower" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                        className="text-3xl md:text-4xl font-semibold px-4 text-center">
                        For My Haseen Girl❤️
                    </motion.h2>
                </motion.div>
            )}
        </motion.div>
    )
}
