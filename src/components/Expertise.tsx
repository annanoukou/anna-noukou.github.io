import React from "react";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/Expertise.scss';


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Achievements</h1>
            <div className="skills-grid">
            <div className="skill">
                    <div
                        className="main"
                        style={{
                            backgroundImage: `url(${
                            process.env.PUBLIC_URL + "/images/achievements/thinkbiz.jpg"
                            })`,
                        }}
                    ></div>
                    <h3>Startup</h3>

                    <p>eStand was created after winning 1s place in the CodeBiz competition and 2d place in
MoKe Competition. We received a small founding. A platform for food delivery was
build using Django and I was responsible for the Front Design.
</p>
                </div>

                <div className="skill">
                    <div
                        className="main"
                        style={{
                            backgroundImage: `url(${
                            process.env.PUBLIC_URL + "/images/achievements/tedx.jpg"
                            })`,
                        }}
                    ></div>
                    <h3>TEDxUniversityofPiraeus, Athens</h3>

                    <p>Volunteering work for two consecutive years. I was part of the IT Team and was tasked
with developing the frontend of a new website using React. The task waschallenging
since the client had to communicate with a custom API.
</p>
                </div>

                <div className="skill">
                    <div
                        className="main"
                        style={{
                            backgroundImage: `url(${
                            process.env.PUBLIC_URL + "/images/achievements/wot.jpg"
                            })`,
                        }}
                    ></div>
                    <h3>Woman On Top Hackathon</h3>

                    <p>Secured 1st place in the Women On Top hackathon.
</p>
                </div>


                <div className="skill">
                    <div
                        className="main"
                        style={{
                            backgroundImage: `url(${
                            process.env.PUBLIC_URL + "/images/achievements/fintech.jpg"
                            })`,
                        }}
                    ></div>
                    <h3>Fintech Hackathon </h3>

                    <p>We secured 4th place in a fintech hackathon organized by Crowdpolicy, earning a three-month Erasmus for Young Entrepreneurs placement at NinjaMails. There, I gained insights into business plans and models while contributing to Java projects, such as building CSV readers and crawlers.</p>
                </div>

                <div className="skill">
                    <div
                        className="main"
                        style={{
                            backgroundImage: `url(${
                            process.env.PUBLIC_URL + "/images/achievements/microsoft.jpg"
                            })`,
                        }}
                    ></div>
                    <h3>Imagine Cup</h3>

                    <p>Participated in Microsoft's Imagine Cup competition, a 24-hour coding marathon. It was our first hackathon experience, marking an exciting introduction to collaborative coding challenges.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;