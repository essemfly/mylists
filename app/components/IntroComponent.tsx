const IntroComponent: React.FC = () => {
    return (
        <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 mt-6"><b className="text-green-500">내 지도에 리스트</b>를 저장하세요</h1>
            <p className="text-2xl text-gray-700 mb-4"><span className="text-red-500">유튜브</span>, <span className="text-gray-700">블로그</span>, <span className="text-pink-500">인스타그램</span></p>
            <p className="text-lg text-gray-700">좋아하는 맛집 리스트를 <b className="text-green-500">네이버 지도</b>에 저장하세요</p>
            
            <p className="mb-6">클릭하여 쉽게 이용할 수 있습니다.</p>
            <hr className="border-gray-300" />
        </div>
    );
};


export default IntroComponent;
