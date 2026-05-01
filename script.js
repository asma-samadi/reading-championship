const competitors = [
  {
    name: "Aleyah",
    books: ["Atomic Habits", "Deep Work", "The Alchemist", "Ikigai"],
    totalPages: [320, 296, 208, 180],
    pagesRead: [300, 200, 150, 180],
  },
  {
    name: "Sana",
    books: [
      "Rich Dad Poor Dad",
      "Think and Grow Rich",
      "The Psychology of Money",
    ],
    totalPages: [336, 238, 256],
    pagesRead: [300, 200, 200],
  },
  {
    name: "Najwa",
    books: [
      "Harry Potter and the Sorcerer's Stone",
      "Harry Potter and the Chamber of Secrets",
      "Harry Potter and the Prisoner of Azkaban",
      "Harry Potter and the Goblet of Fire",
      "Harry Potter and the Order of the Phoenix",
    ],
    totalPages: [309, 341, 435, 734, 870],
    pagesRead: [300, 300, 400, 500, 600],
  },
  {
    name: "Amina",
    books: ["The Power of Habit", "Make Your Bed"],
    totalPages: [371, 130],
    pagesRead: [300, 120],
  },
];

function calculateProgress(totalPages, pagesRead) {
  return Math.round((pagesRead / totalPages) * 100);
}

function calculateTotalPagesRead(pagesReadArray) {
  let total = 0;
  for (let i = 0; i < pagesReadArray.length; i++) {
    total += pagesReadArray[i];
  }
  return total;
}

function calculateCompletionRate(pagesReadArray, totalPagesArray) {
  let totalProgress = 0;

  for (let i = 0; i < pagesReadArray.length; i++) {
    totalProgress += (pagesReadArray[i] / totalPagesArray[i]) * 100;
  }

  return totalProgress / pagesReadArray.length;
}
