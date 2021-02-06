import React from 'react';

const ContainerFactory = (children, props) =>
  React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    return React.cloneElement(child, props);
  });

export default ContainerFactory;
