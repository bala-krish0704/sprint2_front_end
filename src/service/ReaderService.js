
import axios from "axios";

const READER_API_BASE_URL = 'http://localhost:8080//api/v1/readers';

class ReaderService{
   async createReader(reader){
        alert("Reader added");
        return axios.post(READER_API_BASE_URL+'/addreader',reader);
    }
}
export default new ReaderService();