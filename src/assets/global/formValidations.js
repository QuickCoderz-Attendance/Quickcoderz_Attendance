const Validations = {

    firstName: {
        required: "This field is required",
        pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Alphabetical characters only"
        },
        maxLength: {
            value: 20,
            message: "Firstname should be atleast 15 charatcers"
        }
    },

    lastName: {
        required: "This field is required",
        pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Alphabetical characters only."
        }
    },

    email: {
        required: "Email field is required.",
        pattern: {
            value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            message: "Email is invalid.",
        }
    },

    addressline1: {
        required: "This field is required."
    },

    zipCode: {
        required: "This field is required",
        maxLength: {
            value: 6,
            message: "Zip code cannot exceed more than 6 numbers.",
        },
        minLength: {
            value: 6,
            message: "Invalid zip code.",
        }
        // pattern: {
        //     value: /(^\d{5}$)|(^\d{5}-\d{4}$)/i,
        //     message: "Please fill the valid Zip code.",
        // }
    },

    state: {
        required: "This field is required.",
    },

    city: {
        required: "This field is required.",
    },

    phone: {
        required: "This field is required",
        maxLength:{
            value: 10,
            message: "Phone Number cannot exceed more than 10 numbers"
        },
        pattern: {
            value: /^[+]?[0-9]{3}[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
            message: "Invalid phone number."
        }
    },

    password: {
        required: "This field is required",
        minLength: {
            value: 8,
            message: "Password must be at least 8 digits"
        }
        // maxLength: {
        //     value: 10,
        //     message: "Password should not have more than 10 digits"
        // },

    },
    remember: {
        typeof: "boolean",
    },
    delivery_note: {
        maxLength: {
            value: 100,
            message: "Please keep note short and simple.",
        },
    }

}

export default Validations;