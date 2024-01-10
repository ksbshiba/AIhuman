import React from 'react'

export const Loadmap = () => {
  return (
    <section id="loadmap" style={{backgroundImage: "url('/bg-screen5.png')"}}>
      <div className="pcWidth-l" style={{width: '1024px', maxWidth: '90%', margin: '0 auto'}}>
        <div className="loadmap" style={{padding: '1.5rem 3rem 2rem', paddingBottom: '10rem', borderRadius: '1rem', backgroundColor: 'rgba(244, 244, 244, 0.5)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div>
          <h1 style={{fontSize: '5rem', fontWeight: 'bold'}}>LOADMAP</h1>
        </div>
        <div className="image pcArea">
            <img src="/loadmap.png" alt="画像が入ります"/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Loadmap