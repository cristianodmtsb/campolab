const toHttpRequest = (data) => ({
  name_farm: data.nameFarm,
});

const loadFarmQuery = ({ payload }) => {
  const { producerId } = payload;
  console.log("query", payload);
  return {
    method: "POST",
    url: `/producers/${producerId}/farms`,
    data: toHttpRequest(payload),
  };
};

export default loadFarmQuery;
