import React, { useRef } from 'react';
//CSS
import './App.css';
//Components
import Header from './components/Header';
import Button from './components/Button';
import SideBar from './components/SideBar';
import ContentHeader from './components/ContentHeader';
import ContentBox from './components/ContentBox';
import SkillBox from './components/SkillBox';
import ProjectBox from './components/ProjectBox';
import FooterSocials from './components/FooterSocials';
import FooterContactMe from './components/FooterContactMe';
import FooterFiles from './components/FooterFiles';
import FooterPersonal from './components/FooterPersonal';

//Icons
import { FaArrowDownLong, FaRegLightbulb  } from "react-icons/fa6";
import { MdOutlineWavingHand } from "react-icons/md";
import { FaRegQuestionCircle, FaReact, FaRobot } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import { IoSchoolOutline, IoLogoJavascript, IoLogoHtml5, IoLogoGithub } from "react-icons/io5";
import { GiPencil } from "react-icons/gi";
import { IoLogoCss3 } from "react-icons/io";
import { TbSql, TbBrandCSharp } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiXampp } from "react-icons/si";
//Pictures
import libanonImg from '../src/pictures/libanon.jpeg';


function App() {

  //References
  const topRef = useRef();
  const aboutRef = useRef();
  const educationRef = useRef();
  const workRef = useRef();
  const projectsRef = useRef();
  const itRef = useRef();
  const footerRef = useRef();

  //Handlers
  const handleGoToTop = () => {
    topRef.current.scrollIntoView({behavior: "smooth"});
  }
  const handleGoToAboutMe = () => {
    aboutRef.current.scrollIntoView({behavior: "smooth"});
  }
  const handleGoToEducation = () => {
    educationRef.current.scrollIntoView({behavior: "smooth"});
  }
  const handleGoToWork = () => {
    workRef.current.scrollIntoView({behavior: "smooth"});
  }
  const handleGoToProjects = () => {
    projectsRef.current.scrollIntoView({behavior: "smooth"});
  }
  const handleGoToIT = () => {
    itRef.current.scrollIntoView({behavior: "smooth"});
  }
  const handleGoToFooter = () => {
    footerRef.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <>
      <SideBar 
        clickEvent1={handleGoToTop} 
        clickEvent2={handleGoToAboutMe} 
        clickEvent3={handleGoToEducation} 
        clickEvent4={handleGoToWork} 
        clickEvent5={handleGoToProjects} 
        clickEvent6={handleGoToIT}
        clickEvent7={handleGoToFooter}
      />
      <div className='headerDiv' ref={topRef}>
        <Header text='IT-student webpage-style ' wordHighlight='portfolio'/>
        <p className='byText'>By Otto Hyyrynen</p>
        <Button type={"button"} wantedClass={"btnArrow"} icon={<FaArrowDownLong/>} onClick={handleGoToAboutMe}/>
      </div>
      <div className='aboutMeDiv' ref={aboutRef}>
        <ContentHeader text='Who is ' wordHighlight='Otto?' highlightColor={"#146956"}/>
        <div className='contentDiv'>
          <ContentBox title='Introduction' icon={<MdOutlineWavingHand/>}>
            <p style={{color: "black"}}>
              Hi, my name is Otto Hyyrynen. I'm a 23-year-old Business Information Technology student from Lahti, Finland. I'm currently studying at LAB University of Applied Sciences to get a Bachelor's degree in IT.<br /><br />
              I truly enjoy learning new things and challenging myself in everyday life. Setting goals is essential for me, because I think people have much more potential when they have a clear goal in mind.
            </p>
          </ContentBox>
          <ContentBox title='Why IT' icon={<FaRegQuestionCircle/>}>
            <p style={{color: "black"}}>
              For me, IT was something I didn't know much about before my studies at LAB. Soon after starting there I noticed being completely hooked to coding and everything I could create with it. 
              Soon I realised how important this type of competence is in the modern world. <br /><br />
              I love problem solving and math has always been one of my favourites in school, so coding and programming really combine those two into an industry, where I want to succeed and constantly 
              improve my skillset.
            </p>
          </ContentBox>
          <ContentBox title='Hobbies' icon={<FaRegLightbulb/>}>
            <p style={{color: "black"}}>
              In addition to coding, I like various other things too! I want to keep myself healthy mentally and physically, so nature and outdoors play a big role when it comes to my hobbies.<br /><br />
              I've made a couple of trips to Norway by myself to hike and camp in the wilderness. Fishing has been my favourite hobby since I was a little kid, but I also enjoy the gym and team sports a lot.
            </p>
          </ContentBox>
        </div>
      </div>
      <div className='educationDiv' ref={educationRef}>
        <ContentHeader text='Educational ' wordHighlight='background' highlightColor={"#cab08f"}/>
        <div className='educationContent'>
          <div className='boxesDiv'>
            <SkillBox icon={<LiaUniversitySolid/>} skill='LAB University of Applied Sciences,' start='2021' end='ongoing'/>
            <SkillBox icon={<IoSchoolOutline/>} skill='High School of Kannas,' start='2016' end='2019'/>
            <SkillBox icon={<GiPencil/>} skill='Elementary School of Mukkula,' start='2007' end='2016'/>
          </div>
          <div className='verticalLine'></div>
        </div>
        <div className='educationContent2'>
          <p style={{fontSize: "30px", fontWeight: "200", padding: "2%"}}>
            My journey in education has been pretty straightforward. After 9 years of elementary school I didn't yet know what career to pursuit, so I started my A-level studies at Kannas High School, in 2016.
            After that, I was faced with the decision of what profession would be the best for my personal traits and passions. I really didn't have anything specific in mind, so I decided to apply for Business Information Technology studies at LAB.
            Luckily that decision turned out to be just the right one. From not knowing anything about IT, coding or programming to those now being my biggest passions is truly amazing. <br /><br />
            Currently I'm studying my third year at LAB with the academic credit average of 3,8.
          </p>
          <hr style={{width: "50%", marginBottom: "5%"}}/>
          <h1 className='quote'>"The true sign of intelligence is not knowledge but imagination."</h1>
          <p className='quote' style={{fontSize: "25px"}}>- Albert Einstein</p>
        </div>
      </div>
      <div className='workDiv' ref={workRef}>
        <ContentHeader text='Work ' wordHighlight='history' highlightColor={"#146956"} marginLeft={"-22%"}/>
        <div className='workContent'>
            <p style={{fontSize: "30px", fontWeight: "200"}}>
              I've managed to gain a fair ammount of work experience, even tho most of my time has been used to focus on my studies. Mainly I have worked as a summer employee in 1-3 month periods every summer since 2018. 
              These employments were done in companies like Prisma, Polar Spring, J.Rekola and S.E Automation.
              Most familiar company has been S.E Automation, where I've worked in 2020, 2022 and 2023. There the main resposibility was completing a summer maintenance at a Nokian Tyres owned farctory, Levypyörä Oy. 
              This job mainly included maintenance of production machines.<br /><br />
              The most notable job experience I have is the 8 month deployment to Lebanon. There, I worked under the Finnish Defence Forces as a United Nations peacekeeper. We were working as a part of a French-Finnish battalion, so   
              working with english became very familiar. From that deployment I gained many valuable skills and points of view, wich can be implemented to everyday life aswell as my future career. <br /><br />
              I see myself as a valuable team member who can get along with different types of people. I also believe, that my experience of working in a multinational environment will benefit me in many ways in the future.
            </p>
        </div>
        <img src={libanonImg} alt="workImg" style={{width: "24%", height: "85%", marginTop: "5%"}}/>
      </div>
      <div className='projectsDiv' ref={projectsRef}>
        <ContentHeader text='My coding ' wordHighlight='projects' highlightColor={"#cab08f"}/>
        <div className='projectBoxes'>
          <ProjectBox icon1={<IoLogoJavascript/>} icon2={<FaReact/>}>
            <h2 style={{marginBottom: "0%"}}>Webpage portfolio</h2>
            <p style={{color: "#1d1d1d"}}>
              I created a webpage about myself and my skills. The project was done by using HTML, CSS, JavaScript and React. This was my very first free time project. I wanted to challenge myself and really 
              test my knowledge on the React library. I'm still on the very early steps when it comes to UI/web development, but this project taught me so much and I'm really pleased of the final product.
            </p>
          </ProjectBox>
        </div>
        <div className='projectContent'>
          <p style={{fontSize: "30px", fontWeight: "200"}}>
              I enjoy planning and completing different types of projects. For me, coding projects are a really good place to test your skillset and understanding on different types of things. 
              In my mind the best way to learn is to fail and look at what you did wrong. <br /><br />
              When it comes to my interests, I really like focusing on UI and the elements of it. I'm trying to learn good coding procedures inside the code and version control. I've seen myself 
              progressing nicely in those fields, but I'm always keen to learn more and do things better.<br /><br />
              At the moment I want to get a deep understanding on JavaScript and React, before moving to another programming language. I'm currently working on a React course on Udemy as a free time hobby.
              I'll post my upcoming projects here once they are finished aswell.
          </p>
          <hr style={{width: "50%", marginBottom: "5%"}}/>
          <h1 className='quote'>"Failure is success if we learn from it."</h1>
          <p className='quote' style={{fontSize: "25px"}}>- Malcom S.Forbes</p>
        </div>
      </div>
      <div className='itDiv' ref={itRef}>
        <ContentHeader text='IT ' wordHighlight='skills' highlightColor={"#146956"}/>
        <div className='contents'>
          <div className='itContent'>
            <h2 style={{color: "#146956", fontSize: "35px"}}>Softwares and tools</h2>
            <p style={{fontSize: "30px", fontWeight: "200", paddingLeft: "2%", paddingRight: "2%"}}>
              I've used mainly Visual Studio and Visual Studio Code for coding during my studies and projects. With that Github version control has become very familiar, especially when 
              working on group projects. Many of our school projects have involved using Xampp aswell. I'm also interested in robotic process automation, and have taken one supplementary course 
              on the subject. There I used UI Path StudioX software.
            </p>
            <div className='itLogos'>
              <IoLogoGithub style={{marginRight: "5%"}}/>
              <BiLogoVisualStudio style={{marginRight: "5%"}}/>
              <FaRobot style={{marginRight: "5%"}}/>
              <SiXampp/>
            </div>
          </div>
          <div className='itContent'>
            <h2 style={{color: "#146956", fontSize: "35px"}}>Programming languages</h2>
            <p style={{fontSize: "30px", fontWeight: "200", paddingLeft: "2%", paddingRight: "2%"}}>
              LAB has offered a good foundation in HTML, CSS and C#. Object-oriented three-story-architecture was the goal in one of our school projects, involving C# and MySQL.
              For me, JavaScript and especially React became the main points of interests. Our school didn't offer much about React, so I took a Udemy course on the subject on my free time.
              I'm interested to learn many other languages and frameworks in the future aswell!
            </p>
            <div className='itLogos'>
              <IoLogoHtml5 style={{marginRight: "2%"}}/>
              <IoLogoCss3 style={{marginRight: "2%"}}/>
              <TbBrandCSharp style={{marginRight: "2%"}}/>
              <IoLogoJavascript style={{marginRight: "2%"}}/>
              <FaReact style={{marginRight: "2%"}}/>
              <TbSql/>
            </div>
          </div>
        </div>
        <Button type={"button"} text={"Go to top"} wantedClass={"btnPrimary"} onClick={handleGoToTop}/>
      </div>
      <div className='footerDiv' ref={footerRef}>
        <FooterSocials/>
        <div className='verticalLine' style={{marginLeft: "3%", marginRight: "3%" ,width: "0.2%"}}></div>
        <FooterContactMe/>
        <div className='verticalLine' style={{marginLeft: "3%", marginRight: "3%" ,width: "0.2%"}}></div>
        <FooterFiles/>
        <FooterPersonal/>
      </div>
    </>
  );
}

export default App;