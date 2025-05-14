import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto bg-white dark:bg-[#0f0f0f]">
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse md:flex-row items-center justify-between gap-10`}
            >
                {/* Text section */}
                <div className="flex-1">
                    <h1 className="text-[30px] font-bold text-blue-500">
                        Xin chào, mình{' '}
                        <span className="text-blue-500">
                            <Typewriter
                                words={['tên là Phương', 'là một Web Developer']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className="mt-4 text-[18px] text-gray-800 dark:text-white leading-relaxed max-w-lg font-bold">
                        Trang web này là portfolio cá nhân của mình, nơi mình chia sẻ những dự án và kỹ năng lập trình của mình. Mình rất đam mê công nghệ và luôn tìm kiếm cơ hội để học hỏi và phát triển bản thân.
                    </p>
                </div>

                {/* Illustration */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/assets/nhatphuong.jpg"
                        alt="Web Developer Hero"
                        className="max-w-full h-auto object-contain"
                    />
                </div>
            </div>

            {/* Scroll down indicator */}
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-orange-400 flex justify-center items-start p-2">
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                            className="w-3 h-3 rounded-full bg-orange-400 mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero; 