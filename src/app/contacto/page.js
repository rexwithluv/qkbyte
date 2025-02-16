import { Box, Button, Container, TextField, Typography } from '@mui/material';

export default function ContactPage() {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h3" color="inherit" align={"center"} gutterBottom>Contacto</Typography>

            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} spacing={2}>

                {/* Contiene la imagen */}
                <Box flex={1} component={"img"} src='/images/contact.jpg' height="600px" width="auto" />

                {/* Contiene el formulario de contacto */}
                <Box flex={1} component="form" autoComplete="off" sx={{ backgroundColor: 'darkblue', padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography variant='h4' color='inherit' align='center'>¡Contactamos contigo!</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="name"
                            label="Nombre"
                            name="name"
                            required
                            variant='outlined'
                            InputLabelProps={{ style: { color: 'white' } }}
                            InputProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="email"
                            label="Correo"
                            name="email"
                            type="email"
                            required
                            InputLabelProps={{ style: { color: 'white' } }}
                            InputProps={{ style: { color: 'white' } }}
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
                            InputLabelProps={{ style: { color: 'white' } }}
                            InputProps={{ style: { color: 'white' } }}
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Enviar
                        </Button>
                    </Box>

                    {/* Contactanos tú */}
                    <Box sx={{ p: 2, mt: 1, backgroundColor: 'darkblue', border: 1.5, borderRadius: 2, borderColor: "darkslateblue" }}>
                        <Typography color='inherit' variant="h5" gutterBottom>O contactanos tú si lo prefieres...</Typography>
                        <Typography color='inherit' variant='body2'>Correo: qkbyte@email.com</Typography>
                        <Typography color='inherit' variant='body2'>Teléfono: 123456789</Typography>
                    </Box>
                </Box>
            </Box>
        </Container >
    );
};
