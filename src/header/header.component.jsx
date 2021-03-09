import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import About from '../about/about.component';
import Home from '../home/home.component';
import Tour from '../tour/tour.component';
import { LinkTab } from './LinkTab';
import { TabPanel } from './TabPanel';
import { tabProps } from './tabProps';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Header({ data, title }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs variant='fullWidth' value={value} onChange={handleChange}>
          <LinkTab label='Home' href='/home' {...tabProps(0)} />
          <LinkTab label='About' href='/about' {...tabProps(1)} />
          <LinkTab label='Tour' href='/tour' {...tabProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Tour title={title} />
      </TabPanel>
    </div>
  );
}
