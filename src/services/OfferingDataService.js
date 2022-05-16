import http from "../http-common";

class OfferingDataService {
  getAll() {
    return http.get("/offerings");
  }

  get(id) {
    return http.get(`/offerings/${id}`);
  }

  create(data) {
    return http.post("/offerings", data);
  }

  update(id, data) {
    return http.put(`/offerings/${id}`, data);
  }

  delete(id) {
    return http.delete(`/offerings/${id}`);
  }

  deleteAll() {
    return http.delete(`/offerings`);
  }

  findByCity(city) {
    return http.get(`/offerings?city=${city}`);
  }

  getAllTags() {
    return http.get("/offerings/tags");
  }

  getAllTypes() {
    return http.get("/offerings/types");
  }

  getAllCities() {
    return http.get("/offerings/cities");
  }

}

export default new OfferingDataService();