import React, { useState, useEffect } from 'react'
import mogPics from './mogPics'
import { motion } from 'framer-motion'

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const ImageGrid = ({ setSelectedImg }) => {
  const [images, setImages] = useState()

  useEffect(() => {
    const pics = () => {
      let shuf = shuffle(mogPics)
      return setImages(shuf)
    }
    pics()
  }, [])

  return (
    <div className="img-grid">
      {images &&
        images.map((doc, idx) => (
          <motion.div
            className="img-wrap"
            key={idx}
            layout
            whileHover={{ opacity: 1, cursor: 'pointer ' }}
            onClick={() => setSelectedImg(doc)}
          >
            <motion.img
              src={`images/mog-pics/${doc}`}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  )
}

export default ImageGrid
