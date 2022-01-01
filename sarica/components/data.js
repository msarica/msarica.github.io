const description = ``;

const dedem = {
    name: 'Mehmet Sarica',
    image: 'dedem',
    ar: 'dedem_ar',
    dob: '1928',
    dod: '2014',
    description,
};

const babaannem = {
    name: 'Naile Sarica',
    image: 'naile_babane',
    ar: 'naile_babane_ar',
    dob: '1928',
    dod: '1970',
    description,
};

const emetullah = {
    name: 'Emetullah Sarica',
    image: 'emetullah',
    ar: 'emetullah_osman_dag_ar',
    dob: '',
    dod: '',
    description,
};

const osman_dag = {
    name: 'Osman Dag',
    image: 'osman_dag',
    ar: 'emetullah_osman_dag_ar',
    dob: '',
    dod: '',
    description,
};

const kadriye_dag = {
    name: 'Kadriye Dag',
    image: 'kadriye',
    dob: '',
    dod: '',
    description,
};

const fatih_demirkollu = {
    name: 'Fatih Demirkoullu',
    image: '',
    dob: '',
    dod: '',
    description,
};

const hakan_demirkollu = {
    name: 'Hakan Demirkoullu',
    image: '',
    dob: '',
    dod: '',
    description,
};

const osman_demirkollu = {
    name: 'Ali Osman Demirkoullu',
    image: '',
    dob: '',
    dod: '',
    description,
};

const yasin_dag = {
    name: 'Yasin Dag',
    dob: '',
    dod: '',
    description,
};

const rukiye_dag = {
    name: 'Rukiye Dag',
    dob: '',
    dod: '',
    description,
};

const mustafa_ulualan = {
    name: 'Mustafa Ulualan',
    dob: '',
    dod: '',
    description,
};

const hava = {
    name: 'Havva Sarica',
    dob: '',
    dod: '',
    description,
};

const yunus_bayhan = {
    name: 'Yunus Bayhan',
    dob: '',
    dod: '',
    description,
};

const halime_bayhan = {
    name: 'Halime Bayhan',
    dob: '',
    dod: '',
    description,
};

const rahime_bayhan = {
    name: 'Rahime Bayhan',
    dob: '',
    dod: '',
    description,
};

const salih_bayhan = {
    name: 'Salih Bayhan',
    dob: '',
    dod: '',
    description,
};

const kubra__ = {
    name: 'Kubra Ciftci',
    dob: '',
    dod: '',
    description,
};

const yunus_bayhan_jr = {
    name: 'Yunus Bayhan',
    dob: '',
    dod: '',
    description,
};

const ahsen_bayhan_jr = {
    name: 'Ahsen Bayhan',
    dob: '',
    dod: '',
    description,
};

const fatma = {
    name: 'Fatma Sarica',
    dob: '',
    dod: '',
    description,
};

const babam = {
    name: 'Mustafa Sarica',
    image: 'babam',
    ar: 'babam_ar',
    dob: '1964',
    dod: '',
    description,
};

const hatice = {
    name: 'Hatice Sarica',
    dob: '',
    dod: '',
    description,
};

const annem = {
    name: 'Emine Bayhan',
    image: 'annem',
    ar: 'emine_sarica_ar',
    dob: '1965',
    dod: '',
    description,
};

const ben = {
    name: 'Mehmet Sarica',
    image: 'mehmet',
    ar: 'ben_ar2',
    dob: '',
    dod: '',
    description,
};

const zehra = {
    name: 'Zehra Sarica',
    image: 'zehra',
    dob: '',
    dod: '',
    description,
};

const omer_kaplan = {
    name: 'Omer Kaplan',
    image: 'omer_kaplan',
    dob: '',
    dod: '',
    description,
};

const mirza_kaplan = {
    name: 'Mirza Kaplan',
    image: 'mirza',
    dob: '',
    dod: '',
    description,
};

const eslem = {
    name: 'Eslem Sarica',
    image: 'eslem',
    dob: '',
    dod: '',
    description,
};

const mesud = {
    name: 'Mesud Sarica',
    image: 'mesud',
    ar: 'mesud_berk_ar',
    dob: '',
    dod: '',
    description,
};

const mustafa = {
    name: 'Mustafa Sarica',
    image: 'mustafa',
    ar: 'mustafa_baby_ar',
    dob: '',
    dod: '',
    description,
};

const sefa = {
    name: 'Sefa Demirkollu',
    image: 'sefa',
    dob: '',
    dod: '',
    description,
};

var familyData = {
    person: dedem,
    marriedTo: babaannem,
    children: [
        {
            person: emetullah,
            marriedTo: osman_dag,
            children: [
                {
                    person: kadriye_dag,
                    marriedTo: fatih_demirkollu,
                    children: [
                        {
                            person: sefa,
                            marriedTo: ben,
                        },
                        {
                            person: hakan_demirkollu,
                            marriedTo: 'Gul',
                            children: ['Metehan Demirkollu'],
                        },
                        {
                            person: osman_demirkollu,
                        },
                    ],
                },
                {
                    person: yasin_dag,
                    marriedTo: 'Mukerrem',
                    children: ['Sedanur Dag', 'Ebrar Dag'],
                },
                {
                    person: 'Bedriye',
                    marriedTo: 'Fatih Sahma',
                    children: ['Ayse Esma', 'Ebubekir', 'Talha'],
                },
                {
                    person: rukiye_dag,
                    marriedTo: mustafa_ulualan,
                    children: [
                        'Beyza Ulualan',
                        'Sevde Sena Ulualan',
                        'Elif Huma Ulualan',
                    ],
                },
            ],
        },
        {
            person: hava,
            marriedTo: yunus_bayhan,
            children: [
                {
                    person: halime_bayhan,
                    marriedTo: 'Mumin',
                    children: ['Talha', 'Ruveyda', 'Rumeysa'],
                },
                {
                    person: rahime_bayhan,
                    marriedTo: 'Hasan Atik',
                    children: ['??', 'Talha', '??'],
                },
                {
                    person: salih_bayhan,
                    marriedTo: kubra__,
                    children: [{ person: yunus_bayhan_jr }, { person: ahsen_bayhan_jr }],
                },
            ],
        },
        {
            person: fatma,
            marriedTo: 'Ibrahim Sarica',
            children: ['Ismail Sarica', 'Zeynep Sarica', 'Enes Sarica'],
        },
        {
            person: babam,
            marriedTo: annem,
            children: [
                {
                    person: ben,
                    marriedTo: sefa,
                    children: [
                        {
                            person: mesud,
                        },
                        {
                            person: mustafa,
                        },
                    ],
                },
                {
                    person: zehra,
                    marriedTo: omer_kaplan,
                    children: [
                        {
                            person: mirza_kaplan,
                        },
                    ],
                },
                {
                    person: eslem,
                },
            ],
        },
        {
            person: hatice,
            marriedTo: 'Ali Demirtas',
            children: [
                {
                    person: 'Hale Demirtas',
                    marriedTo: 'Fatih',
                    children: ['??', '??', '??'],
                },
                {
                    person: 'Meryem Demirtas',
                    marriedTo: '??',
                    children: ['??', '??'],
                },
                {
                    person: 'Sami Demirtas',
                },
            ],
        },
    ],
};
