export const getData = async (endpoint: string) => {
  try {
    let data = undefined;
    await fetch(`${endpoint}`)
      .then((res) => res.json())
      .then((res) => (data = res));
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
