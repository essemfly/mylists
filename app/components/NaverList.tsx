'use client'

export type NaverList = {
  name: string;
  description: string;
  URL: string;
  listURL: string;
  screenshotURL: string;
  numRestaurants: number;
  numUsers: number;
  updatedAt: string;
};


const seedData: NaverList[] = [
  {
    name: '김사원 세끼',
    description: '김사원 세끼의 노포 맛집 리스트',
    URL: 'https://www.youtube.com/@kim3meals',
    listURL: 'https://naver.me/5qa1jxsx',
    screenshotURL: '/images/kimsawon.png',
    numRestaurants: 228,
    numUsers: 1372,
    updatedAt: '2024-06-23',
  } as NaverList,
  {
    name: '백종원의 님아 그 시장을 가오',
    description: '전국 시장에서 먹는 맛집 리스트',
    URL: 'https://www.youtube.com/@paik_jongwon',
    listURL: 'https://naver.me/5fPKUUew',
    screenshotURL: '/images/market.png',
    numRestaurants: 45,
    numUsers: 324,
    updatedAt: '2024-04-20',
  } as NaverList,
  {
    name: '성시경의 먹을텐데',
    description: '가수 성시경의 먹을텐데 맛집 리스트',
    URL: 'https://www.youtube.com/@sungsikyung',
    listURL: 'https://naver.me/5A3xZYX8',
    screenshotURL: '/images/sungsikyung.png',
    numRestaurants: 115,
    numUsers: 2,
    updatedAt: '2024-06-25',
  } as NaverList,
]


const NaverListComponent: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      {seedData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 pb-6 mb-6">
          <img src={item.screenshotURL} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
          <div className="flex flex-col space-y-2">
            <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-sm text-gray-500">저장한 사람: {item.numUsers.toLocaleString()}명</p>
            <p className="text-sm text-gray-500">맛집 수: {item.numRestaurants}</p>
            <p className="text-xs text-gray-500">업데이트 날짜: {item.updatedAt}</p>
            <div className="flex space-x-2 mt-2">
              <a href={item.URL} target="_blank" rel="noopener noreferrer" className="bg-red-500 text-white py-2 px-4 rounded-md text-sm">유튜브 채널</a>
              <a href={item.listURL} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white py-2 px-4 rounded-md text-sm">네이버 리스트</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default NaverListComponent;