const FeatureList = [
  {
    title: '🎓 Hành Trình Học Tập tại UIT',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Trải nghiệm học tập của tôi tại Trường Đại học Công nghệ Thông tin (UIT). Yêu trường.
      </>
    )
  },
  {
    title: '💻 Công Nghệ Lập Trình Mới',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Trọng tâm là viết về các công nghệ lập trình mới nhất mà tôi học và tìm hiểu.
      </>
    )
  },
  {
    title: '📁 Đồ Án Môn Học',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Quá trình thực hiện các đồ án môn học của tôi tại UIT: source code, tài liệu tham khảo.
      </>
    )
  }
]

function Feature({ Svg, title, description }) {
  return (
    <div>
      <div className='text--center'>
        <Svg className='mx-auto h-52 w-52' role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <p className='mb-2 text-xl font-bold'>{title}</p>
        <p className='mx-auto max-w-sm'>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className='py-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
