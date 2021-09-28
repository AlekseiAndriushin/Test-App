class RequestService {
  async getRequest(url) {
    let data = await fetch(url)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log('Oh we have a error');
      });
    return data;
  }
}

export default new RequestService();
