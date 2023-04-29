import React from 'react';

function Home() {
  return (
    <div>
      <br></br>
      <div className="row col-5 mx-auto">
        <img src="./JoelHiltonHeadshot.jpg" alt="companylogo" />
        <br></br>
        <h3>
          Explore my firey hot-takes on my podcast{' '}
          <a href="https://baconsale.com">BaconSale</a>, as well as my famous{' '}
          <a href="/movies">movie collection</a>!
        </h3>
      </div>
    </div>
  );
}

export default Home;
