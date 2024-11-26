import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="NOVEMBER 2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Software Engineer, Openbet</h3>
            <h4 className="vertical-timeline-element-subtitle">Athens</h4>
            
            <p>Develop scalable, maintainable code, engage in agile development with a global cross-functional team, and work within a complex vertical hierarchy. Proficient in CI/CD pipelines, Jest for unit testing, integration testing, RESTful APIs, and handling asynchronous requests.</p>
            <p>
              <span>SKILLS/TOOLS: React, State Management Libraries, React Native, Nextjs, Typescript,
              Postman, Docker, Jenkins, GraphQL, Git</span>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="SEPTEMBER 2021 - JUNE 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Developer, Omniscia</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
            Developed websites using React principles, including hooks, component lifecycle, and state management, in an agile startup environment with a flat organizational structure. Wrote unit tests with Jest and explored styling tools like Material UI and SASS.
            </p>
            <p><span>SKILLS/TOOLS: React, State Management Library, Next.js, Typescript, MongoDB, Git</span></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="OCTOBER 2020 - SEPTEMBER 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">PHP Full Stack Developer, xWeb</h3>
            <h4 className="vertical-timeline-element-subtitle">Athens</h4>
            <p>
            Developed custom WordPress plugins, themes, and pages, integrating APIs such as TinyMCE, Mailgun, Stripe, and Imagify. Managed and customized CMS platforms, interacted with backend technologies, and built RESTful applications.
            </p>
            <p><span>SKILLS/TOOLS: CodeIgniter 3/4, jQuery, PHPUnit, Docker, Postman, phpmyadmin,
HeidiSQL, Git
</span></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="AUGUST 2019 - JANUARY 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Wordpress Developer, seo1.gr</h3>
            <h4 className="vertical-timeline-element-subtitle">Athens</h4>
            <p>
            Specialized in developing secure, optimized WordPress websites by integrating essential plugins like Yoast, Wordfence, WooCommerce, All-in-One SEO, Elementor, and Contact Form 7. Provided SEO services to improve website visibility and performance while designing and implementing new features for themes and plugins using PHP.

            </p>
            <p><span>SKILLS/TOOLS: Wordpress, PHP, Google Cloud, Google Analytics, SEO</span></p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;