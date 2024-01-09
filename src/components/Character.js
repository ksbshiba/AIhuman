import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CharacterSlider() {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ArrowRightIcon />,
    prevArrow: <ArrowLeftIcon />,
    responsive: [
      {
        breakpoint: 768, // 768px以下のデバイスサイズで
        settings: {
          slidesToShow: 2, // スライドを2つ表示
          slidesToScroll: 1, // 1つずつスクロール
        }
      },
      {
        breakpoint: 480, // 480px以下のデバイスサイズで
        settings: {
          slidesToShow: 2, // スライドを1つ表示
          slidesToScroll: 1, // 1つずつスクロール
        }
      }
    ]
  };

  return (
    <>
<style>
{`
.slick-slide {
  width: calc((100% / 3) - 10px); /* 1行に3つ表示するためにコンテナの33.33%の幅に設定 */
  margin-right: 10px; /* スライド間のスペースを調整 */
}

@media (max-width: 768px) {
  .slick-slide {
    width: calc((100% / 2) - 10px); /* スマホでは2つ表示 */
  }
}

@media (max-width: 480px) {
  .slick-slide {
    width: 100%; /* 480px以下では1つ表示 */
  }
}
`}
</style>
    
    <div className="slider-container w-full h-auto bg-cover bg-center mx-auto px-4 md:px-8 lg:px-32 pt-8" style={{
                  backgroundImage: "url(/bg-screen2.png)",
                  backgroundSize: 'cover', // 画像がコンテナの幅いっぱいになるように変更
                  backgroundPosition: 'center', // 画像を中央に配置
                  backgroundRepeat: 'no-repeat', // 画像を繰り返さない
                }}>
      <div className=" section2title flex justify-center items-start mb-8" style={{ height: 'calc(100vh / 6)' }}>
        <div>
         <h1 style={{fontSize: '5em', color: 'white', fontWeight: 'bold'}}>WANTED</h1>
        </div>
      </div>
      <div className=" section2title flex justify-center items-start mb-8" style={{ height: 'calc(100vh / 6)' }}>
        <div>
         <h1 style={{fontSize: '3em', color: 'white', fontWeight: 'bold'}}>SAPPORT</h1>
        </div>
      </div>
      <Slider {...settings}>
        {/* 各カードを個別のスライドとしてラップします */}
          <div className="p+1">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
        {/* 同様に他のカードも追加 */}
          <div className="p+1">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
        {/* ...他のスライドも同様に追加 */}
        <div className="p+2">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
         </div>
          <div className="p+2">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
          <div className="p+2">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
          <div className="p+2">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
      </Slider>
      <div className=" section2title flex justify-center items-start mb-8" style={{ height: 'calc(100vh / 6)' }}>
        <div>
         <h1 style={{fontSize: '3em', color: 'white', fontWeight: 'bold'}}>MENBER</h1>
        </div>
      </div>
      <Slider {...settings}>
        {/* 各カードを個別のスライドとしてラップします */}
          <div className="p+1">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
        {/* 同様に他のカードも追加 */}
          <div className="p+1">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
        {/* ...他のスライドも同様に追加 */}
        <div className="p+2">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
         </div>
          <div className="p+2">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
          <div className="p+2">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
          <div className="p+2">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
      </Slider>
      <div className=" section2title flex justify-center items-start mb-8" style={{ height: 'calc(100vh / 6)' }}>
        <div>
         <h1 style={{fontSize: '3em', color: 'white', fontWeight: 'bold'}}>MENTOR</h1>
        </div>
      </div>
      <Slider {...settings}>
        {/* 各カードを個別のスライドとしてラップします */}
          <div className="p+1">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
        {/* 同様に他のカードも追加 */}
          <div className="p+1">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
        {/* ...他のスライドも同様に追加 */}
        <div className="p+2">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
         </div>
          <div className="p+2">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
          <div className="p+2">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
          <div className="p+2">
            <img src="/character.png" alt="Character Image" className="rounded-lg" />
          </div>
      </Slider>
    </div>

    </>
  );
}


function ArrowLeftIcon(props) {
  return (
    <button
      {...props}
      className={`text-white w-6 h-6 flex items-center justify-center absolute z-10 left-0`}
      style={{ top: '25%', left: '-5%',transform: 'translate(0, -50%)' }}
    >
      <img src="/button-next-left.png" alt="Previous Slide" />
    </button>
  );
}

function ArrowRightIcon(props) {
  return (
    <button
      {...props}
      className={`text-white w-6 h-6 flex items-center justify-center absolute z-10 right-0`}
      style={{ top: '25%', right:'-5%',transform: 'translate(0, -50%)' }}
    >
      <img src="/button-prev-right.png" alt="Next Slide" />
    </button>
  );
}