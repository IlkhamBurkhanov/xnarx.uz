import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Index = ({ children }) => {
    // Initialize QueryClient only once
    const [client] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    }));

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Index;
