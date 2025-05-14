"use client";

import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomepageFeatures from './Features';
import LatestNews from '../LatestNews';

import { Button } from '../ui/button';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header
      className='relative w-full h-screen bg-white dark:bg-[#0f0f0f]'
    >
      <div
        className={`absolute inset-0 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10  top-[-100px]`}
      >
        {/* Left - text */}
        <div className="flex-1 ">
          <h1 className="text-[30px] font-bold text-blue-500">
            Xin chào, mình{" "}
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
          <p className="mt-4 text-[18px] text-gray-800 dark:text-white leading-relaxed max-w-lg font-bold text-justify">
            Đây là blog cá nhân của mình – nơi ghi lại hành trình học lập trình, khám phá công nghệ và rèn luyện kỹ năng IT từng ngày của mình. mình rất đam mê công nghệ và luôn tìm kiếm cơ hội để học hỏi và phát triển bản thân.
          </p>

          <div className="mt-6">
            <Button asChild>
              <Link to="/docs/intro" className="hover:text-primary-foreground">
                Tổng Quan Về Docusaurus - 5 phút đọc ⏱️
              </Link>
            </Button>
          </div>
        </div>

        {/* Right - ảnh */}
        <div className="flex-1 flex justify-center">
          <img
            src="/img/nhatphuong.jpg"
            alt="Web Developer Hero"
            className="max-w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </header>
  );
}

export default function Home({ homePageBlogMetadata, recentPosts }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Xin chào"
      description="Đây là blog của Võ Nhất Phương - Sinh viên năm 3 tại Đại học Công nghệ Thông tin ĐHQG HCM"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <LatestNews recentPosts={recentPosts} homePageBlogMetadata={homePageBlogMetadata} />
      </main>
    </Layout>
  );
}
