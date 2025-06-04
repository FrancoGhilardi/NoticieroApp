export const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await response.json();

  return json.map((user: any) => ({
    ...user,
    firstname: user.name.split(" ")[0],
    lastname: user.name.split(" ")[1] || "",
    birthDate: "1973-01-22",
    login: {
      uuid: "generated-uuid",
      username: user.username,
      password: "jsonplaceholder.org",
      md5: "",
      sha1: "",
      registered: new Date().toISOString(),
    },
    address: {
      ...user.address,
      geo: user.address.geo,
    },
    company: user.company,
  }));
};
