import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfoCard from '../../components/InfoCard';

import './resources.css';

export default class Shelter extends Component {
  render() {
    return (
      <section className="container-fluid resources__container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center">
            <div className="title__container">
              <h2>Shelter</h2>
            </div>
            <div className="subtext__container">
              <h4>Emergency Shelter:</h4>
              <p>
                Contact the National Human Trafficking Resource Center Hotline for emergency shelter options at
                1-888-373-7880
              </p>
              <h4>Domestic Violence Shelter:</h4>
              <p>
                Some domestic violence shelters may house victims of labor trafficking. Click here for a complete list
                of shelters in Massachusetts. To determine if a shelter space is available, victims can contact the
                Safelink state-wide hotline at 877-785-2020 (toll-free), 877-521-2601 (TTY).
              </p>
            </div>
          </div>
        </div>

        <div className="container category__container">
          <div className="row">
            <InfoCard title="Sojourner house" url="https://www.sojournerri.org/" />
            <InfoCard title="Garden of Hope" url="https://gohny.org/" />
            <InfoCard
              title="Preble Street Shelter"
              url="https://www.preblestreet.org/what-we-do/anti-trafficking-services/"
            />
            <InfoCard
              title="Link to list of MA homeless shelters"
              url="https://www.homelessshelterdirectory.org/massachusetts.html"
            />
          </div>
        </div>
      </section>
    );
  }
}
