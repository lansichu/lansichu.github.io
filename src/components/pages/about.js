import React, { Component } from 'react';
import sap from '../../Assets/images/sap.png';
import mobify from '../../Assets/images/mobify.png';
import ubc from '../../Assets/images/ubc.png';
import sauderResized from '../../Assets/images/sauderResized.png';
import nus from '../../Assets/images/nus.png';

class About extends Component {

  render() {
    return (
      <div className="container-fluid">
      	<h1>
        	Work Experience
        </h1>
        <div className="mobify">
          <span className="companyLogo">
            <img src={mobify} style={{width: 120, height: 30}}/>
          </span>
          <span className="companyDescription">
            <p>
              <strong>At <a href="https://www.mobify.com/">Mobify</a> --></strong> full-time capacity with the title of Software Engineer, Co-op starting
    September 4, 2018 and continuing until December 21, 2018.
            </p>
          </span>
        </div>
        <div className="sap-walldorf">
          <span className="companyLogo">
            <img src={sap} style={{width: 100, height: 50}}/>
          </span>
          <span className="companyDescription">
            <p>
            	<strong>At <a href="www.sap.com/Deutschland‎">SAP Walldorf</a> --></strong> worked as an intern in the Products & Innovation - Corporate Business Development Group from May 10, 2017 - November 30, 2017. My tasks were:
                <ul>
                  <li>
                    Developing and designing full-stack software in JavaScript using SAP User Interface for HTML5 (SAPUI5)
                  </li>
                  <li>
                    Implementing applications with agile development methodologies, e.g. SAPUI5 as well as SAP proprietary platorms, such as SAP HANA Cloud Platform (HCP) and microservice design concepts to engineer complex business problems
                  </li>
                  <li>
                    Designing hands-on session as well as architecting and developing high-performing and scalable analytical application components using Representational State Transfer (REST-)ful services leveraging SAP HANA Extended Application Services (XS) and SAP HANA Smart Data Access
                  </li>
                  <li>
                    Work closely with customers, partners, and internal teams to enhance the solution and systems as well as troubleshooting data issues
                  </li>
                  <li>
                    Capturing customer requirements and translating them into software specifications both verbally and written
                  </li>
                  <li>
                    Analyzing and resolving customer inquiries and problem messages
                  </li>
                </ul>
            </p>
          </span>
        </div>
        <div className="sap-vancouver">
          <span className="companyLogo">
            <img src={sap} style={{width: 100, height: 50}}/>
          </span>
          <span className="companyDescription">
            <p>
              <strong>At <a href="https://www.sap.com/index.html">SAP Vancouver</a> --></strong> worked as an intern on the ERP team as Product Support Engineer. My responsibilities were:
              <ul>
                <li>
                  Processing customer complaints relating to support, service and product issues and resumes case ownership and managing all stakeholders, internal and external, through action- and communication planning
                </li>
                <li>
                  Evaluating and pre-analyzing complaints of all customer segments across locations, support, operation and development teams as well as different expert levels
                </li>
              </ul>
            </p>
          </span>
          <br />
          <br />
          <br />
        </div>

        <h1>
          Education
          <br />
          <br />
        </h1>
        <div className="ubcbcs">
          <span className="educationDescription">
            <p>
              <strong><a href="https://www.cs.ubc.ca/students/undergrad/programs/second-degree">UBC BCS</a></strong>   |  <i>Second degree program</i>
              <br />
                <div className="educationDetails">
                  University of British Columbia, Vancouver, BC
                  <br />
                  Expected completion: May 2019
                </div>
            </p>
          </span>
          <span className="educationLogo">
            <img src={ubc} style={{width: 100, height: 100}}/>
          </span>
        </div>
        <hr className="rule rule--dashed" />
        <div className="ubcsauder">
          <span className="educationDescription">
            <p>
              <strong><a href="www.sauder.ubc.ca/">UBC Sauder</a></strong>   |  <i>Specialization: Accounting</i>
              <br />
              University of British Columbia, Vancouver, BC
              <br />
              Completed: May, 2015
            </p>
          </span>
            <span className="educationLogo">
              <img src={sauderResized} style={{width: 237, height: 100}}/>
            </span>
        </div>
        <hr className="rule rule--dashed" />
        <div className="nus">
          <span className="educationDescription">
            <p>
              <strong><a href="www.nus.edu.sg/">NUS</a></strong>   |  <i>Exchange program</i>
              <br />
              National University of Singapore, Singapore
              <br />
              Duration: Jan 2015 - Apr 2015
            </p>
          </span>
          <span className="educationLogo">
            <img src={nus} style={{width: 150, height: 70}}/>
          </span>
        </div>
      </div>
    );
  }
}

export default About;
