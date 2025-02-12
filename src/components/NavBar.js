"use client";

import Link from "next/link";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>QKByte</Link>
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleMenu}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Hardware y periféricos</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Software</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>PCs montados</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link href="/contacto" style={{ color: 'inherit', textDecoration: 'none' }}>Contacto</Link>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar >
    );
}