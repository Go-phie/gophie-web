import React from 'react'
import { Styles } from './music.styles'
import { MusicNotes } from '../../utils/icons'

const MusicGroup = () => {
  return (
    <Styles.MusicCard>
      <div className='image-group'>
        <MusicNotes />
        {/* <img src={MusicNotes} alt='' /> */}
      </div>
    </Styles.MusicCard>
  )
}

export default MusicGroup
