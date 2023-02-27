import React, { useEffect } from "react";
import { Card, Box, Avatar, Stack, Typography, IconButton, Divider, Chip, Switch } from '@mui/material'


const CardList = () => {
    useEffect(()=> {       
    }, [])

    return <Card>
            <Box sx={{ p: 2, display: 'flex' }}>
                <Avatar variant="rounded" src="avatar1.jpg" />
                <Stack spacing={0.5}>
                <Typography fontWeight={700}>Michael Scott</Typography>
                <Typography variant="body2" color="text.secondary">

                </Typography>
                </Stack>
                <IconButton> 
                </IconButton>
            </Box>
            <Divider />
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
            >               
                <Switch />
            </Stack>
        </Card>;
}; 

export default CardList;