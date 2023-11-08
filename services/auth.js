import axios from "axios";
import { API_URL, STRAPI_API_TOKEN } from "../utils/urls";

export const getSeoByPageName = async (currentpage) => {
  try {
    const options = {
      headers: {
        Authorization: "Bearer " + STRAPI_API_TOKEN,
      },
    };

    const response = await axios.get(`${API_URL}/api/seos?populate=*`, options);

    const seo = response?.data?.data.find(
      (seo) => seo?.attributes?.currentpage === currentpage
    );
    console.log(response?.data?.data);

    if (seo) {
      return seo;
    } else {
      throw new Error("Page Seo not found");
    }
  } catch (error) {
    throw error;
  }
};
export const getProductInfoByHref = async (href) => {
  try {
    const options = {
      headers: {
        Authorization: "Bearer " + STRAPI_API_TOKEN,
      },
    };

    const response = await axios.get(
      `${API_URL}/api/products?populate=*`,
      options
    );

    const prod = response?.data?.data.find(
      (prod) => prod?.attributes?.href === href
    );
    console.log({ prod });

    if (prod) {
      return prod;
    } else {
      throw new Error("Page Seo not found");
    }
  } catch (error) {
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const options = {
      headers: {
        Authorization: "Bearer " + STRAPI_API_TOKEN,
      },
    };

    const response = await axios.get(`${API_URL}/api/user-infos`, options);

    const user = response?.data?.data.find(
      (user) => user?.attributes?.email === email
    );
    // console.log({ user });

    if (user) {
      return user;
    } else {
      return "nouser";
    }
  } catch (error) {
    throw error;
  }
};

export const updateUserByEmail = async (email, updatedData) => {
  try {
    // Fetch the user's information by email
    const options = {
      headers: {
        Authorization: "Bearer " + STRAPI_API_TOKEN,
      },
    };

    const response = await axios.get(`${API_URL}/api/user-infos`, options);
    const user = response?.data?.data.find(
      (user) => user?.attributes?.email === email
    );

    if (!user) {
      throw new Error("User not found");
    }

    // Update the user's data
    const updatedUser = {
      ...user.attributes, // Keep existing attributes
      ...updatedData, // Update with new data
    };

    // Send a PUT request to update the user's information
    await axios.put(
      `${API_URL}/api/user-infos/${user.id}`,
      {
        data: {
          ...updatedUser,
        },
      },
      options
    );
    console.log(updatedUser);
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (username, email, address) => {
  try {
    const options = {
      headers: {
        Authorization: "Bearer " + STRAPI_API_TOKEN,
      },
    };

    const response = await axios.post(
      `${API_URL}/api/user-infos`,
      {
        data: {
          username,
          email,
          address,
        },
      },
      options
    );

    const { jwt, user } = response.data.data;
    console.log(response.data.data);

    return user;
  } catch (error) {
    throw error;
  }
};
