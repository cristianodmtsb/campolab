const loadProducerDetailsQuery = ({ producerId }) => {
  return {
    method: "GET",
    url: `/producers/${producerId}/farms`,
  };
};

export default loadProducerDetailsQuery;
