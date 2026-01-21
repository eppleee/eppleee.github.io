"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function FlipFlower({
    className = "",
    title,
    description,
    color = "flower",
}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const petalCount = 8;

    const colorSchemes = {
        flower: {
            petal: "from-pink-400 via-rose-400 to-[#dcbddf]",
            petalLight: "from-pink-500/20 via-rose-400/20 to-[#dcbddf]",
            center: "from-yellow-300 via-amber-400 to-orange-500",
            back: "from-[#dcbddf] via-[#bab9ff] to-[#dcbddf] dark:from-[#640268] dark:via-[#4e62aa] dark:to-[#420c66]",
        }
    };
    const colors = colorSchemes[color] || colorSchemes.flower;

    return (
        <div className={`relative ${className}`}>
            <motion.div
                className="relative cursor-pointer w-96 h-96"
                style={{ perspective: "1000px" }}
                onHoverStart={() => setIsFlipped(true)}
                onHoverEnd={() => setIsFlipped(false)}
                onClick={() => setIsFlipped(!isFlipped)}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
            >
                {/* Flower Container */}
                <motion.div
                    className="relative w-full h-full"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Front Side - Flower */}
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        {/* Petals */}
                        {Array.from({ length: petalCount }).map((_, index) => {
                            const rotation = (360 / petalCount) * index;
                            return (
                                <div
                                    key={`petal-${index}`}
                                    className="absolute"
                                    style={{
                                        width: "140px",
                                        height: "140px",
                                        transform: `rotate(${rotation}deg) translateY(-90px)`,
                                        transformOrigin: "center 90px",
                                    }}
                                >
                                    <motion.div
                                        className={`w-full h-full bg-gradient-to-t ${colors.petal} shadow-2xl`}
                                        style={{
                                            clipPath: "ellipse(45% 50% at 50% 50%)",
                                            filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))",
                                        }}
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: isFlipped ? 0.9 : 1,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.05,
                                        }}
                                    />
                                </div>
                            );
                        })}

                        {/* Inner layer of smaller petals */}
                        {Array.from({ length: petalCount }).map((_, index) => {
                            const rotation =
                                (360 / petalCount) * index + 360 / petalCount / 2;
                            return (
                                <div
                                    key={`inner-petal-${index}`}
                                    className="absolute"
                                    style={{
                                        width: "110px",
                                        height: "110px",
                                        transform: `rotate(${rotation}deg) translateY(-70px)`,
                                        transformOrigin: "center 70px",
                                    }}
                                >
                                    <motion.div
                                        className={`w-full h-full bg-gradient-to-t ${colors.petalLight} shadow-xl`}
                                        style={{
                                            clipPath: "ellipse(45% 50% at 50% 50%)",
                                        }}
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: isFlipped ? 0.85 : 0.95,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.05 + 0.1,
                                        }}
                                    />
                                </div>
                            );
                        })}

                        {/* Center Circle */}
                        <motion.div
                            className={`relative z-50 w-40 h-40 bg-gradient-to-br ${colors.center} rounded-full shadow-2xl flex items-center justify-center border-4 border-yellow-200/50`}
                            animate={{
                                scale: isFlipped ? 1.05 : 1,
                                rotate: isFlipped ? 180 : 0,
                            }}
                            transition={{ duration: 0.6 }}
                            style={{
                                boxShadow:
                                    "0 0 30px rgba(251, 191, 36, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.3)",
                            }}
                        >
                            <span className="px-4 text-base font-bold leading-tight text-center text-gray-900 drop-shadow-sm">
                                {title}
                            </span>
                        </motion.div>
                    </div>

                    {/* Back Side - Description */}
                    <div
                        className="absolute inset-0 flex items-center justify-center p-12"
                        style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                        }}
                    >
                        <div
                            className={`w-full h-full bg-gradient-to-br ${colors.back} rounded-full shadow-2xl flex items-center justify-center p-12 border-8 border-white/30`}
                        >
                            <p className="text-base font-medium leading-relaxed text-center text-[#252c61b9] dark:text-white">
                                {description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
