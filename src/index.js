const messages = [
    'Carlos',
    'Hermito',
    'Yherami',
    'Gaudy',
    'Ani',
    'Carlonia',
    'Paolina'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };

