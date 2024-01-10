import React from 'react'

function About() {
  return (
  <section id="about" className=" mx-auto bg-[url('/bg-screen3.png')] bg-cover bg-center" style={{paddingBottom: '10rem'}}>
      {/* <div className="container mx-auto px-4 py-12">
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
      </div> */}
      <div className="flex justify-center">
        <h1 style={{fontSize: '5rem', fontWeight: 'bold', color: 'white'}}>About</h1>
      </div>
      <div class="flex flex-col md:flex-row justify-center items-center py-16 max-w-3xl mx-auto">
        <div className="md:w-1/2 ml-auto">
          <div className="text-lg leading-relaxed text-white mb-6">
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            <br />テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            <br />テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            <br />テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <div className="mb-8">
            <a href="https://salon.irodas.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition-colors">
              READ MORE
            </a>
          </div>
        </div>
        <div className="md:w-1/2 px-4">
          <img src="/character.png" alt=""/>
        </div>
      </div>

      <div className="pcWidth-l" style={{width: '1024px', maxWidth: '90%', margin: '0 auto'}}>
        <div className="servise_how" style={{padding: '1.5rem 3rem 2rem', borderRadius: '1rem', backgroundColor: 'rgba(244, 244, 244, 0.5)'}}>
          <div className="head">
            <img src="images/head_how.svg" alt="根っこになる技術というタイトル画像が入ります"/>
          </div>
          <div className="discription">
           説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。
          </div>
          <div className="subtitle" style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#333', margin: '1rem 0'}}>
            挑戦すること
          </div>
          <ul>
            <li>・リストアイテム1</li>
            <li>・リストアイテム2</li>
            <li>・リストアイテム3</li>
          </ul>
          <div className="image pcArea">
            <img src="images/img_mountain.png" alt="画像が入ります"/>
          </div>
          <div className="image spArea">
            <img src="images/img_mountain_sp.png" alt="スマホ用の画像が入ります"/>
          </div>
          <div className="subtitle" style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#333', margin: '1rem 0'}}>
            生み出すこと
          </div>
          <ul>
            <li>・リストアイテム1</li>
            <li>・リストアイテム2</li>
            <li>・リストアイテム3</li>
          </ul>
          <div className="image pcArea">
            <img src="images/img_mountain.png" alt="画像が入ります"/>
          </div>
          <div className="image spArea">
            <img src="images/img_mountain_sp.png" alt="スマホ用の画像が入ります"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About