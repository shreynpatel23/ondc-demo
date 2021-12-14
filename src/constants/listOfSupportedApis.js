export const listOfSupportedApis = [
  {
    api_name: "Register User",
    api_endpoint: "https://reqres.in/api/register",
    params: [
      {
        param_name: "email",
      },
      {
        param_name: "password",
      },
    ],
    type: "polling",
  },
  {
    api_name: "Create Employer",
    api_endpoint: "https://reqres.in/api/users",
    params: [
      {
        param_name: "name",
      },
      {
        param_name: "job",
      },
    ],
    type: "polling",
  },
];
