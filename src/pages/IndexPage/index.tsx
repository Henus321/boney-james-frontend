import { useQuery } from "@tanstack/react-query";
import { getAllCoats } from "./requests";

import Card from "./components/Card";
import Grid from "./components/Grid";

import "./index.scss";

const IndexPage = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["getAllCoats"],
        queryFn: getAllCoats,
    });

    // TODO loading/error/no data fallback (loader and image)
    if (isLoading) return null;

    if (isError || !data?.data) return null;

    return (
        <div className="index-page">
            <Grid>
                {data.data.map((coat) => (
                    <Card key={coat._id} coat={coat} />
                ))}
            </Grid>
        </div>
    );
};

export default IndexPage;
