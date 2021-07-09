import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ApartmentIcon from '@material-ui/icons/Apartment';
import PeopleIcon from '@material-ui/icons/People';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <a href="/pessoas">
                <ListItemText primary="Pessoas" />
            </a>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ApartmentIcon />
            </ListItemIcon>
            <a href="/unidades">
                <ListItemText primary="Unidades" />
            </a>
        </ListItem>
    </div>
);