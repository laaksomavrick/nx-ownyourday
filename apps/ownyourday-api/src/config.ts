import convict from "convict";

export default convict({
    env: {
        doc: "",
        format: ["production", "development", "test"],
        default: "development",
        env: "NODE_ENV",
    },
    port: {
        doc: "The port our web server should be listening on.",
        format: "port",
        default: 3000,
        env: "PORT",
    },
});
