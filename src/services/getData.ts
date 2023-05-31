export const getData = async (endpoint: string) => {
  try {
    let data = undefined;
    await fetch(`${endpoint}`)
      .then((res) => res.json())
      .then((res) => (data = res));
    console.log("my data fetching", data);
    return data;
  } catch (error) {
    console.log("catch error", error);
    return error;
  }
};
