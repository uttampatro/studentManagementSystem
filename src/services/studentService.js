import * as config from '../config/api';
import axios from './axios';

const createStudent = async ({ name, age, school, std, division, status }) => {
    try {
        const response = await axios.post(
            `${config.apiConfig.baseUrl}/v1/addStudent`,
            {
                name,
                age,
                school,
                std,
                division,
                status,
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const getAllStudent = async () => {
    try {
        const response = await axios.get(
            `${config.apiConfig.baseUrl}/v1/fetchAllStudent`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const deleteStudent = async id => {
    try {
        const response = await axios.delete(
            `${config.apiConfig.baseUrl}/v1/deleteStudent/${id}`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { createStudent, getAllStudent, deleteStudent };
