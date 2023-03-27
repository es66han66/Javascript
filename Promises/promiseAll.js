const getUser = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "John Doe" }), 200);
  });
};
const getOrders = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([1, 2, 3]), 300);
  });
};

async function start() {
  const [user, orders] = await Promise.all([getUser(), getOrders()]);
  console.log(user, orders);
}

start();
