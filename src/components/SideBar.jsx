import React from 'react';
import { IoHome, IoSchoolOutline, IoGridOutline, IoCodeSlashOutline, IoPersonOutline } from "react-icons/io5";
import { AiOutlineInfo } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function NavigationBar({
  clickEvent1, 
  clickEvent2, 
  clickEvent3, 
  clickEvent4, 
  clickEvent5, 
  clickEvent6, 
  clickEvent7
}) {

  //Click handlers
  const section1 = () => {
    clickEvent1();
  };
  const section2 = () => {
    clickEvent2();
  };
  const section3 = () => {
    clickEvent3();
  };
  const section4 = () => {
    clickEvent4();
  };
  const section5 = () => {
    clickEvent5();
  };
  const section6 = () => {
    clickEvent6();
  };
  const section7 = () => {
    clickEvent7();
  };

  return (
    <div className='sidebar'>
      <div className='item' onClick={section1}>
        <IoHome class="icon"/>
        <div className='text'>Home</div>
      </div>
      <hr className='hrSideBar'/>
      <div className='item' onClick={section2}>
        <AiOutlineInfo class="icon"/>
        <div className='text'>About me</div>
      </div>
      <div className='item' onClick={section3}>
        <IoSchoolOutline  class="icon"/>
        <div className='text'>Education</div>
      </div>
      <div className='item' onClick={section4}>
        <MdOutlineWorkOutline class="icon"/>
        <div className='text'>Work</div>
      </div>
      <div className='item' onClick={section5}>
        <IoGridOutline class="icon"/>
        <div className='text'>Projects</div>
      </div>
      <div className='item' onClick={section6}>
        <IoCodeSlashOutline class="icon"/>
        <div className='text'>IT skills</div>
      </div>
      <div className='item' onClick={section7}>
        <IoPersonOutline  class="icon"/>
        <div className='text'>Personal</div>
      </div>
    </div>
  )
}
