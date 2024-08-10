import Card from "./components/Card";
import Grid from "./components/Grid";

import "./index.scss";

const IndexPage = () => {
    return (
        <div className="index-page">
            <Grid>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => (
                    <Card key={card} />
                ))}
            </Grid>
        </div>
    );
};

export default IndexPage;
