
const descriptors = [
    {'Jonathan': '🐬'},
    {'Kelly': '😈'},
    {'Mateo': '🤑'},
    {'Katty': '😻'},
    {'Francisco': '🎃'}
];

const viewPerson = () => {
    const view = Math.floor(Math.random() * descriptors.length);
    console.log(descriptors[view]);
    console.log(`Su indice es: ${view}`);
}

module.exports = {
    viewPerson
}