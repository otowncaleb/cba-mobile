export const accounts = [
  {
    name: "Chequing Account",
    id: "34020219",
    type: "Spending",
    balance: "$16,000",
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
    id: "34020219",
    type: "Savings",
    balance: "$12,000",
    transactions: []
  },
  {
    name: "Credit Card",
    id: "34020219",
    type: "Spending",
    balance: "$0",
    transactions: []
  },
  {
    name: "Loan",
    id: "34020219",
    type: "Borrowing",
    balance: "$1,250",
    transactions: []
  }
];
