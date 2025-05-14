// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Blog Võ Nhất Phương",
  tagline: 'Blog viết về cuộc sống của tôi với hành trình học lập trình',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vonhatphuongahihi', // Usually your GitHub org/user name.
  projectName: 'NhatPhuong-Blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: { defaultLocale: 'en', locales: ['en'] },

  // Enable Docusaurs Faster: https://github.com/facebook/docusaurus/issues/10556
  future: { experimental_faster: true },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vonhatphuongahihi/NhatPhuong-Blog/tree/main',
          docItemComponent: '@theme/ApiItem' // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "Blog Võ Nhất Phương",
        logo: { alt: "Blog Võ Nhất Phương Logo", src: 'img/logo.png' },
        items: [
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docusaurus' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { label: 'LLMs', position: 'left', to: '/docs/category/llms' },
          {
            'href': 'https://github.com/vonhatphuongahihi',
            'position': 'right',
            'className': 'header-github-link',
            'aria-label': 'GitHub repository'
          }
        ]
      },
      docs: { sidebar: { autoCollapseCategories: true, hideable: true } },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Liên kết',
            items: [
              { label: 'Trang chủ', to: '/' },
              { label: 'Blog', to: '/blog' },
              { label: 'Tài liệu', to: '/docs/intro' },
              { label: 'Dự án', to: '/docs/category/projects' }
            ]
          },
          {
            title: 'Mạng xã hội',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/phuong.vonhat.tuhy'
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/phuong.vonhat.tuhy'
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ph%C6%B0%C6%A1ng-v%C3%B5-nh%E1%BA%A5t-771b94364'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/vonhatphuongahihi'
              }
            ]
          },
          {
            title: 'Liên hệ',
            items: [
              {
                label: 'Email',
                href: 'mailto:22521172@gm.uit.edu.vn'
              },
              {
                label: 'Messenger',
                href: 'https://www.messenger.com/t/phuong.vonhat.tuhy'
              }
            ]
          },
          {
            title: 'Tài nguyên',
            items: [
              {
                label: 'UIT',
                href: 'https://www.uit.edu.vn/'
              },
              {
                label: 'GitHub Repository',
                href: 'https://github.com/vonhatphuongahihi/NhatPhuong-Blog'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Blog của <a href="https://github.com/vonhatphuongahihi" style="font-weight: bold;" target="_blank">Võ Nhất Phương</a>. Sinh viên UIT - Khoa Khoa học và Kỹ thuật thông tin.`
      },
      prism: {
        additionalLanguages: [
          'ruby',
          'csharp',
          'php',
          'java',
          'powershell',
          'json',
          'bash',
          'dart',
          'objectivec',
          'r'
        ]
      },
      languageTabs: [
        { highlight: 'python', language: 'python', logoClass: 'python' },
        { highlight: 'bash', language: 'curl', logoClass: 'curl' },
        { highlight: 'csharp', language: 'csharp', logoClass: 'csharp' },
        { highlight: 'go', language: 'go', logoClass: 'go' },
        { highlight: 'javascript', language: 'nodejs', logoClass: 'nodejs' },
        { highlight: 'ruby', language: 'ruby', logoClass: 'ruby' },
        { highlight: 'php', language: 'php', logoClass: 'php' },
        { highlight: 'java', language: 'java', logoClass: 'java', variant: 'unirest' },
        { highlight: 'powershell', language: 'powershell', logoClass: 'powershell' },
        { highlight: 'dart', language: 'dart', logoClass: 'dart' },
        { highlight: 'javascript', language: 'javascript', logoClass: 'javascript' },
        { highlight: 'c', language: 'c', logoClass: 'c' },
        { highlight: 'objective-c', language: 'objective-c', logoClass: 'objective-c' },
        { highlight: 'ocaml', language: 'ocaml', logoClass: 'ocaml' },
        { highlight: 'r', language: 'r', logoClass: 'r' },
        { highlight: 'swift', language: 'swift', logoClass: 'swift' },
        { highlight: 'kotlin', language: 'kotlin', logoClass: 'kotlin' },
        { highlight: 'rust', language: 'rust', logoClass: 'rust' }
      ]
    }),

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        docsRouteBasePath: '/docs',
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: false,
        searchResultContextMaxLength: 50,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: true
      }
    ],
    'docusaurus-theme-openapi-docs'
  ],
  plugins: [
    ['./src/plugins/tailwind-config.js', {}],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          petstore_versioned: {
            specPath: 'api-swagger/petstore.yaml',
            outputDir: 'docs/petstore_versioned',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag'
            },
            version: '2.0.0',
            label: 'v2.0.0',
            baseUrl: '/docs/petstore_versioned/swagger-petstore-yaml',
            downloadUrl:
              'https://raw.githubusercontent.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/main/api-swagger/petstore.yaml',
            versions: {
              '1.0.0': {
                specPath: 'api-swagger/petstore-1.0.0.yaml',
                outputDir: 'docs/petstore_versioned/1.0.0',
                label: 'v1.0.0',
                baseUrl: '/docs/petstore_versioned/1.0.0/swagger-petstore-yaml',
                downloadUrl:
                  'https://raw.githubusercontent.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/main/api-swagger/petstore-1.0.0.yaml'
              }
            }
          }
        }
      }
    ],
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: true
      })
    ],
    [
      './src/plugins/blog-plugin',
      {
        path: 'blog',
        editLocalizedFiles: false,
        blogTitle: 'Blog',
        blogDescription: 'Blog về công nghệ lập trình mà Võ Nhất Phương đang học và tìm hiểu',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List blog',
        routeBasePath: 'blog',
        include: ['**/*.md', '**/*.mdx'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**'
        ],
        postsPerPage: 6,
        truncateMarker: /<!--\s*(truncate)\s*-->/,
        showReadingTime: true,
        onUntruncatedBlogPosts: 'ignore',
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/vonhatphuongahihi/NhatPhuong-Blog/tree/main/',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ]
  ]
}

export default config
