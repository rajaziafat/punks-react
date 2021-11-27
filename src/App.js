import { useState, useEffect } from "react";

function App() {

  const [counter, setcounter] = useState(0);

  const [ethPrice, setethPrice] = useState(0);



  function inc() {
    if (counter < 3) {
      setcounter(counter + 1)

    }
    else {
      setcounter(3)


    }

    if (ethPrice === 0) {
      setethPrice(0.5)
    }


    if (ethPrice === 0.5) {
      setethPrice(0.10.toFixed(2))
    }



    if (counter === 2) {
      setethPrice(0.15)
    }








  }

  function decr() {

    if (counter > 0) {
      setcounter(counter - 1)

    }
    else {
      setcounter(0)

    }


    if (ethPrice === 0.15) {
      setethPrice(0.10.toFixed(2))
    }


    if (counter === 2) {
      setethPrice(0.5)
    }


    if (counter === 1) {
      setethPrice(0)
    }





  }


  function max() {
    setcounter(3)
    setethPrice(0.15)

  }

  return (
    <>
      <div className="header">
        <div className="logo"><img src="/images/logo.jpg" alt="" /></div>

      </div>
      <div className="main">




        <h1>MINT PUNKS</h1>


        <div className="card">

          <div className="cardFlex1">
            <h2 className="aaa">10,000 NFTs</h2>
          </div>

          <div className="cardFlex1">
            <div className="innerCont">
              <h2>MY ETH BALANCE</h2>
              <h3>0 ETH</h3>
            </div>

            <div className="middle">
              <h2>AMOUNT</h2>
              <div className="ggg"><button onClick={decr}>-</button><span>{counter}</span><button onClick={inc}>+</button></div>
              <button className="max" onClick={max}>Max</button>
            </div>


            <div className="innerCont">
              <h2>TOTAL PRICE</h2>
              <h3>{ethPrice} ETH</h3>
            </div>






            <div className="cardFlex1 mainBTN">
              <button>Mint Now</button>
            </div>




            <div className="progress">
              <h2>Progress</h2>
              <div className="progresCont">
                <div className="rProgress"></div>
                <h3>100%</h3>

              </div>
            </div>








          </div>



        </div>















        <div className="darkBackground"></div>
        <img src="/images/background.png" className="background" alt="" />
      </div>

      <div className="footer">
        <p>Copyright © 2021 IMX PUNKS, All Right Reserved</p>
      </div>

    </>
  );
}

export default App;
