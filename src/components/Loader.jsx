import { motion } from 'framer-motion';

export default function Loader() {
    const logo = "/Velorah.png";

    return (
        <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 3.2 }}
        >
            {/* Moving gradient background */}
            <div className="loader-bg" />

            {/* Glow */}
            <motion.div
                className="loader-glow"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
            />

            {/* Logo */}
            <motion.div
                className="logo-wrapper"
                initial={{ scale: 0.7, opacity: 0, filter: 'blur(12px)' }}
                animate={{
                    scale: [0.7, 1.1, 1],
                    opacity: [0, 1, 1],
                    filter: ['blur(12px)', 'blur(0px)', 'blur(0px)'],
                }}
                transition={{ duration: 2.2, ease: 'easeOut' }}
            >
                <img src={logo} alt="Velorah" className="loader-logo" />

                {/* Glass reflection sweep */}
                <div className="logo-shine" />
            </motion.div>

            {/* Particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <span key={i} />
                ))}
            </div>
        </motion.div>
    );
}