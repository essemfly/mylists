'use client'

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    name: string;
    description: string;
    URL: string;
}

function RequestForm() {
    const [formData, setFormData] = useState<FormData>({ name: '', description: '', URL: '' });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Request submitted for: ${formData.name}`);
        setFormData({ name: '', description: '', URL: '' });
    };

    return (
        <div className="my-4">
            <div className="mb-6 text-center">
                <span className="block text-lg text-gray-600" >즐겨보는</span>
                <h2 className="text-2xl font-bold mb-2 mt-2 text-gray-800">맛집 유튜버 / 블로그 / 인스타 후기를</h2>
                <span className="block text-2xl mb-4"><b className='text-green-500'>네이버 리스트</b>로 만들어드립니다</span>
                <span> 며칠 후에 링크를 통해 지도에 추가만 하세요 </span>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-100 shadow-lg rounded-lg p-6">
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">리스트 이름</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="예) 김사원 세끼"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">후기들이 올라와 있는 주소</label>
                    <input
                        type="text"
                        name="URL"
                        value={formData.URL}
                        onChange={handleChange}
                        placeholder="예) https://www.youtube.com/watch?v=1234abcd"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">간단한 설명</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="서울에 노포들을 중심으로 소개시켜주는 유튜버"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-rose-500 text-white py-3 rounded-md font-semibold text-lg hover:bg-rose-600 transition duration-300"
                >
                    요청하기
                </button>
            </form>
        </div>

    );
}

export default RequestForm;
