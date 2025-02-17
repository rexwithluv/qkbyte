"use client";

import { AppBar, Link, Toolbar, IconButton, Typography, Menu, MenuItem, useMediaQuery, useTheme, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function BarraNavegacion() {
    // Todas estas variables y funciones son para manejar el menú desplegable
    const tema = useTheme();
    const esPantallaPequena = useMediaQuery(tema.breakpoints.down('md'));

    const [anclaEl, establecerAnclaEl] = useState(null);
    const abrirMenu = (ev) => establecerAnclaEl(ev.currentTarget);
    const cerrarMenu = () => establecerAnclaEl(null);

    return (
        <AppBar position="static" sx={{ backgroundColor: 'darkblue' }}>

            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>QKByte</Link>
                </Typography>
                {esPantallaPequena ? (
                    <>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={abrirMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anclaEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anclaEl)}
                            onClose={cerrarMenu}
                        >
                            {/* MenuItem: Elemento de menú de MUI */}
                            <MenuItem onClick={cerrarMenu}>
                                <Link href="#" underline="none" color="inherit">Hardware y periféricos</Link>
                            </MenuItem>
                            <MenuItem onClick={cerrarMenu}>
                                <Link href="#" underline="none" color="inherit">Software</Link>
                            </MenuItem>
                            <MenuItem onClick={cerrarMenu}>
                                <Link href="#" underline="none" color="inherit">PCs montados</Link>
                            </MenuItem>
                            <MenuItem onClick={cerrarMenu}>
                                <Link href="/contacto" underline="none" color="inherit">Contacto</Link>
                            </MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Stack spacing={2} direction={"row"}>
                        <Link href="#" underline="none" color="inherit" >Hardware y periféricos</Link>
                        <Link href="#" underline="none" color="inherit" >Software</Link>
                        <Link href="#" underline="none" color="inherit" >PCs montados</Link>
                        <Link href="/contacto" underline="none" color="inherit">Contacto</Link>
                    </Stack>
                )}
            </Toolbar>
        </AppBar>
    );
}