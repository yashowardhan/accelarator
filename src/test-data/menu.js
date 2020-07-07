const menu = [
    {
        id: 1,
        title: "HOME",
        url: "/"
    },
    {
        id: 2,
        title: "ADMIT PATIENT",
        url: "/patient"
    },
    {
        title: "BANK FORM",
        url: "/bank"
    },
    {
        title: "GRAPH",
        url: "/services",
        children: [
            {
                id: 5,
                title: "BAR",
                url: "/graph"
            },
            {
                id: 6,
                title: "PIE",
                url: "/graph"
            },
            {
                id: 7,
                title: "COLUMN",
                url: "/graph"
            }
        ]
    }
];

export default menu;
