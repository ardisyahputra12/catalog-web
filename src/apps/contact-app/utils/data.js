// const getData = () => {
//     return [
//         {
//             id: 1,
//             name: 'Dimas Saputra',
//             tag: 'dimasmds',
//             imageUrl: '/images/dimasmds.jpeg',
//         },
//         {
//             id: 2,
//             name: 'Arif Faizin',
//             tag: 'arifaizin',
//             imageUrl: '/images/arifaizin.jpeg',
//         },
//         {
//             id: 3,
//             name: 'Rahmat Fajri',
//             tag: 'rfajri27',
//             imageUrl: '/images/rfajri27.jpeg',
//         },
//     ];
// }

let contacts = [
    {
        id: 1,
        name: 'Lionel Andrés Messi',
        tag: 'ankara_messi',
        imageUrl: '/images/messi.png',
    },
    {
        id: 2,
        name: 'Neymar da Silva Santos Júnior',
        tag: 'neymar_jr',
        imageUrl: '/images/neymar.png',
    },
    {
        id: 3,
        name: 'Cristiano Ronaldo',
        tag: 'ronaldo_7',
        imageUrl: '/images/ronaldo.png',
    },
];

function getContacts() {
    return contacts;
}

function addContact(contact) {
    contacts = [
        ...contacts,
        {
            id: +new Date(),
            imageUrl: '/images/default.jpg',
            ...contact
        }
    ]
}

function deleteContact(id) {
    contacts = contacts.filter(contact => contact.id !== id);
}

export { getContacts, addContact, deleteContact };