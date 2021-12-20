export const listOfSupportedApis = [
  {
    api_name: "Get Products",
    api_endpoint:
      "http://ec2-3-110-48-23.ap-south-1.compute.amazonaws.com:8080/api/beckn/getProduct",
    params: [
      {
        param_name: "itemContains",
      },
      {
        param_name: "locationIs",
      },
      {
        param_name: "offset",
      },
    ],
    type: "polling",
    count: 0,
  },
  {
    api_name: "Search",
    api_endpoint:
      "http://ec2-3-110-48-23.ap-south-1.compute.amazonaws.com:8080/api/beckn/onSearch",
    params: [
      {
        param_name: "message_id",
      },
    ],
    type: "polling",
    count: 3,
  },
];
