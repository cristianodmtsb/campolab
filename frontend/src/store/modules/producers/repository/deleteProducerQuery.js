const loadProducerDetailsQuery = ({ producerId }) => {
  return {
    method: "DELETE",
    url: `/producer/${producerId}`,
  };
};

export default loadProducerDetailsQuery;
