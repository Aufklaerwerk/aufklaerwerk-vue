import http from "../http-common";

class OfferingDataService {
  getAllPublished(city, distance, tags, offeringTypes) {
    let queryString = "?"
    if (city) {
      queryString += "city=" + city + "&";
      if (distance) {
        queryString += "distance=" + distance + "&";
      }
    }
    if (tags) {
      queryString += "tags=" + JSON.stringify(tags) + "&";
    }
    if (offeringTypes) {
      queryString += "offeringTypes=" + JSON.stringify(offeringTypes);
    }
    return http.get("/offerings" + queryString);
  }
  getAll() {
    return http.get("/offerings/all");
  }

  get(id) {
    return http.get(`/offerings/offering/${id}`);
  }

  create(data) {
    return http.post("/offerings/offering", data);
  }

  update(id, data) {
    return http.put(`/offerings/offering/${id}`, data);
  }

  delete(id) {
    return http.delete(`/offerings/offering/${id}`);
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