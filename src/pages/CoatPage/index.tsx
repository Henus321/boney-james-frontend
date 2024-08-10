import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCoatById } from "./requests";
import { beautifyCost } from "./Helpers";

import ButtonBookmark from "../../components/ButtonBookmark";
import Slider from "../../components/Slider";

import "./index.scss";

const CoatPage = () => {
    const { id = "" } = useParams();
    const { data, isError, isLoading } = useQuery({
        queryKey: ["getCoatById"],
        queryFn: () => getCoatById(id),
    });

    // TODO loading/error/no data fallback (loader and image)
    if (isLoading) return null;

    // TODO 404 page here
    if (isError || !data?.data) return null;

    const { name, cost, description, photoUrls } = data.data;

    return (
        <div className="coat-page">
            <Slider
                className="coat-page__slider"
                Slides={photoUrls.map((photo) => (
                    <img
                        className="coat-page__slider__image"
                        src={photo}
                        alt="Coat"
                    />
                ))}
            />

            <div className="coat-page__description">
                <h4>{name}</h4>
                <span>{beautifyCost(cost)}</span>
                <p>{description}</p>
                {/* TODO color picker */}
                {/* TODO size picker */}
                <div className="coat-page__description__actions">
                    {/* TODO cart */}
                    <ButtonBookmark />
                </div>
            </div>
        </div>
    );
};

export default CoatPage;
