-- Crea la tabla con DEFAULT GETDATE() en fecha_registro
CREATE TABLE tb_usuarios (
    id_usuario INT IDENTITY(1,1) PRIMARY KEY,
    nombre NVARCHAR(100) NOT NULL,
    email NVARCHAR(100) NOT NULL,
    contrasena NVARCHAR(255) NOT NULL,
    fecha_registro DATETIME DEFAULT GETDATE()  -- ¡Automático!
);


-- Insertar múltiples datos en la tabla tb_usuarios
INSERT INTO tb_usuarios (nombre, email, contrasena)
VALUES 
('Carlos Ramírez', 'carlos.ramirez@example.com', 'contraseña123'),
('Laura Sánchez', 'laura.sanchez@example.com', 'abc123456'),
('Pedro López', 'pedro.lopez@example.com', 'pedro1234!'),
('Marta Fernández', 'marta.fernandez@example.com', 'marta@2024'),
('David González', 'david.gonzalez@example.com', 'secreta987'),
('Elena Pérez', 'elena.perez@example.com', 'elena2023!'),
('Juanita Ruiz', 'juanita.ruiz@example.com', 'juanita@789'),
('Carlos García', 'carlos.garcia@example.com', 'carlos2023#'),
('Paula Díaz', 'paula.diaz@example.com', 'paula1234!'),
('Sergio Castillo', 'sergio.castillo@example.com', 'sergio2023$'),
('María Rodríguez', 'maria.rodriguez@example.com', 'rodriguez2024'),
('Fernando Morales', 'fernando.morales@example.com', 'fernando@2023'),
('Isabel Romero', 'isabel.romero@example.com', 'romero2023%'),
('Andrés Gómez', 'andres.gomez@example.com', 'andres4567!'),
('Raquel Jiménez', 'raquel.jimenez@example.com', 'raquel123$'),
('José Martín', 'jose.martin@example.com', 'jose@456'),
('Verónica López', 'veronica.lopez@example.com', 'veronica@2023'),
('Antonio Salazar', 'antonio.salazar@example.com', 'antonio2024#'),
('Beatriz Álvarez', 'beatriz.alvarez@example.com', 'beatriz@789'),
('Julian Vega', 'julian.vega@example.com', 'julian@2023!'),
('Eva Navarro', 'eva.navarro@example.com', 'eva4567!'),
('Cristina Molina', 'cristina.molina@example.com', 'molina2023#'),
('Jorge Castillo', 'jorge.castillo@example.com', 'jorge@2024'),
('Clara González', 'clara.gonzalez@example.com', 'clara9876#'),
('Ricardo Torres', 'ricardo.torres@example.com', 'ricardo@2023%'),
('Sofía Ramos', 'sofia.ramos@example.com', 'sofia456!'),
('Óscar Vargas', 'oscar.vargas@example.com', 'oscar1234!'),
('Lidia Fernández', 'lidia.fernandez@example.com', 'lidia@2023#'),
('Samuel Martín', 'samuel.martin@example.com', 'samuel@456'),
('Berta Sánchez', 'berta.sanchez@example.com', 'berta2023$');
