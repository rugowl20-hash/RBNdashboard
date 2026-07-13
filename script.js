async function submitOrderForm() {
  // ... modify appState.orders
  await saveOrders();   // new Firebase save
  renderOrders();
}
