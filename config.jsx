import process from "./next.config";

const config = {
    API_ROOT:process.env.NEXT_PUBLIC_TOKEN,
    IMAGE_API_ROOT: process.env.NEXT_PUBLIC_IMG
};

export default config;