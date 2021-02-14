import React from 'react'
import Card from '../card/card.component.jsx'

import './card-list.styles.css'
// import PropTypes from 'prop-types'

export const CardList = ({monsters}) => {
    return (
        <div className="card-list">
              {monsters.map(monster => (
                  <Card key={monster.id} monster={monster}/>
         
        )) }
        </div>
    )
}

// CardList.propTypes = {

// }


