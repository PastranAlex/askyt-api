

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Users', [{
                    firstName: 'Mario Cristian',
                    lastName: 'Torres Lepe',
                    phone: '+56984408727',
                    rut: '18979383-9',
                    encryptedPassword: '1234',
                    email: 'mario.torreslepe@gmail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    RoleId: 1,
                },
                {
                    firstName: 'Esteban Nicolas',
                    lastName: 'Droguett Huerta',
                    phone: '+1234567890',
                    rut: '19828816-0',
                    encryptedPassword: '1234',
                    email: 'estebandroguetthuerta@gmail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    RoleId: 2,
                },
                {
                    firstName: 'Nicolas',
                    lastName: 'Rubio Olivares',
                    phone: '+1234567890',
                    rut: '0987654321-3',
                    encryptedPassword: '1234',
                    email: 'nicolasrubio@gmail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    RoleId: 2,
                }
            ], {},
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    },
};
