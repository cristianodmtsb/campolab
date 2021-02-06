export default ({ producerId }) => {
  return {
    method: "GET",
    url: `/producers/${producerId}/farms`,
  };
};
