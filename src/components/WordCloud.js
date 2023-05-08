import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'
import { skills } from '../data'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  
  const options = {
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true,
  }
 // eslint-disable-next-line
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, skills, options)
      setLoad(false)
    }
  })

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud