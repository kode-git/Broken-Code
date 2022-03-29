import type { NextPage } from 'next'
import Head from 'next/head'

const posts = [
  { title: 'React Testing', excerpt : 'Learn React Testing' },
  { title: 'React Testing with Taailwind', excerpt : 'Learn React Testing with Tailwind' },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Coffee Break</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='grid grid-cols-4 lg:grid-cols-12 gap-12'>
    <div>
    {posts.map((post, index) => (
        <div className="lg:col-span-8 col-span-1">
          {post.title}
          {post.excerpt}
        </div>
      ))}
    </div>

    </div>
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
          
        </div>

      </div>
    </div>
  )
}

export default Home
