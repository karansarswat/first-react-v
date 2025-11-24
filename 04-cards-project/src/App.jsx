import React from 'react'
// import { Bookmark } from 'lucide-react'

import Cards from './Components1/cards.jsx'



const App = () => {
  const jobOpenings =[
  {
    "companyLogo": "https://www.google.com/s2/favicons?sz=64&domain_url=google.com",
    "companyName": "Google",
    "jobPost": "Senior Software Engineer, AI",
    "jobType": "Full-time, Remote",
    "country": "USA",
    "pay": "$110/hr",
    "jobTime": "2 days ago"
  },
  {
    "companyLogo": "https://www.google.com/s2/favicons?sz=64&domain_url=apple.com",
    "companyName": "Apple",
    "jobPost": "Product Designer, Vision Pro",
    "jobType": "Full-time, Hybrid",
    "country": "USA",
    "pay": "$125/hr",
    "jobTime": "1 day ago"
  },
  {
    "companyLogo": "https://www.google.com/s2/favicons?sz=64&domain_url=meta.com",
    "companyName": "Meta",
    "jobPost": "Data Scientist, Reality Labs",
    "jobType": "Full-time",
    "country": "Ireland",
    "pay": "$95/hr",
    "jobTime": "5 days ago"
  },
  {
    "companyLogo": "https://www.google.com/s2/favicons?sz=64&domain_url=amazon.com",
    "companyName": "Amazon",
    "jobPost": "Cloud Solutions Architect (AWS)",
    "jobType": "Full-time, Remote",
    "country": "Canada",
    "pay": "$105/hr",
    "jobTime": "3 days ago"
  },
  {
    "companyLogo": "https://www.google.com/s2/favicons?sz=64&domain_url=microsoft.com",
    "companyName": "Microsoft",
    "jobPost": "Cybersecurity Analyst",
    "jobType": "Full-time",
    "country": "UK",
    "pay": "$90/hr",
    "jobTime": "7 days ago"
  },
  {
    "companyLogo": "https://www.google.com/s2/favicons?sz=64&domain_url=netflix.com",
    "companyName": "Netflix",
    "jobPost": "Backend Engineer, Content Platform",
    "jobType": "Full-time, Remote",
    "country": "Netherlands",
    "pay": "$115/hr",
    "jobTime": "4 days ago"
  },
  {
    "companyLogo": "https://www.google.com/s2/favicons?sz=64&domain_url=nvidia.com",
    "companyName": "Nvidia",
    "jobPost": "GPU Systems Engineer",
    "jobType": "Full-time",
    "country": "USA",
    "pay": "$130/hr",
    "jobTime": "6 days ago"
  },
  {
    "companyLogo": "https://www.google.com/s2/favicons?sz=64&domain_url=tesla.com",
    "companyName": "Tesla",
    "jobPost": "Robotics Controls Engineer",
    "jobType": "Full-time",
    "country": "Germany",
    "pay": "$100/hr",
    "jobTime": "2 days ago"
  },
  {
    "companyLogo": "https://www.google.com/s2/favicons?sz=64&domain_url=salesforce.com",
    "companyName": "Salesforce",
    "jobPost": "CRM Platform Developer",
    "jobType": "Full-time, Hybrid",
    "country": "Australia",
    "pay": "$98/hr",
    "jobTime": "8 days ago"
  },
  {
    "companyLogo": "https://www.google.com/s2/favicons?sz=64&domain_url=adobe.com",
    "companyName": "Adobe",
    "jobPost": "UX/UI Designer, Creative Cloud",
    "jobType": "Full-time, Remote",
    "country": "India",
    "pay": "$85/hr",
    "jobTime": "5 days ago"
  }
];
  return (
    <div className="parent">
     {jobOpenings.map(function(elem , index){
      return(
     <div key={index}> <Cards company={elem.companyName} job={elem.jobPost} logo={elem.companyLogo} post={elem.jobType} country={elem.country} pay={elem.pay} jobTime={elem.jobTime}/>
      </div>      
)})}
 </div>
  )
}



export default App
