"use client"

import { motion } from "framer-motion"
import { ArrowRight, MoveRight } from "lucide-react"

export default function Screen2({ onNext }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden gap-8">

            {/* GIF */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex items-center justify-center"
            >
                <img loading="lazy" src="/gifs/2.gif" className="w-40" alt="blushing" />
            </motion.div>

            {/* Center text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, staggerChildren: 0.3 }}
                className="text-center space-y-6 flex flex-col justify-center"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-white leading-tight"
                >
                    Are you really ready to know...? 
                </motion.h1>
            </motion.div>

            {/* Bottom button */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="pb-8"
            >
                <button
                    onClick={onNext}
                    className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30  flex items-center gap-2"
                >
                    Show Me <MoveRight size={22} className="mb-0.5" />
                </button>
            </motion.div>
        </motion.div>
    )
}
