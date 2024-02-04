// Dashboard.js
import React, { useEffect, useState } from 'react';
import { FaHome, FaUpload, FaFileInvoice, FaCalendar, FaCog, FaBell, FaRegBell  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Upload from './Upload';
import './dashboard.css';
import logo from '../logo.svg';
import Table from './Table';

const Dashboard = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [profilePic, setProfilePic] = useState("https://placekitten.com/40/40");

  const toggleUpload = () => {
    setShowUpload(!showUpload);
  };
  useEffect(()=>{
    let isLogin = localStorage.getItem("is_login");
    if(isLogin)
    {
    let picUrl= localStorage.getItem("user_pic");
      setProfilePic(picUrl);
    }
  },[])
  const data =[
    {
      "id": 1,
      "links": "timesonline.co.uk",
      "prefix": "QB0GaK7",
      "select tags": "Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": "Technology, Fashion"
    },
    {
      "id": 2,
      "links": "merriam-webster.com",
      "prefix": "8oUTDyz",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 3,
      "links": "newyorker.com",
      "prefix": "Z9i2o9o",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education",
      "selected tags": "Finance"
    },
    {
      "id": 4,
      "links": "angelfire.com",
      "prefix": "pW44f49",
      "select tags": "Technology, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": "Fashion"
    },
    {
      "id": 5,
      "links": "rambler.ru",
      "prefix": "w1vDJvP",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 6,
      "links": "timesonline.co.uk",
      "prefix": "Uz3Uq87",
      "select tags": "Technology, Fashion, Food, Art, Health, Education, Finance",
      "selected tags": "Travel, Sports, Music"
    },
    {
      "id": 7,
      "links": "state.gov",
      "prefix": "PwT2wMc",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 8,
      "links": "youtube.com",
      "prefix": "c1TO1x6",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 9,
      "links": "washingtonpost.com",
      "prefix": "4KtfXaU",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 10,
      "links": "icq.com",
      "prefix": "nh294Ty",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 11,
      "links": "cbsnews.com",
      "prefix": "0e56PW3",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 12,
      "links": "google.pl",
      "prefix": "NNq9FXo",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 13,
      "links": "uiuc.edu",
      "prefix": "55b5FKK",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 14,
      "links": "creativecommons.org",
      "prefix": "0Q43Q2J",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 15,
      "links": "cam.ac.uk",
      "prefix": "1dYVlCo",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 16,
      "links": "microsoft.com",
      "prefix": "5leG2TS",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 17,
      "links": "ebay.co.uk",
      "prefix": "2tYI62f",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 18,
      "links": "ucsd.edu",
      "prefix": "Dfdk2F4",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 19,
      "links": "constantcontact.com",
      "prefix": "6OFdyTY",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 20,
      "links": "seesaa.net",
      "prefix": "IYU6iyo",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 21,
      "links": "globo.com",
      "prefix": "9Q8j9h5",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 22,
      "links": "github.io",
      "prefix": "5e7TzC8",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 23,
      "links": "bluehost.com",
      "prefix": "8Je0tSH",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 24,
      "links": "engadget.com",
      "prefix": "9S74C00",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 25,
      "links": "psu.edu",
      "prefix": "38yv9fT",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 26,
      "links": "canalblog.com",
      "prefix": "w6WNGwa",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 27,
      "links": "pen.io",
      "prefix": "4RW1EV6",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 28,
      "links": "parallels.com",
      "prefix": "llpTUMe",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 29,
      "links": "skyrock.com",
      "prefix": "rdv8kZ3",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 30,
      "links": "fastcompany.com",
      "prefix": "7zIf8YB",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 31,
      "links": "4shared.com",
      "prefix": "3y72wJ1",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 32,
      "links": "unc.edu",
      "prefix": "x92LK5W",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 33,
      "links": "irs.gov",
      "prefix": "fvD4yQu",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 34,
      "links": "apache.org",
      "prefix": "7d46u5g",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 35,
      "links": "deliciousdays.com",
      "prefix": "04Gwoph",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 36,
      "links": "smugmug.com",
      "prefix": "Z8NZ9t6",
      "select tags": "Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": "Technology"
    },
    {
      "id": 37,
      "links": "list-manage.com",
      "prefix": "SeVM7Vy",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 38,
      "links": "icio.us",
      "prefix": "HO3p8A4",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 39,
      "links": "webeden.co.uk",
      "prefix": "5dndeO4",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    },
    {
      "id": 40,
      "links": "howstuffworks.com",
      "prefix": "NkEas9V",
      "select tags": "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance",
      "selected tags": ""
    }
  ]
  

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className='navabar-items'>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h2>BASE</h2>
        </div>
        <Link to="/" className="nav-item">
          <FaHome />
          <span>Dashboard</span>
        </Link>
        <Link to="/upload" className="nav-item">
          <FaUpload />
          <span>Uploads</span>
        </Link>
        <div className="nav-item">
          <FaFileInvoice />
          <span>Invoice</span>
        </div>
        <div className="nav-item">
          <FaCalendar />
          <span>Schedule</span>
        </div>
        <div className="nav-item">
          <FaBell />
          <span>Notifications</span>
        </div>
        <div className="nav-item">
          <FaCog />
          <span>Settings</span>
        </div>
        </div>
      </div>
      <div className="content">
        <div className="profile">
        <h3>Upload CSV</h3>
         <FaRegBell size="30" />
          {/* You can replace the placeholder image with the user's profile picture */}
          <img src={profilePic} alt="profile" />
        </div>
        {/* Your main content goes here */}
        <div className="main-content">
          {/* Add more content as needed */}
            <Upload/>
            <Table data= {data}/>
        </div>
      </div>
      {showUpload && <div className="overlay" onClick={toggleUpload}></div>}
      {showUpload && <Upload />}
    </div>
  );
};

export default Dashboard;
