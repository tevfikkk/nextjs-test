import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home!</a>
        </Link>
      </h2>

      <Image
        src='/images/pote.jpg'
        width={'500%'}
        height={'300%'}
        alt='Potemkin'
      />
    </Layout>
  )
}

export default FirstPost
