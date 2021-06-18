import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Searching from './searching';
import Sorting from './sorting';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import SortIcon from '@material-ui/icons/Sort';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth + "px",
    },
    drawer: {
      width: drawerWidth + "px",
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth + "px",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    listLabel: {
        marginLeft: "5px"
    }
  }));

const Algorithms = () => {
    const [section, setSection] = useState("Sorting");
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                anchor="left"
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <Divider />
                <List>
                    <Typography variant="h6" className={classes.listLabel}>
                        Sorting and Searching
                    </Typography>
                {['Sorting', 'Searching'].map((text, index) => (
                    <ListItem button key={text} onClick={() => setSection(text)}>
                        <ListItemIcon>{index % 2 === 0 ? <SortIcon /> : <SearchIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <Divider />
                <List>
                    <Typography variant="h6" className={classes.listLabel}>
                        Data Structures
                    </Typography>
                </List>
                <Divider />
                <List>
                    <Typography variant="h6" className={classes.listLabel}>
                        Path Finding
                    </Typography>
                </List>
            </Drawer>
            <div className="appBar">
                {section == 'Sorting' && (
                    <Sorting />
                )}
                {section == 'Searching' && (
                    <Searching />
                )}
            </div>
        </div>
    )
}

export default Algorithms
