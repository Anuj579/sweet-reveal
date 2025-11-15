"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Screen1({ onNext }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden gap-8">

            {/* GIF */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex items-center justify-center"
            >
                <img src="/gifs/1.gif" className="w-40" alt="waving" />
            </motion.div>

            {/* Center text */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-center space-y-4 flex flex-col justify-center"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">I have a little secret for you...</h1>
                <p className="text-2xl md:text-3xl text-purple-200 font-light">And trust me... only YOU deserve this ✨</p>
            </motion.div>

            {/* Bottom button */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="pb-8"
            >
                <button
                    onClick={onNext}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 flex items-center gap-2"
                >
                    Open it <Heart size={20} className="mb-1 fill-white" />
                </button>
            </motion.div>
        </motion.div>
    )
}
