import { List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';
import { heroTextContent } from './HeroText';
import { Work, School } from '@mui/icons-material';
import React from 'react';

export default function HeroText(){
    return (
        <List dense={true}>
            <ListItem>
                <ListItemIcon sx={{ minWidth: 40 }}>
                    <Work />
                </ListItemIcon>
                <ListItemText 
                    primary={heroTextContent.occupation}
                />
            </ListItem>
            <ListItem>
                <ListItemIcon sx={{ minWidth: 40 }}>
                    <School />
                </ListItemIcon>
                <ListItemText
                    primary={heroTextContent.education}
                />
            </ListItem>
        </List>
    )
}