import React from 'react';

const About = () => {
  return (
    <section id="about" className="pt-20 w-full">
      <h3 className="font-mono uppercase text-2xl md:text-3xl font-semibold mb-2">
        <span className="text-4xl">A</span>
        bout me.
      </h3>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <h4 className="text-dark text-lg font-medium mb-1">
            Let me introduce myself.
          </h4>
          <p className="text-xs md:text-[13px] leading-6">
            Since starting my coding journey over two years ago, I’ve developed
            a passion for frontend development and thrive off the challenge of
            transforming beautiful designs into real-world websites and
            applications on the screen.
          </p>
          <p className="text-xs mt-4 md:text-[13px] leading-6">
            My expertise lies in crafting dynamic, engaging interfaces through
            writing clean and optimized code and utilizing cutting-edge
            development tools and techniques. I am also a team player who
            thrives in collaborating with cross-functional teams to produce
            outstanding web applications.
          </p>
          <p className="text-xs mt-4 md:text-[13px] leading-6">
            In addition to coding, I enjoy reading novels, manga and watching
            anime.
          </p>
          <div className="mt-4 flex justify-center items-center text-sm bg-dark text-white w-32 h-11 rounded">
            Download CV
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h4 className="text-dark text-lg mb-1 font-medium">Certifate.</h4>
          <div className="mb-2">
            <h5 className="text-sm text-dark font-semibold">
              The Complete JavaScript Course 2021: From Zero to Expert! – Udemy
            </h5>
            <p className="text-xs font-light">May 2021</p>
          </div>
          <div className="mb-2">
            <h5 className="text-sm font-semibold">
              Introduction to Cybersecurity - Cisco
            </h5>
            <p className="text-xs">8 Dec 2022</p>
            <ul className="ml-4 mt-2 list-disc text-xs md:text-[13px] leading-6 text-dark">
              <li>Ways in which networks are vulnerable to attack</li>
              <li>Cisco’s approach to threat detection and defense</li>
            </ul>
          </div>
          <div className="mb-2">
            <h5 className="text-sm font-semibold">
              CCNAv7: Enterprise Networking, Security, and Automation
            </h5>
            <p className="text-xs font-light">8 Dec 2022</p>
            <ul className="mt-2 ml-4 list-disc text-xs md:text-[13px] leading-6 text-dark">
              <li>
                Explain how to mitigate threats and enhance network security
                using access control lists and security best practices. •
              </li>
              <li>
                Implement standard IPv4 ACLs to filter traffic and secure
                administrative access.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
