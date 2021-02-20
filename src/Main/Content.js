import React from 'react'
import HomeContent from '../Page/Home/HomeContent'
import Sidebar from './Sidebar'
import './Content.css'
const Content = () => {
    return (
        <div className="content">
            <Sidebar />
            <HomeContent />
        </div>
    )
}

export default Content
