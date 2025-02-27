"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Login() {

    const userDB = "http://localhost:5000/usuarios";
    const [usuarios, setUsuarios] = useState([]);

    const getUsuarios = async () => {
        try {
            const response = await fetch(userDB);
            if (!response.ok) {
                throw new Error("Error en la petición a la DB");
            }

            const data = await response.json();
            setUsuarios(data);
        } catch (e) {
            console.error("Error:", e);
        }
    };

    useEffect(() => {
        getUsuarios();
    }, []);

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = formData;

        const user = usuarios.find(u => u.user === username && u.passwd === password);

        if (user) {
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                showConfirmButton: false,
                timer: 3000,
                willClose: () => {
                    sessionStorage.setItem("login", JSON.stringify(user));
                    window.location.href = "/";
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Credenciales incorrectas',
                showConfirmButton: false,
                timer: 3000
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-80">
            <div className="bg-dark px-5 py-4 rounded shadow">
                <h2 className="text-center">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className="form-label">Nombre de usuario</label> <br />
                        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Contraseña</label><br />
                        <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
                    </div>

                    <div className="text-center mt-5">
                        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                    </div>
                </form>
            </div >
        </div >
    );
}
