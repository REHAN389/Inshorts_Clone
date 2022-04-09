import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import categories from '../data/category'
import './Navshorts.css';


//main function getting setcategory prop.
export default function TemporaryDrawer({ setcategory }) {
  const [state, setState] = React.useState({
    left: false,
  });

  //whole drawer code.
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.87)', height: '100vh', color: 'white', width: '200px', paddingLeft: '10px', paddingRight: '5px' }}
    >

      <List style={{ color: 'grey' }}>
        <ListItem>Categories</ListItem>
      </List>
      <Divider style={{ color: 'grey' }} />
    
    {/* Here we appply map function on categories array and update setcategory value onclick */}
      <List>
        {categories.map((text, index) => (
          <ListItem button key={text} onClick={() => { setcategory(text) }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
 
  return (
    <div >
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{ color: 'black' }}></MenuIcon></Button>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>

    </div>
  );
}