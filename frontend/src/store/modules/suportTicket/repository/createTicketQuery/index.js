import { Maybe } from "../../../../../utils/functors";

const toHttpRequest = (data) => ({
  title: data.title,
  power_plant: data.powerPlant,
  opened_at: data.openedAt,
  status: data.status,
  category: data.category,
  priority: data.priority,
  description: data.description,
});

export default (params) => {
  const { data } = Maybe.of(params).get({});

  return {
    method: "POST",
    url: "/service_ticket/",
    data: toHttpRequest(data),
  };
};
