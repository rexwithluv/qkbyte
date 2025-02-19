import Image from 'next/image';

export default function Contacto() {
    return (
        <div className="container my-4">
            <h2 className="text-center mb-3">Contacto</h2>

            <div className="row d-flex flex-column flex-md-row">
                {/* Contiene la imagen */}
                <div className="col-md-6 mb-4 mb-md-0 d-none d-lg-block">
                    <Image src='/images/contact.jpg' alt="contact" height={600} width={400} />
                </div>

                {/* Contiene el formulario de contacto */}
                <div className="col-md-6 bg-dark text-white p-4 d-flex flex-column justify-content-between">
                    <div>
                        <h4 className="text-center">¡Contactamos contigo!</h4>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="name" placeholder="Nombre" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo</label>
                                <input type="email" className="form-control" id="email" placeholder="Correo" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="message" rows={4} placeholder="Mensaje" required></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit">
                                Enviar
                            </button>
                        </form>
                    </div>

                    {/* Contactanos tú si prefieres */}
                    <div className="p-2 mt-3 bg-dark border border-dark rounded">
                        <h5>O contactanos tú si lo prefieres...</h5>
                        <p>
                            Correo: qkbyte@email.com <br />
                            Teléfono: 123456789
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
