function calculateMoney(ticketSale) {
  if (ticketSale < 1) {
    return 'Please Enter Validation Numbers';
  } else {
    const perPiceTicketSale = 120;
    const getManCost = 500;
    const lunchFee = 50 * 8;
    let totalReceivedAmount = perPiceTicketSale * parseInt(ticketSale);
    const totalCost = getManCost + lunchFee;
    const totalProfit = totalReceivedAmount - totalCost;
    return totalProfit;
  }
}
function checkName(name) {
  if (typeof name !== 'string') return 'Invalid';
  const validCharList = ['A', 'Y', 'I', 'E', 'O', 'U', 'W'];
  const lastCharOfName = name.charAt(name.length - 1);
  const charExist = validCharList.filter(
    item => item.toLowerCase() === lastCharOfName.toLowerCase()
  );
  if (charExist.length > 0) return 'Good Name';
  return 'Bad Name';
}
function deleteInvalids(array) {
  if (!Array.isArray(array) || array.length === 1) {
    return 'Invalid Array';
  }
  const numbers = array.filter(
    item => typeof item === 'number' && !isNaN(item)
  );
  return numbers;
}
function password(obj) {
  if (
    !obj ||
    typeof obj !== 'object' ||
    !obj.name ||
    !obj.birthYear ||
    !obj.siteName ||
    typeof obj.name !== 'string' ||
    typeof obj.siteName !== 'string' ||
    typeof obj.birthYear !== 'number' ||
    obj.birthYear.toString().length !== 4
  ) {
    return 'invalid';
  }
  const websiteName =
    obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
  const username = obj.name;
  const password = websiteName + '#' + username + '@' + obj.birthYear;
  return password;
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== 'number') {
    return 'Invalid input';
  }
  let totalEarning = 0;
  for (let payment of arr) {
    if (payment >= 3000) {
      totalEarning += (payment * 20) / 100;
    } else {
      totalEarning += payment;
    }
  }
  let savingsAmount = totalEarning - livingCost;
  if (savingsAmount <= 0) {
    return 'earn more';
  } else {
    return savingsAmount;
  }
}
