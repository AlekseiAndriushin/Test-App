class RequestService {
  async getRequest(url) {
    const data = await fetch(url)
      .then((res) => res.json())
      .catch((err) => {
        {
          throw new Error(`Oh we have a error${err}`);
        }
      });
    return data;
  }
}

export default new RequestService();
