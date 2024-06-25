'use client'

import Head from 'next/head';
import Header from '@/app/components/Header';
import RequestForm from '@/app/components/RequestForm';
import NaverListComponent from './components/NaverList';
import IntroComponent from './components/IntroComponent';



export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>나의 맛집리스트</title>
        <meta name="description" content="좋아하는 맛집 리스트를 네이버지도에 저장하세요" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="맛집, 리스트, 셀럽, 인풀루언서, 네이버지도, 유튜브, 블로그, 인스타그램, 김사원세끼, 성시경, 먹을텐데, 백종원, 님아그시장을가오" />
        <meta property="og:title" content="나의 맛집 리스트" />
        <meta property="og:description" content="좋아하는 맛집 리스트를 네이버지도에 저장하세요" />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://mylist.shout-out.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="나의 맛집 리스트" />
        <meta name="twitter:description" content="좋아하는 맛집 리스트를 네이버지도에 저장하세요" />
        <meta name="twitter:image" content="/path/to/image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container mx-auto p-4">
        <IntroComponent />
        <NaverListComponent />
        <RequestForm />
        <div className="text-gray-500 mt-4 mb-8 text-center">
          <p className='text-lg'> 계속 영상이 올라올때마다 업데이트되며 </p>
          <p className='text-lg'>유지될 예정이니편하게 이용해주세요</p>
        </div>
      </div>
    </div>
  );
}
