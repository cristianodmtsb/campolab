const loadProducersQuery = () => {
  return {
    method: "GET",
    url: "/producers",
  };
};

export default loadProducersQuery;
