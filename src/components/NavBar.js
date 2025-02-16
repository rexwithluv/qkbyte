"use client";

import { AppBar, Toolbar, IconButton, Typography, Menu, Link, MenuItem, useMediaQuery, useTheme, Stack } from "@mui/material";
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
        <AppBar sx={{backgroundColor: "darkblue"}} position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link href="/" color="inherit" underline="none">QKByte</Link>
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
                            <MenuItem onClick={manejarCerrar}>
                                <Link href="#" color="inherit" underline="none">Hardware y periféricos</Link>
                            </MenuItem>
                            <MenuItem onClick={manejarCerrar}>
                                <Link href="#" color="inherit" underline="none" >Software</Link>
                            </MenuItem>
                            <MenuItem onClick={manejarCerrar}>
                                <Link href="#" color="inherit" underline="none" >PCs montados</Link>
                            </MenuItem>
                            <MenuItem onClick={manejarCerrar}>
                                <Link href="/contacto" color="inherit" underline="none" >Contacto</Link>
                            </MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Stack direction="row" spacing={2}>
                        <Link href="#" color="inherit" underline="none" >Hardware y periféricos</Link>
                        <Link href="#" color="inherit" underline="none" >Software</Link>
                        <Link href="#" color="inherit" underline="none" >PCs montados</Link>
                        <Link href="/contacto" color="inherit" underline="none">Contacto</Link>
                    </Stack>
                )}
            </Toolbar>
        </AppBar>
    );
}