import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './resources.css';

export default class Resources extends Component {
  render() {
    return (
      <section className="container-fluid resources__container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center mt-4">
            <div className="title__container">
              <h2>FIND RESOURCES FOR YOU</h2>
            </div>
            <div className="subtext__container">
              <p>
                For resources available in your geographic area to assist labor trafficking victims, please contact the
                National Human Trafficking Resource Center (NHTRC) Hotline. NHTRC connects victims and survivors of
                human trafficking with support and services.
              </p>
              <h5>Browse Services by Category</h5>
            </div>
          </div>
        </div>

        <div className="container category__container">
          <div className="row">
            <Link to="/prepare" className="category__button">
              <div className="category__card col-md-5">
                <img alt="prepare" src="/icons/shelter.svg" className="category__icon" />
                <span className="category__text">Shelter</span>
              </div>
            </Link>
            <Link to="/prepare" className="category__button">
              <div className="category__card col-md-5 col-md-offset-1">
                <img alt="prepare" src="/icons/translation.svg" className="category__icon" />
                <span className="category__text">
                  Translation <br />
                  Interpretation
                </span>
              </div>
            </Link>
          </div>
          <div className="row">
            <Link to="/prepare" className="category__button">
              <div className="category__card col-md-5">
                <img alt="prepare" src="/icons/case.svg" className="category__icon" />
                <span className="category__text">
                  Case <br />
                  Management
                </span>
              </div>
            </Link>
            <Link to="/prepare" className="category__button">
              <div className="category__card col-md-5 col-md-offset-1">
                <img alt="prepare" src="/icons/medical.svg" className="category__icon" />
                <span className="category__text">Medical</span>
              </div>
            </Link>
          </div>
          <div className="row">
            <Link to="/prepare" className="category__button">
              <div className="category__card col-md-5">
                <img alt="prepare" src="/icons/legal.svg" className="category__icon" />
                <span className="category__text">Legal Aid</span>
              </div>
            </Link>
            <Link to="/prepare" className="category__button">
              <div className="category__card col-md-5 col-md-offset-1">
                <img alt="prepare" src="/icons/food.svg" className="category__icon" />
                <span className="category__text">Food</span>
              </div>
            </Link>
          </div>
          <div className="row">
            <Link to="/prepare" className="category__button">
              <div className="category__card col-md-5 col-md-offset-3">
                <img alt="prepare" src="/icons/transportation.svg" className="category__icon" />
                <span className="category__text">Transportation</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
{
  /* <div class="App hidden-md hidden-lg">
  <p class="pageTitle">Resources</p>
  <p class="Head">Choose resource</p>
</div>

<div class="App hidden-xs hidden-sm">
  <div class="homeContainer">
    <p class="pageTitle">Resources</p>
    <p class="Head">Choose resource</p>
  </div>
</div>

<div class="App">
  <div class="buttonContainer hidden-sm hidden-xs">
    <Link to="/report">
      <button class="button4">
        <div class="b4_container">
          <h1>Refer</h1>
          <div class="home_yellow"></div>
          <p style={{ fontWeight: 'bold' }}>Learn how to refer to law enforcement</p>
          <p>Click here to make a referral to law enforcement.</p>
        </div>
      </button>
    </Link>
    <Link to="/victim-services">
      <button class="button4">
        <div class="b4_container">
          <h1>Victim Services</h1>
          <div class="home_yellow"></div>
          <p style={{ fontWeight: 'bold' }}>Find Victim Services</p>
          <p>Click here to make a referral to victim services.</p>
        </div>
      </button>
    </Link>
  </div>
  <div class="buttonContainer hidden-md hidden-lg">
    <Link to="/report">
      <button class="button4">
        <h1>Refer</h1>
        <p>Learn how to refer to law enforcement</p>
      </button>
    </Link>
    <Link to="/resources?id=0">
      <button class="button4">
        <h1>Victim Services</h1>
        <p>Find Victim Services</p>
      </button>
    </Link>
  </div>
</div> */
}
