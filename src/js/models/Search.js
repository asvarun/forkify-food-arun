// Model Controller
import axios from "axios";
import { key } from "../config";

export default class Search {
  constructor(query) {
    this.query = query;
  }
  // API query to fetch search query result
  async getResults() {
    try {
      const res = await axios(
        `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
      // console.log(this.result);
    } catch (error) {
      console.log(error);
    }
  }
}
