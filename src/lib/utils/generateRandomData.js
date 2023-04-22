function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateRandomBudget() {
    return Math.floor(Math.random() * 100000);
}

function generateData(n) {
    const data = [];
    for (let i = 0; i < n; i++) {
      const id = i + 1;
      const name = generateRandomString(6);
      const startDate = generateRandomDate(new Date('2016-01-01'));
      const endDate = generateRandomDate(new Date(startDate));
      const budget = generateRandomBudget();
      data.push({ id, name, startDate, endDate, budget });
    }
    return data;
  }
  
  function generateRandomDate(startDate = new Date(2016, 0, 1)) {
    const start = startDate;
    const end = new Date(2023, 3, 22);
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }