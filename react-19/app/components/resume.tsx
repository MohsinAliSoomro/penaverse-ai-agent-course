'use client'
import React from 'react';
import { Download, Phone, Mail, Globe, Trophy, DollarSign, Smartphone, Clock, User, MessageSquare, Utensils, Zap, Car, ChefHat, Code, Database, Cloud } from 'lucide-react';

const Resume = () => {
  const handleDownloadPDF = () => {
    // Hide the download button temporarily
    const button = document.getElementById('download-btn');
    if (button) button.style.display = 'none';
    
    // Trigger print dialog which allows saving as PDF
    window.print();
    
    // Show the button again after print dialog
    setTimeout(() => {
      if (button) button.style.display = 'flex';
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Download Button */}
        <div id="download-btn" className="flex justify-center mb-6 print:hidden">
          <button
            onClick={handleDownloadPDF}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </div>

        {/* Resume Container */}
        <div className="bg-white rounded-lg shadow-2xl p-8 print:shadow-none print:rounded-none">
          {/* Header */}
          <div className="border-b-4 border-blue-500 pb-6 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">MOHSIN ALI</h1>
            <h2 className="text-xl text-blue-600 font-semibold mb-4">SOFTWARE ENGINEER</h2>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+923113403078</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>mohsinalisoomro23@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Portfolio: https://49cd9923.portfolio1-3vd.pages.dev</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>LinkedIn: linkedin.com/in/mohsin-ali-soomro</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Dev.to: dev.to/mohsinalisoomro</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Medium: @mohsinalisoomro23</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Profile */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">PROFILE</h3>
                <p className="text-gray-700 leading-relaxed">
                  Motivated and results-driven Software Engineer with 4+ years of hands-on experience in building scalable web and mobile applications using modern frameworks like React.js, Next.js, React Native, and AWS Amplify. Currently contributing to impactful healthcare solutions at Alliance Care Technology. Skilled in backend development, cloud integration, and real-time features such as chat and audio messaging. Passionate about AI, robotics, and mechatronics, with a strong drive to innovate and explore cutting-edge technologies. Actively publishing technical tutorials and articles on platforms like Dev.to and Medium to share knowledge and contribute to the developer community. As a Full Stack Freelancer, I love to build new amazing things in my daily routine and specialize in creating Discord bots, Twilio video chat applications, and other innovative solutions.
                </p>
              </section>

              {/* Experience */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">EXPERIENCE</h3>
                
                {/* Software Engineer - Alliance Care Technology */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Software Engineer</h4>
                  <div className="text-blue-600 font-medium mb-2">Alliance Care Technology – Remote</div>
                  <div className="text-sm text-gray-600 mb-3">📅 10, 2023 – Present</div>
                  <p className="text-gray-700 mb-3">
                    Experienced Software Engineer currently contributing to healthcare technology solutions at Alliance Care Technology, where I design and develop scalable web and mobile applications using React, Next.js, React Native, Firebase, and AWS Amplify. I specialize in building real-time features such as secure chat, audio messaging, and automated scheduling systems, delivering reliable and privacy-focused solutions in a fast-paced, Agile environment.
                  </p>
                </div>

                {/* Software Engineer - Fiverr */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Software Engineer</h4>
                  <div className="text-blue-600 font-medium mb-2">Fiverr – Remote</div>
                  <div className="text-sm text-gray-600 mb-3">📅 04, 2022 – 08, 2023</div>
                  <p className="text-gray-700 mb-3">
                    Full-stack developer crafting scalable web and mobile applications with AWS, NextJS, and MERN stack. Expertise in robust backend infrastructures and intuitive frontends, delivering comprehensive solutions across industries.
                  </p>
                </div>

                {/* Software Engineer - Zenveus */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Software Engineer</h4>
                  <div className="text-blue-600 font-medium mb-2">Zenveus – Onsite</div>
                  <div className="text-sm text-gray-600 mb-3">📅 05, 2021 - 03, 2022</div>
                  <p className="text-gray-700 mb-3">
                    React developer specializing in scalable web applications with AWS backend integration. Proficient in translating designs into responsive components, developing serverless backend services, and maintaining robust CI/CD pipelines. Collaborates effectively with cross-functional teams to deliver high-quality solutions, demonstrating strong problem solving skills and adaptability.
                  </p>
                </div>
              </section>

              {/* Education */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">EDUCATION</h3>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">BS in Information Technology</h4>
                  <div className="text-blue-600 font-medium mb-2">The Shaikh Ayaz University</div>
                  <div className="text-sm text-gray-600 mb-3">📅 2017-2020</div>
                </div>
              </section>

              {/* Skills */}
              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">SKILLS</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Javascript', 'React', 'Next.js', 'Node.js', 'AWS Services', 'SQL', 'DynamoDB', 'MongoDB', 'HTML', 'CSS', 'Tailwind', 'Firebase', 'Mantine', 'Material UI', 'Communication'].map((skill) => (
                    <div key={skill} className="bg-gray-100 px-3 py-2 rounded text-sm text-gray-700 text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Achievements */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">ACHIEVEMENTS</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Healthcare Technology Solutions</h4>
                      <p className="text-xs text-gray-600">Contributing to impactful healthcare solutions with real-time features and secure systems at Alliance Care Technology.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cloud className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Full-Stack Development Expertise</h4>
                      <p className="text-xs text-gray-600">4+ years of experience building scalable applications with modern frameworks and cloud technologies including AWS Amplify, Lambda, and Serverless.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Technical Content Creator</h4>
                      <p className="text-xs text-gray-600">Actively publishing technical tutorials and articles on Dev.to and Medium, including Discord bot development and Twilio video chat implementation.</p>
                    </div>
                  </div>
                  {/* <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Innovative Project Development</h4>
                      <p className="text-xs text-gray-600">Specialized in creating Discord bots, Twilio video chat applications, and other cutting-edge solutions for diverse client needs.</p>
                    </div>
                  </div> */}
                </div>
              </section>

              {/* My Time */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">MY TIME</h3>
                <div className="relative">
                  <div className="w-32 h-32 mx-auto mb-4">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="8" 
                              strokeDasharray="251.2" strokeDashoffset="75.36" transform="rotate(-90 50 50)"/>
                      <circle cx="50" cy="50" r="30" fill="none" stroke="#10b981" strokeWidth="6" 
                              strokeDasharray="188.4" strokeDashoffset="94.2" transform="rotate(-90 50 50)"/>
                      <circle cx="50" cy="50" r="20" fill="none" stroke="#f59e0b" strokeWidth="4" 
                              strokeDasharray="125.6" strokeDashoffset="50.24" transform="rotate(-90 50 50)"/>
                    </svg>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span>Full-stack development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <span>Writing technical articles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                      <span>Exploring AI and robotics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span>Contributing to open source</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Courses */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">COURSES</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 text-sm">AWS Certified Solutions Architect</h4>
                    <p className="text-xs text-gray-600">Comprehensive training on AWS cloud services, architecture patterns, and best practices for scalable applications.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 text-sm">React Native Mobile Development</h4>
                    <p className="text-xs text-gray-600">Advanced mobile app development using React Native, covering navigation, state management, and platform-specific features.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 text-sm">Full-Stack JavaScript Development</h4>
                    <p className="text-xs text-gray-600">Complete MERN stack development course covering modern JavaScript frameworks and backend technologies.</p>
                  </div>
                  {/* <div>
                    <h4 className="font-semibold text-blue-600 text-sm">Discord Bot Development</h4>
                    <p className="text-xs text-gray-600">Specialized course on creating Discord bots with advanced features and integrations.</p>
                  </div> */}
                  {/* <div>
                    <h4 className="font-semibold text-blue-600 text-sm">Twilio Communication APIs</h4>
                    <p className="text-xs text-gray-600">Video chat implementation and real-time communication solutions using Twilio services.</p>
                  </div> */}
                </div>
              </section>

              {/* Passions */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">PASSIONS</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">AI & Robotics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Mechatronics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Technical Writing</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:rounded-none {
            border-radius: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;