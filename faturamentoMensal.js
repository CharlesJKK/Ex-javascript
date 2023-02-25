const invoicingMonthly = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };
  
  const total = Object.values(invoicingMonthly).reduce((acc, curr) => acc + curr);
  
  for (const [state, value] of Object.entries(invoicingMonthly)) {
    const percentage = (value / total) * 100;
    console.log(`O estado de ${state} teve ${percentage.toFixed(2)}% do faturamento total mensal da distribuidora.`);
  }
  