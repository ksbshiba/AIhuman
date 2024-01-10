
import React, { useState } from 'react';

// 各タブのコンテンツコンポーネント
function AllContent() {
  return (
    <div id="media" className="max-w-4xl mx-auto">
      <div className="bg-no-repeat bg-cover" style={{
            backgroundImage: "url(/title-screen3.png)",
            backgroundPosition: 'center',
            backgroundSize: 'contain', // アスペクト比を保ちつつ全体が見えるように設定
            width: '100%', // 親要素の幅いっぱいに設定
            height: '100%', // 親要素の高さいっぱいに設定
          }}>
    </div> 
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <div className="relative">
          <img
            alt="Media content"
            className="w-full h-auto"
            height="400"
            src="/media1.jpg"
            style={{
              aspectRatio: "300/400",
              objectFit: "cover",
            }}
            width="300"
          />
          <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
        </div>
        <div className="bg-[#333] text-white p-4">
          <p className="mb-2">1111おかえり戦士！ × 歌劇団員コラボ記念TVCM</p>
          <p className="text-sm">35周年 おかえり戦士キャンペーン</p>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="relative">
            <img
              alt="Media content"
              className="w-full h-auto"
              height="200"
              src="/media1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
          </div>
          <div className="bg-[#333] text-white p-4">
            <p className="mb-2">おかえり戦士！ × 歌劇団員コラボ記念TVCM メイキング</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img
              alt="Media content"
              className="w-full h-auto"
              height="200"
              src="/media1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
          </div>
          <div className="bg-[#333] text-white p-4">
            <p className="mb-2">おかえり戦士！ × 歌劇団員「運命共同体」のうた</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img
              alt="Media content"
              className="w-full h-auto"
              height="200"
              src="/media1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
          </div>
          <div className="bg-[#333] text-white p-4">
            <p className="mb-2">かえり戦士！ × 歌劇団員 インタビュー</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img
              alt="Media content"
              className="w-full h-auto"
              height="200"
              src="/media1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
          </div>
          <div className="bg-[#333] text-white p-4">
            <p className="mb-2">おかえり戦士！ × PPE41 2周年コラボMV</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

function CmContent() {
  return (
    <div className="max-w-4xl mx-auto">
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <div className="relative">
          <img
            alt="Media content"
            className="w-full h-auto"
            height="400"
            src="/media1.jpg"
            style={{
              aspectRatio: "300/400",
              objectFit: "cover",
            }}
            width="300"
          />
          <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
        </div>
        <div className="bg-[#333] text-white p-4">
          <p className="mb-2">2222戦士！ × 歌劇団員コラボ記念TVCM</p>
          <p className="text-sm">35周年 おかえり戦士キャンペーン</p>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="relative">
            <img
              alt="Media content"
              className="w-full h-auto"
              height="200"
              src="/media1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
          </div>
          <div className="bg-[#333] text-white p-4">
            <p className="mb-2">おかえり戦士！ × 歌劇団員コラボ記念TVCM メイキング</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img
              alt="Media content"
              className="w-full h-auto"
              height="200"
              src="/media1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
          </div>
          <div className="bg-[#333] text-white p-4">
            <p className="mb-2">おかえり戦士！ × 歌劇団員「運命共同体」のうた</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img
              alt="Media content"
              className="w-full h-auto"
              height="200"
              src="/media1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
          </div>
          <div className="bg-[#333] text-white p-4">
            <p className="mb-2">かえり戦士！ × 歌劇団員 インタビュー</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img
              alt="Media content"
              className="w-full h-auto"
              height="200"
              src="/media1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
          </div>
          <div className="bg-[#333] text-white p-4">
            <p className="mb-2">おかえり戦士！ × PPE41 2周年コラボMV</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

function MakingInterviewContent() {
  return (
    <div className="max-w-4xl mx-auto">
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <div className="relative">
          <img
            alt="Media content"
            className="w-full h-auto"
            height="400"
            src="/media1.jpg"
            style={{
              aspectRatio: "300/400",
              objectFit: "cover",
            }}
            width="300"
          />
          <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
        </div>
        <div className="bg-[#333] text-white p-4">
          <p className="mb-2">33333おかえり戦士！ × 歌劇団員コラボ記念TVCM</p>
          <p className="text-sm">35周年 おかえり戦士キャンペーン</p>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="relative">
            <img
              alt="Media content"
              className="w-full h-auto"
              height="200"
              src="/media1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
          </div>
          <div className="bg-[#333] text-white p-4">
            <p className="mb-2">おかえり戦士！ × 歌劇団員コラボ記念TVCM メイキング</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img
              alt="Media content"
              className="w-full h-auto"
              height="200"
              src="/media1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
          </div>
          <div className="bg-[#333] text-white p-4">
            <p className="mb-2">おかえり戦士！ × 歌劇団員「運命共同体」のうた</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img
              alt="Media content"
              className="w-full h-auto"
              height="200"
              src="/media1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
          </div>
          <div className="bg-[#333] text-white p-4">
            <p className="mb-2">かえり戦士！ × 歌劇団員 インタビュー</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img
              alt="Media content"
              className="w-full h-auto"
              height="200"
              src="/media1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
          </div>
          <div className="bg-[#333] text-white p-4">
            <p className="mb-2">おかえり戦士！ × PPE41 2周年コラボMV</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

function PvContent() {
  return (
    <div className="max-w-4xl mx-auto">
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <div className="relative">
          <img
            alt="Media content"
            className="w-full h-auto"
            height="400"
            src="/media1.jpg"
            style={{
              aspectRatio: "300/400",
              objectFit: "cover",
            }}
            width="300"
          />
          <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
        </div>
        <div className="bg-[#333] text-white p-4">
          <p className="mb-2">PV</p>
          <p className="text-sm">PVTEST</p>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="relative">
            <img
              alt="Media content"
              className="w-full h-auto"
              height="200"
              src="/media1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
          </div>
          <div className="bg-[#333] text-white p-4">
            <p className="mb-2">PV2</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img
              alt="Media content"
              className="w-full h-auto"
              height="200"
              src="/media1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-12" />
          </div>
          <div className="bg-[#333] text-white p-4">
            <p className="mb-2">PV3</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

// メインコンポーネント
export default function MediaComponent() {
  // 選択されたタブを追跡するための状態
  const [selectedTab, setSelectedTab] = useState('ALL');

  // タブを選択するための関数
  const selectTab = (tab) => {
    setSelectedTab(tab);
  };

  // 選択されたタブに基づいて表示するコンテンツを決定
  const renderContent = () => {
    switch (selectedTab) {
      case 'ALL':
        return <AllContent />;
      case 'CM':
        return <CmContent />;
      case 'MAKING & INTERVIEW':
        return <MakingInterviewContent />;
      case 'PV':
        return <PvContent />;
      default:
        return <AllContent />;
    }
  };

  return (
    <section className="bg-[url('/bg-screen3.png')] bg-cover bg-center p-4">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center">
         <img
          src="/title-screen3.png"
          alt="タイトル画面"
          style={{
            height: '100px', // 画像の高さを500ピクセルに設定
            width: 'auto', // 幅は自動調整（アスペクト比を保持）
          }}
        />
        </div>
      </div>
      <div className="flex justify-center items-center mb-6">
        {/* タブボタン */}
        <div className="w-full max-w-4xl mx-auto flex justify-center space-x-4">
          {['ALL', 'CM', 'MAKING & INTERVIEW', 'PV'].map((tab) => (
            <button
              key={tab}
              className={`text-white px-4 py-2 transition duration-300 ${selectedTab === tab ? 'border-b-2 border-white' : 'hover:bg-gray-700'}`}
              onClick={() => selectTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* 選択されたタブに基づいてコンテンツをレンダリング */}
      {renderContent()}
    </section>
  );
}


function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}
