import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ResourceCategoryCard from '../../components/ResourceCategoryCard';

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
            <ResourceCategoryCard href="/resources/shelter" title="Shelter" iconURL="/icons/shelter.svg">
              Shelter
            </ResourceCategoryCard>
            <ResourceCategoryCard
              href="/resources/prepare"
              title="Translation Interpretation"
              iconURL="/icons/translation.svg"
            >
              Translation <br />
              Interpretation
            </ResourceCategoryCard>
          </div>
          <div className="row">
            <ResourceCategoryCard href="/resources/case-management" title="Case Management" iconURL="/icons/case.svg">
              Case <br />
              Management
            </ResourceCategoryCard>

            <ResourceCategoryCard href="/resources/case-management" title="Medical" iconURL="/icons/medical.svg">
              Medical
            </ResourceCategoryCard>
          </div>
          <div className="row">
            <ResourceCategoryCard href="/resources/legal-aid" title="Legal Aid" iconURL="/icons/legal.svg">
              Legal Aid
            </ResourceCategoryCard>
            <ResourceCategoryCard href="/resources/food" title="Food" iconURL="/icons/food.svg">
              Food
            </ResourceCategoryCard>
          </div>
          <div className="row">
            <ResourceCategoryCard
              href="/resources/transportation"
              title="Transportation"
              iconURL="/icons/transportation.svg"
              center
            >
              Transportation
            </ResourceCategoryCard>
          </div>
        </div>
      </section>
    );
  }
}
