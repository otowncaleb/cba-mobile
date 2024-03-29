export const accounts = [
  {
    name: "Chequing Account",
    id: "34020219",
    type: "Spending",
    balance: "$16,000",
    balanceAmount: 16000,
    transactions: [
      {
        id: 1,
        date: "June 2, 2018",
        description: "UBER TRIP",
        type: "transportation",
        amount: "-$25.55"
      },
      {
        id: 2,
        date: "June 2, 2018",
        description: "AMERICAN EXPRESS",
        type: "money",
        amount: "$500.55"
      },
      {
        id: 3,
        date: "June 1, 2018",
        description: "BOOSTERJUICE RIDEAU",
        type: "food",
        amount: "-$25.55"
      },
      {
        id: 4,
        date: "June 1, 2018",
        description: "Interac E-Transfer",
        type: "money",
        amount: "$100.55"
      }
    ]
  },
  {
    name: "Tax-Free Savings Account",
    id: "34020220",
    type: "Savings",
    balance: "$12,000",
    balanceAmount: 12000,
    transactions: []
  },
  {
    name: "Credit Card",
    id: "34020221",
    type: "Spending",
    balance: "$0",
    balanceAmount: 0,
    transactions: []
  },
  {
    name: "Loan",
    id: "34020222",
    type: "Borrowing",
    balance: "$1,250",
    balanceAmount: 1250,
    transactions: []
  }
];

export const locations = [
  {
    id: 1,
    services: ["Branch", "ATM"],
    name: "Vanier North",
    coordinates: {
      latitude: 45.44,
      longitude: -75.67
    },
    address: "126 Osgoode Street",
    phone: "(613) 805-2869",
    hours: {
      Monday: "8a.m.–6p.m",
      Tuesday: "8a.m.–6p.m",
      Wednesday: "8a.m.–6p.m",
      Thursday: "8a.m.–6p.m",
      Friday: "8a.m.–6p.m",
      Saturday: "10a.m.–4p.m",
      Sunday: "Closed"
    }
  },
  {
    id: 2,
    services: ["ATM"],
    name: "uOttawa Lees Campus",
    coordinates: {
      latitude: 45.42,
      longitude: -75.67
    },
    address: "126 Osgoode"
  },
  {
    id: 3,
    services: ["ATM"],
    name: "uOttawa SITE Building",
    coordinates: {
      latitude: 45.42,
      longitude: -75.68
    },
    address: "800 King Edward Avenue"
  },
  {
    id: 4,
    services: ["ATM"],
    name: "Rideau Centre",
    coordinates: {
      latitude: 45.43,
      longitude: -75.685
    },
    address: "50 Rideau Street"
  },
  {
    id: 5,
    services: ["Branch", "ATM"],
    name: "Centretown",
    coordinates: {
      latitude: 45.415,
      longitude: -75.69
    },
    address: "85 Bronson Avenue",
    phone: "(613) 805-2869",
    hours: {
      Monday: "8a.m.–6p.m",
      Tuesday: "8a.m.–6p.m",
      Wednesday: "8a.m.–6p.m",
      Thursday: "8a.m.–6p.m",
      Friday: "8a.m.–6p.m",
      Saturday: "10a.m.–4p.m",
      Sunday: "Closed"
    }
  }
];

export const payees = [
  {
    id: 1,
    name: "TEKSAVVY",
    accountId: "132023"
  },
  {
    id: 2,
    name: "HYDRO OTTAWA",
    accountId: "132023"
  },
  {
    id: 3,
    name: "UOTTAWA TUITION",
    accountId: "7256131"
  }
];
