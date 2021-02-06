import { Maybe } from "../../../../utils/functors";

const toHttpRequest = (data) => ({
  name: data.name,
  email: data.email,
  phone: data.phone,
});

export default (params) => {
  const { data } = Maybe.of(params).get({});

  return {
    method: "POST",
    url: "/producer",
    data: toHttpRequest(data),
  };
};
