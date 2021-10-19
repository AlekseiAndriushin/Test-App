class RequestService {
   public getRequest<T>(url: string): Promise<T> {
     return fetch(url)
      .then(response => response.json() as Promise<T>)
      .then(data => {
        return data;
      })
      .catch((err) => {
          throw new Error(`Oh we have a error${err}`);
      });
  }
}

export default new RequestService();
