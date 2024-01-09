/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9uLVbiLLmOP
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className=" bg-[url('/bg-screen5.png')] bg-cover bg-center " >
      {/* 画像をお知らせの上部に配置 */}
      <div className="text-center pt-8" style={{maxWidth: '500px', margin: '0 auto'}}>
        <img
            src="/title-screen5.png"
            alt="タイトル画面"
            
          />
      </div>
      {/* 以下、お知らせセクションのコード */}
      <div className="container flex items-start justify-center py-0 px-4 min-h-screen">
        <div className="news-container" style={{ width: '70%', maxWidth: '350px' }}>
          <div className="box">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[300px] border-2 border-gold">
              <div className="bg-[#f5f5f5] p-4">
                <h2 className="text-lg font-bold text-gray-700">お知らせ</h2>
                <div className="flex justify-between items-center">
                  <Button className="text-xs font-semibold text-gray-700 bg-[#e0e0e0] py-1 px-2 rounded">イベント</Button>
                  <Button className="text-xs font-semibold text-gray-700 bg-[#e0e0e0] py-1 px-2 rounded">アップデート</Button>
                  <Button className="text-xs font-semibold text-gray-700 bg-[#e0e0e0] py-1 px-2 rounded">その他</Button>
                </div>
              </div>
              <ul className="divide-y divide-gray-200">
                <li className="p-4 flex justify-between">
                  <span className="text-sm font-medium text-gray-600">2023-12-27</span>
                  <span className="text-sm text-gray-500">アップデートのお知らせ 12/28(水)</span>
                </li>
                <li className="p-4 flex justify-between">
                  <span className="text-sm font-medium text-gray-600">2023-11-30</span>
                  <span className="text-sm text-gray-500">[新人新装備]</span>
                </li>
                <li className="p-4 flex justify-between">
                  <span className="text-sm font-medium text-gray-600">2023-11-16</span>
                  <span className="text-sm text-gray-500">[冬服販売開始]</span>
                </li>
                <li className="p-4 flex justify-between">
                  <span className="text-sm font-medium text-gray-600">2023-11-06</span>
                  <span className="text-sm text-gray-500">[限定コラボ新装備]</span>
                </li>
              </ul>
              <div className="bg-[#f5f5f5] p-4 text-center">
                <Button className="text-xs font-semibold text-gray-700 bg-[#e0e0e0] py-1 px-2 rounded">MORE→</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[300px] ml-8">
          <div className="bg-[#f5f5f5] p-4 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-700">Tweets from @jponegai</h2>
            <Button className="bg-transparent p-2">
              <XIcon className="text-gray-500" />
            </Button>
          </div>
          <ul className="divide-y divide-gray-200">
            <li className="p-4">
              <p className="text-sm text-gray-600">[公式] お知らせは...</p>
              <p className="text-xs text-gray-500">@jponegai - Dec 30, 2022</p>
              <p className="text-xs text-gray-500">
                🎉年末年始CP🎉 最大の気持ちを込めてフォロー&リツイートCPを開催します！ 大量のダイヤの他、抽選で #iPhone14
                #PS5 正月限定装備をプレゼント！
              </p>
            </li>
            <li className="p-4">
              <p className="text-sm text-gray-600">{`✔\u{fe0f}応募期間`}</p>
              <p className="text-xs text-gray-500">12月30日(金) 〜1月5日(木)まで</p>
            </li>
          </ul>
          <div className="bg-[#f5f5f5] p-4 text-center">
            <Button className="text-xs font-semibold text-gray-700 bg-[#e0e0e0] py-1 px-2 rounded">一覧をみる</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}



