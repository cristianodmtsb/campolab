import { Maybe } from "../../../../utils/functors";

const toHttpRequest = (data) => ({
  name: data.name,
  email: data.email,
  phone: data.phone,
});

export default (params) => {
  const { producerId, data } = Maybe.of(params).get({});

  return {
    method: "PUT",
    url: `/producer/${producerId}`,
    data: toHttpRequest(data),
  };
};
