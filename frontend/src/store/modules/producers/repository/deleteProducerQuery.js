export default ({ producerId }) => {
  return {
    method: "DELETE",
    url: `/producer/${producerId}`,
  };
};
