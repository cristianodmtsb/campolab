const toHttpRequest = (data) => ({
  name: data.name,
  email: data.email,
  phone: data.phone,
});

const loadProducerDetailsQuery = ({ payload }) => {
  const { id, values } = payload;

  return {
    method: "PUT",
    url: `/producers/${id}`,
    data: toHttpRequest(values),
  };
};

export default loadProducerDetailsQuery;
