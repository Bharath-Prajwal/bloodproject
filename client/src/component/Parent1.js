import React from "react";
import './pro.css'
import A1 from './A+.png';
import A2 from './A-.png';
import B1 from './B+.png';
import B2 from './B-.png';
import AB1 from './AB+.png';
import AB2 from './AB--.png';
import O1 from './O+.png';
import O2 from './O-.png';
import Layout2 from "./child1";
export class Layout1 extends React.Component{
    
        render(){
            return(
                <div>
                    <h1>Click on the below image to know about blood group</h1>
                    <div className="size">
                    <div className="grid1">
                        
                    <div className='box'><Layout2 A1={A1} alt='A+' con='A+' content='Donate to' content1='A+,AB+' content2='Receive from :' content3='A+,A-,O+,O-'/></div>
                    <div className='box'><Layout2 A2={A2} alt='A-' con='A-' content='Donate to' content1='A-,A+,AB+,AB-' content2='Receive from :' content3='A-,O-' /></div>
                    <div className='box'><Layout2 B1={B1} alt='B+' con='B+' content='Donate to' content1='B+,AB+' content2='Receive from :' content3='B+,B-,O+,O-' /></div>
                    <div className='box'><Layout2 B2={B2} alt='B-' con='B-' content='Donate to' content1='B+,B-,AB+,AB-' content2='Receive from :' content3='B-,O-' /></div>
                    <div className='box'><Layout2 AB1={AB1} alt='AB+'con='AB+' content='Donate to' content1='AB+' content2='Receive from :' content3='All Blood types' /></div>
                    <div className='box'><Layout2 AB2={AB2} alt='AB-' con='AB-' content='Donate to' content1='AB-,AB+' content2='Receive from :' content3='A-,B-,AB-,O-' /></div>
                    <div className='box'><Layout2 O1={O1} alt='O+' con='O+' content='Donate to' content1='O+,A+,B+,AB+' content2='Receive from :' content3='O+,O-' /></div>
                    <div className='box'><Layout2 O2={O2} alt='O-' con='O-' content='Donate to' content1='All Blood types' content2='Receive from :' content3='O-' /></div>
                        
                    </div>
                </div></div>
            )
         }
        }