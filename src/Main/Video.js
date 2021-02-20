import { render } from '@testing-library/react'
import React from 'react'
import './Video.css'
const Duration = require('duration')
const Video = (props) => {
    const {video} = props
    const { thumbnail, title, channel, viewCount, length, uploadedAt } = video

    const getViewString = viewCount => {
        // 1283019 -> 1.2M
        const numOfChar = viewCount.toString().length
        let unit = ''
        let renderedView = ''

        if (numOfChar >= 10) {
            renderedView = (viewCount/1000000000).toFixed(1)
            unit = 'B'
        } else if (numOfChar >= 7) {
            renderedView = (viewCount/1000000).toFixed(1)
            unit = 'M'
        } else if (numOfChar >= 4) {
            renderedView = (viewCount/1000).toFixed(0)
            unit = 'K'
        } else {
            renderedView = viewCount
            unit = ''
        }

        return `${renderedView}${unit}`
    }

    const getUploadedString = uploadedAt => {
        // "2021-02-12" -> 1 days
        const duration = new Duration(new Date(uploadedAt), new Date())
        let unit = ''
        let renderedView = ''
        if (duration.years >= 1) {
            renderedView = duration.years
            unit = 'years'
        } else if (duration.months >= 1) {
            renderedView = duration.months
            unit = 'months'
        } else if (duration.days >= 1) {
            renderedView = duration.days
            unit = 'days'
        } else {
            renderedView = ''
            unit = ''
        }

        return `${renderedView} ${unit}`
    }

    const getLengthString = length => {
        // 208 -> 03:28
        var sec_num = parseInt(length)
        var hours = Math.floor(sec_num / 3600)
        var minutes = Math.floor(sec_num / 60) % 60
        var seconds = sec_num % 60

        return [hours, minutes, seconds] // 0, 3, 28
            .map(v => v < 10 ? "0" + v : v) // 00, 03, 28
            .filter((v, i) => v !== "00" || i > 0) // 03, 28
            .join(":") // 03:28
    }
    return (
        <div className="video">
            <div className="thumbnail">
                <img src={thumbnail} />
                <span className="length">{getLengthString(length)}</span>
            </div>
            <h4 className="title">{title}</h4>
            <p className="channel">
                <a href={channel.link}>{channel.name}</a>
            </p>
            <p className="video-info">
                <span className="view-count">{getViewString(viewCount)} views</span>
                <span className="point-divider"></span>
                <span className="uploaded-at">{getUploadedString(uploadedAt)} ago</span>
            </p>
            
        </div>
    )
}

export default Video
