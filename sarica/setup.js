// const description = `Babam ile Annem sanırım 1947 yılında evlenmişler, babamın babası ve annesi ölmüş olduğu için ağabeyi (Ahmet Amcam) evlendirmiş. Sonra da ayrımışlar. Amcam becerikli ve akıllı bir insanmış, köye bakkal açmış, çiftçiliğin yanı sıra köydeki marangozluk işlerini de yapıyormuş. Babam ağabeyisinin gölgesinde onun tavsiyelerine göre yürüyormuş. Önce evleri ayırmışlar, İbrahim Dedemler bu gün Adem Ağabeyinin oturduğu evde yaşamışlar, sonra bizim evin altı (büyük odanın altı) Hanife ananınmış, ilaveten onun üstündeki yeri Kör Kiraz denen kadından, ağıl denen yeri de Hacela Yusuf denen şahıstan satın almışlar.
// `;

// const dedem = {
//     name: 'Mehmet Sarica',
//     dob: '1928',
//     dod: '2014',
//     description
// };

// const babaannem = {
//     name: 'Naile Sarica',
//     dob: '1928',
//     dod: '1970',
//     description
// };

// const emetullah = {
//     name: 'Emetullah Sarica',
//     dob: '',
//     dod: '',
//     description
// };

// const hava = {
//     name: 'Havva Sarica',
//     dob: '',
//     dod: '',
//     description
// };

// const fatma = {
//     name: 'Fatma Sarica',
//     dob: '',
//     dod: '',
//     description
// };

// const babam = {
//     name: 'Mustafa Sarica',
//     dob: '1964',
//     dod: '',
//     description
// };

// const hatice = {
//     name: 'Hatice Sarica',
//     dob: '',
//     dod: '',
//     description
// };

// const annem = {
//     name: 'Emine Bayhan',
//     dob: '1964',
//     dod: '',
//     description
// };

// const ben = {
//     name: 'Mehmet Sarica',
//     image: 'mehmet',
//     dob: '',
//     dod: '',
//     description
// };

// const zehra = {
//     name: 'Zehra Sarica',
//     dob: '',
//     dod: '',
//     description
// };

// const eslem = {
//     name: 'Eslem Sarica',
//     dob: '',
//     dod: '',
//     description
// };

// const mesud = {
//     name: 'Mesud Sarica',
//     image: 'mesud',
//     dob: '',
//     dod: '',
//     description
// };

// const mustafa = {
//     name: 'Mustafa Sarica',
//     image: 'mustafa',
//     dob: '',
//     dod: '',
//     description
// };

// const sefa = {
//     name: 'Sefa Demirkollu',
//     dob: '',
//     dod: '',
//     description
// };

// var familyData = {
//     person: dedem,
//     marriedTo: babaannem,
//     children: [
//         {
//             person: emetullah,
//         },
//         {
//             person: hava,
//         },
//         {
//             person: fatma,
//         }, {
//             person: babam,
//             marriedTo: annem,
//             children: [
//                 {
//                     person: ben,
//                     marriedTo: sefa,
//                     children: [
//                         {
//                             person: mesud,
//                         }, {
//                             person: mustafa,
//                         }
//                     ]
//                 },
//                 {
//                     person: zehra,
//                 }, {
//                     person: eslem,
//                 }
//             ]
//         }, {
//             person: hatice,
//         }
//     ]
// };

// // export function traverse(p, depth = 0) {
// //     console.log('*'.repeat(depth), p.person.name, '-', p.marriedTo?.name);
// //     if (p.children) {
// //         p.children.forEach((pp) => {
// //             traverse(pp, depth + 1);
// //         });
// //     }
// // }



        // function cardCount(data, depth, current = 0) {
        //     if (depth < current) return 0;
        //     if (depth == current) {
        //         return data.marriedTo ? 2 : 1;
        //     }
        //     if (!data.children) return 0;
        //     let count = 0;
        //     if (depth == current) {
        //         for (let c of data.children) {
        //             count += 1;
        //             if (c.marriedTo) count++;
        //         }
        //         return count;
        //     }

        //     for (let c of data.children) {
        //         count += cardCount(c, depth, current + 1);
        //     }
        //     return count;
        // }


        // const cardHash = (() => {
        //     const c = {};

        //     let depth = 0;
        //     let count;
        //     do {
        //         count = cardCount(familyData, depth);
        //         c[depth] = count;
        //         depth++;

        //     } while (count);
        //     console.log(c);
        //     return c;
        // })();