/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";

export const UsersContext = createContext({
    user: "",
    userAppointments: [],
    loginUser: async () => {},
    registerUser: async () => {},
    logOutUser: () => {},
    getUserAppointments: async () => {},
    cancelAppointment: async () => {},
    createdAppointment: async () => {}
});

export const UsersProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("userId") || "");
    const [userAppointments, setUserAppointments] = useState([]);

    const loginUser = async (userData) => {
        const respuesta = await axios.post('https://gestionturno-production.up.railway.app:3000/users/login', userData);
        localStorage.setItem("userId", respuesta.data.user.id);
        setUser(respuesta.data.user.id);
    };

    const registerUser = async (userData) => {
        await axios.post("https://gestionturno-production.up.railway.app:3000/users/register", userData);
    };

    const logOutUser = () => {
        localStorage.clear();
        setUser("");
        setUserAppointments([]);
    };

    const getUserAppointments = async (userId) => {
        try {
        const response = await axios.get(`https://gestionturno-production.up.railway.app:3000/users/${userId}`);
        console.log(response.data.appointments)
            setUserAppointments(response.data.appointments); 

        } catch (error) {
            console.error("Error al obtener citas:", error);
            setUserAppointments([]);
        }
    };

    const cancelAppointment = async (appointmentId) => {
        await axios.put(`https://gestionturno-production.up.railway.app:3000/appointments/cancel/${appointmentId}`);
        const userAppointmentsUpdate = userAppointments.map((appointment) => {
            if (appointment.id === appointmentId) {
                return { ...appointment, status: "cancelled" };
            }
            return appointment;
        });
        setUserAppointments(userAppointmentsUpdate);
    };

    const createdAppointment = async (values) => {
        const appointmentValues = { ...values, userId: user };
        await axios.post(`https://gestionturno-production.up.railway.app:3000/appointments/schedule`, appointmentValues);
    };

    const value = {
        user,
        userAppointments,
        loginUser,
        registerUser,
        logOutUser,
        getUserAppointments,
        cancelAppointment,
        createdAppointment
    };

    return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
};
