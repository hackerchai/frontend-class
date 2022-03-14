import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 py-12 px-6">

      <h1 className="title mb-3 text-xl font-bold">
        Welcome to <a href="https://hackerchai.com">Hackerchai Lab!</a>
      </h1>

      <p className="description">
        Made by <a href="mailto:i@hackerchai.com">Hackerchai 💗</a> {' '}
      </p>

      <div className="grid grid-cols-2 gap-8">
        <Link href="/homeworks/ch01" passHref>
          <div className="max-w-md h-64 flex flex-col justify-between bg-white rounded-lg border border-gray-400 mb-0 py-5 px-4 shadow-md">
            <h2 className="mb-3 text-xl font-bold">第一次作业 &rarr;</h2>
            <p>个人主页</p>
          </div>
        </Link>

        <Link href="/homeworks/ch02" passHref>
          <div className="max-w-md h-64 flex flex-col justify-between bg-white rounded-lg border border-gray-400 mb-0 py-5 px-4 shadow-md">
            <h2 className="mb-3 text-xl font-bold">第二次作业 &rarr;</h2>
            <p>文章排版练习</p>
          </div>
        </Link>

        <Link href="/homeworks/ch03" passHref>
          <div className="max-w-md h-64 flex flex-col justify-between bg-white rounded-lg border border-gray-400 mb-0 py-5 px-4 shadow-md">
            <h2 className="mb-3 text-xl font-bold">第三次作业 &rarr;</h2>
            <p>超链接、图片、音频</p>
          </div>
        </Link>


        <a href="https://www.youtube.com/watch?v=VI9cMDhcw0Y" passHref>
          <div className="max-w-md h-64 flex flex-col justify-between bg-white  rounded-lg border border-gray-400 mb-0 py-5 px-4 shadow-md">
            <h2 className="mb-3 text-xl font-bold">未完待续 &rarr;</h2>
            <p>自言本是京城女，家在陵下虾蟆住</p>
          </div>
        </a>

      </div>
    </div>

  )
}
