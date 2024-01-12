
export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-[100vh] px-1 py-2 bg-purple-200">
      <div className="w-full bg-purple-900 sm:w-[380px] p-4 rounded-xl">
        <div>
          <h3 className="text-center text-[30px] pb-3"><span>Calcu</span>lator</h3>
        </div>

        {/* Display section */}
        <div className="rounded-lg py-2 px-4 mb-5 text-right bg-purple-800">
          <div>
            <span className="text-lg">2000+100</span>
          </div>
          <div>
           =<strong className="text-sm text-orange-400"> 2100</strong>
          </div>
        </div>

        {/* Input section */}
        <div className="grid grid-cols-4 gap-3">
          <div><button className="btn">AC</button></div>
          <div><button className="btn">M+</button></div>
          <div><button className="btn">M-</button></div>
          <div><button className="btn">MR</button></div>
          <div><button className="btn">%</button></div>
          <div><button className="btn">{"("}</button></div>
          <div><button className="btn">{')'}</button></div>
          <div><button className="btn">/</button></div>
          <div><button className="btn">7</button></div>
          <div><button className="btn">8</button></div>
          <div><button className="btn">9</button></div>
          <div><button className="btn">*</button></div>
          <div><button className="btn">4</button></div>
          <div><button className="btn">5</button></div>
          <div><button className="btn">6</button></div>
          <div><button className="btn">-</button></div>
          <div><button className="btn">1</button></div>
          <div><button className="btn">2</button></div>
          <div><button className="btn">3</button></div>
          <div><button className="btn">+</button></div>
          <div><button className="btn">0</button></div>
          <div><button className="btn">00</button></div>
          <div><button className="btn">.</button></div>
          <div><button className="btn btn-orange">=</button></div>
        </div>
      </div>
    </main>
  )
}
