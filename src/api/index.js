async function fetchUser(page) {
  try {
    const response = await fetch(`https://randomuser.me/api?page=${page.page}`);
    if (response.ok) {
      const data = await response.json();

      return data;
    }

    throw new Error("");
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export { fetchUser };
