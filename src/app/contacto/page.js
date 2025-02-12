import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

export default function ContactPage() {
    return (
        <Container>
            <Typography variant="h1" gutterBottom>Contacto</Typography>
            <Box component="form" noValidate autoComplete="off">
                <TextField
                    fullWidth
                    margin="normal"
                    id="name"
                    label="Nombre"
                    name="name"
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="email"
                    label="Correo"
                    name="email"
                    type="email"
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="message"
                    label="Mensaje"
                    name="message"
                    multiline
                    rows={4}
                    required
                />
                <Button variant="contained" color="primary" type="submit">
                    Enviar
                </Button>
            </Box>
            <Box mt={4}>
                <Typography variant="h2" gutterBottom>Información de Contacto</Typography>
                <Typography>Correo: contacto@ejemplo.com</Typography>
                <Typography>Teléfono: +123456789</Typography>
            </Box>
        </Container>
    );
};
