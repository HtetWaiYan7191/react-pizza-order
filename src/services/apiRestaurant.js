const BASEURL = "https://react-fast-pizza-api.onrender.com/api";

export const getMenu = async () => {
  const res = await fetch(`${BASEURL}/menu`);
  if (!res.ok) throw new Error("Failed fetching the data");
  const { data } = await res.json();
  return data;
};

export const getOrder = async (id) => {
  const res = await fetch(`${BASEURL}/order/${id}`);
  if (!res.ok) throw new Error("Failed fetching the order");
  const { data } = await res.json();
  return data;
};

export const createOrder = async (newOrder) => {
  console.log(newOrder);
  const res = await fetch(`${BASEURL}/order`, {
    method: "POST",
    body: JSON.stringify(newOrder),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("cannot create a order ☹️");
  const { data } = await res.json();
  return data;
};
