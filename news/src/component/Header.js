import React from 'react';


function Header(){
    return(
      <div>
        <div class="row" id="nav">
      <div class="col-5"></div>
      <div class="col-1" id="name"><span>NEWS</span></div>
      <div class="col-1" id="name1"><span>TODAY</span></div>
      <div class="col-5"></div>
      </div>
      <div class="row" id="nav1">
        <div class="col-1">India</div>
        <div class="col-1">World</div>
        <div class="col-1">Olympics</div>
        <div class="col-1">Tech</div>
        <div class="col-1">Sports</div>
        <div class="col-1">Entertainment</div>
        <div class="col-1">Education</div>
        <div class="col-1">Politics</div>
        <div class="col-1">Movies</div>
        <div class="col-1">Wheather</div>
        <div class="col-1">Business</div>
        <div class="col-1">Trades</div>
      </div>
      </div>
    )
}

export default Header;