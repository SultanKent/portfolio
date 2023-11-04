import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-me">
          <code className="code">
            <div className="line">1 &lt;About /&gt;</div>
            <div className="line">2 <span className="keyword">class</span> AkeroSultan {'{'}</div>
            <div className="line">3   <span className="comment">// I can, because I did.</span></div>
            <div className="line">4   <span className="comment">// My vast variety of skills is continuously expanding.</span></div>
            <div className="line">5   <span className="keyword">constructor</span>() {'{'}</div>
            <div className="line">6     this.name = <span className="string">'Akero'</span></div>
            <div className="line">7     this.dayOfBirthTimestamp = 602745592</div>
            <div className="line">8     this.email = <span className="string">'ffkirito6@gmail.com'</span></div>
            <div className="line">9   {'}'}</div>
            <div className="line">10  <span className="keyword">workExperience</span>() {'{'}</div>
            <div className="line">11    return [</div>
            <div className="line">12      {'{ \'2022-now\' : \'worked in 3-4 project works for a fixed fee with a team\' },'}</div>
            <div className="line">13      {'{ \'2023-now\' : \'Active participation in online communities and forums on front-end development\' },'}</div>
            <div className="line">14      {'{ \'2023-now\' : \'I have extensive and extensive experience in the layout of various adaptive websites\' },'}</div>
            <div className="line">15      {'{ \'2023-now\': \'I have experience in freelancing where I made layout orders\' },'}</div>
            <div className="line">16      {'{ \'2023-now\' : \'I have experience working with nodejs+mongoDB backend\' },'}</div>
            <div className="line">17    ]</div>
            <div className="line">18  {'}'}</div>
            <div className="line">19  <span className="keyword">education</span>() {'{'}</div>
            <div className="line">20    return [</div>
            <div className="line">21      {'{ \'2022-2023\': \starting in 2022 I actively studied web development without any courses or teachers\' },'}</div>
            <div className="line">22    ]</div>
            <div className="line">23  {'}'}</div>
            <div className="line">24  <span className="keyword">skills</span>() {'{'}</div>
            <div className="line">25    return [</div>
            <div className="line">26      <span className="string">'HTML/CSS/JS'</span>, <span className="string">'Vue'</span>, <span className="string">'Node.js'</span>, <span className="string">'Redux(toolkit, thunk)'</span>, <span className="string">'Bootstrap/Tailwind'</span>, <span className="string">'Webpack/Vite'</span>,</div>
            <div className="line">27      <span className="string">'SCSS/styled components'</span>, <span className="string">'npm/yarn/pnpm'</span>, <span className="string">'Linux'</span>, <span className="string">'Astro'</span>, <span className="string">'React'</span>, <span className="string">'Next js'</span>, <span className="string">'GIT'</span>, <span className="string">'Express js'</span>, </div>
            <div className="line">28      <span className="string">'MongoDB(shell, mongoose)'</span>, <span className="string">'Web Sockets'</span>, <span className="string">'Firebase'</span>, <span className="string">'Wordpress'</span>, <span className="string">'Rest Api'</span>, <span className="string">'Animations'</span>,</div>
            <div className="line">29      <span className="string">'jQuery'</span>, <span className="string">'JavaScript'</span>, <span className="string">'TypeScript'</span>, <span className="string">'Jest'</span>, <span className="string">'Canvas JS'</span>, <span className="string">'Adaptive website'</span>, <span className="string">'ESLint/Prettier'</span>,</div>
            <div className="line">30    ]</div>
            <div className="line">31  {'}'}</div>
          </code>
      </div>
    );
  }
}

export default AboutMe;