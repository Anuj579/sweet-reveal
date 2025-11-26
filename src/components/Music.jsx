"use client"

import { useEffect, useRef } from "react"

export default function Music({ shouldPlay }) {
    const audioRef = useRef(null)

    useEffect(() => {
        if (shouldPlay && audioRef.current) {
            audioRef.current.volume = 0.8
            audioRef.current.play().catch(console.log)
        }
    }, [shouldPlay])

    return (
        <audio ref={audioRef} preload="none">
            <source src="/audio/bg.mp3" type="audio/mpeg" />
        </audio>
    )
}