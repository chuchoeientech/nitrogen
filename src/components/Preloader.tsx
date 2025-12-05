import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExit(true);
            setTimeout(onComplete, 800); // Wait for exit animation
        }, 2000); // Show logo for 2 seconds

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"
            initial={{ opacity: 1 }}
            animate={exit ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="relative flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 100
                    }}
                    className="w-48 h-48 md:w-72 md:h-72 mb-10"
                >
                    <img
                        src="/nitrogen.svg"
                        alt="Nitrogen Agencies Ltd."
                        className="w-full h-full object-contain drop-shadow-xl"
                    />
                </motion.div>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-1.5 bg-blue-600 rounded-full w-64 max-w-[280px]"
                />
            </div>
        </motion.div>
    );
}
