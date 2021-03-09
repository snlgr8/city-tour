import React from 'react';
import Tab from '@material-ui/core/Tab';

export function LinkTab(props) {
  return (
    <Tab
      component='a'
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
