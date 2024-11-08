import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useApi from "../../services/api/useApi";

const useGetAllQuery = ({
                            key = "user-list",
                            url,
                            params,
                            config,
                            enabled = true,
                        }) => {
    const { request } = useApi();

    const {
        data,
        isLoading: originalLoading,
        error,
        refetch: originalRefetch,
    } = useQuery({
        queryKey: params ? [key, params] : [key],
        queryFn: async () => {
            const result = await request.get(url, { params, ...config });
            return {
                data: result,
            };
        },
        enabled: enabled,
    });

    const [isLoading, setIsLoading] = useState(originalLoading);

    const refetch = async () => {
        setIsLoading(true);
        await originalRefetch();
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    };

    useEffect(() => {
        if (originalLoading) {
            setIsLoading(true);
        } else {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [originalLoading]);

    return { data, isLoading, error, refetch };
};

export default useGetAllQuery;