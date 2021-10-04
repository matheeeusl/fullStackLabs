import React from "react";
import PropTypes from "prop-types";
import Block from "./Block";
import colors from "../constants/colors";

const Blocks = ({ blocks }) => {
  if (blocks.loading) {
    return <div style={styles.warning}>Loading...</div>;
  }
  if (blocks.error) {
    return <div style={styles.danger}>{blocks.error}</div>;
  }

  return (
    <div style={styles.container}>
      {blocks.data &&
        blocks.data.map(({ id, attributes }) => (
          <Block key={id} id={id} description={attributes.data} />
        ))}
    </div>
  );
};

const styles = { 
  container: {
    width: '100%'
  },
  warning: {
    color: colors.warning,
  },
  danger: {
    color: colors.danger,
  }

}

Blocks.protoTypes = {
  blocks: PropTypes.object,
};

export default Blocks;
