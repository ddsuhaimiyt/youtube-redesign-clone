import React from 'react'
import VideosRow from '../../Main/VideosRow'
import './HomeContent.css'
const HomeContent = () => {
    const recommendedVideos = [
        {
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/150`,
            title: "Ariana Grande - Problem ft.Iggy Azalea",
            length: 208,
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-12-01"
        },
        {
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/150`,
            title: "Ariana Grande - Problem ft.Iggy Azalea",
            length: 208,
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
        {
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/150`,
            title: "Ariana Grande - Problem ft.Iggy Azalea",
            length: 208,
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
        {
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/150`,
            title: "Ariana Grande - Problem ft.Iggy Azalea",
            length: 208,
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
    ]

    const channelVideos = [
        {
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/150`,
            title: "Ariana Grande - Problem ft.Iggy Azalea",
            length: 208,
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-12-01"
        },
        {
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/150`,
            title: "Ariana Grande - Problem ft.Iggy Azalea",
            length: 208,
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
        {
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/150`,
            title: "Ariana Grande - Problem ft.Iggy Azalea",
            length: 208,
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
        {
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/150`,
            title: "Ariana Grande - Problem ft.Iggy Azalea",
            length: 208,
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
    ]

    const marqChan = {
        name: "Marques Brownlee",
        link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
        image: "https://picsum.photos/30/30"
    }
    return (
        <div className="home-content">
            <VideosRow 
                type= "normal"
                label= "Recommended"
                videos= {recommendedVideos}
            />

            <VideosRow
                type= "channel"
                channel= {marqChan}
                videos= {channelVideos} />
        </div>
    )
}

export default HomeContent
