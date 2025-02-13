"use client";

import Link from "next/link";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function BarraNavegacion() {
    // Estado para el ancla del menú
    const [anclaEl, establecerAnclaEl] = useState(null);
    const tema = useTheme();
    const esPantallaPequena = useMediaQuery(tema.breakpoints.down('md'));

    // Maneja la apertura del menú
    const manejarMenu = (evento) => {
        establecerAnclaEl(evento.currentTarget);
    };

    // Maneja el cierre del menú
    const manejarCerrar = () => {
        establecerAnclaEl(null);
    };

    return (
        // AppBar: Componente de barra de aplicaciones de MUI
        <AppBar position="static">
            {/* Toolbar: Contenedor flexible para agrupar elementos */}
            <Toolbar>
                {/* Typography: Componente para mostrar texto con estilos tipográficos */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>QKByte</Link>
                </Typography>
                {esPantallaPequena ? (
                    <>
                        {/* IconButton: Botón para íconos, usado aquí para el menú */}
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={manejarMenu}
                        >
                            {/* MenuIcon: Ícono de menú de MUI */}
                            <MenuIcon />
                        </IconButton>
                        {/* Menu: Componente de menú desplegable de MUI */}
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
                            onClose={manejarCerrar}
                        >
                            {/* MenuItem: Elemento de menú de MUI */}
                            <MenuItem onClick={manejarCerrar}>
                                <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Hardware y periféricos</Link>
                            </MenuItem>
                            <MenuItem onClick={manejarCerrar}>
                                <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Software</Link>
                            </MenuItem>
                            <MenuItem onClick={manejarCerrar}>
                                <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>PCs montados</Link>
                            </MenuItem>
                            <MenuItem onClick={manejarCerrar}>
                                <Link href="/contacto" style={{ color: 'inherit', textDecoration: 'none' }}>Contacto</Link>
                            </MenuItem>
                        </Menu>
                    </>
                ) : (
                    <>
                        <Link href="#" style={{ color: 'inherit', textDecoration: 'none', marginRight: '1rem' }}>Hardware y periféricos</Link>
                        <Link href="#" style={{ color: 'inherit', textDecoration: 'none', marginRight: '1rem' }}>Software</Link>
                        <Link href="#" style={{ color: 'inherit', textDecoration: 'none', marginRight: '1rem' }}>PCs montados</Link>
                        <Link href="/contacto" style={{ color: 'inherit', textDecoration: 'none' }}>Contacto</Link>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}