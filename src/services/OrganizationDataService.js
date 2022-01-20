import http from "../http-common";

class OrganizationDataService {
  getAll() {
    return http.get("/organizations");
  }

  get(id) {
    return http.get(`/organizations/${id}`);
  }

  create(data) {
    return http.post("/organizations", data);
  }

  update(id, data) {
    return http.put(`/organizations/${id}`, data);
  }

  delete(id) {
    return http.delete(`/organizations/${id}`);
  }

  deleteAll() {
    return http.delete(`/organizations`);
  }

  findByCity(city) {
    return http.get(`/organizations?city=${city}`);
  }
}

export default new OrganizationDataService();