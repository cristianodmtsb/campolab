const toHttpRequest = (data) => ({
  name: data.name,
  email: data.email,
  phone: data.phone,
});

const loadProducerDetailsQuery = ({ payload }) => {
  console.log("query", payload);
  return {
    method: "POST",
    url: "/producer",
    data: toHttpRequest(payload),
  };
};

export default loadProducerDetailsQuery;
