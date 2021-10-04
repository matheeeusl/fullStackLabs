import React from 'react'
import PropTypes from 'prop-types'
import colors from "../constants/colors";


const Block = ({id, description}) => (
  <div style={styles.container}>
    <span style={styles.id}>00{id}</span>
    <span style={styles.description}>{description}</span>
  </div>
)

const styles = { 
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.blockBackground,
    padding: '8px 8px 4px 8px',
    marginBottom: '4px',
    borderRadius: '2px'
  },
  id: {
    color: colors.blockId,
    fontSize: '10px',
    fontWeight: 'bold',
    lineHeight: '16px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase'
  },
  description: {
    color: colors.blockDesc,
    letterSpacing: '0.25px',
    lineHeight: '20px'
  }
}

Block.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string
}

export default Block