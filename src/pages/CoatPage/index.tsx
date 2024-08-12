import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCoatById } from "./requests";
import { beautifyCost } from "./Helpers";
import { RoutesStructure } from "../../config";
import { useState } from "react";

import ButtonBookmark from "../../components/ButtonBookmark";
import Slider from "../../components/Slider";
import StatusView from "../../components/StatusView";
import Loader from "../../components/Loader";
import Breadcrumb from "../../components/Breadcrumb";
import Typo from "../../components/Typo";
import Button from "../../components/Button";
import ColorPicker from "../../components/ColorPicker";

import "./index.scss";

const CoatPage = () => {
    const { id = "" } = useParams();
    const [colorIndex, setColorIndex] = useState(0);
    const { data, isError, isLoading } = useQuery({
        queryKey: ["getCoatById"],
        queryFn: () => getCoatById(id),
    });

    if (isLoading) return <Loader />;

    if (isError || !data?.data)
        return (
            <StatusView
                title="Ошибка!"
                description="Не удалось загрузить данные"
            />
        );

    const { name, cost, description, colors } = data.data;
    const photos = colors[colorIndex].photoUrls;

    return (
        <div className="coat-page">
            <Slider
                className="coat-page__slider"
                Slides={photos.map((photo) => (
                    <img
                        className="coat-page__slider__image"
                        src={photo}
                        alt="Coat"
                    />
                ))}
            />

            <div className="coat-page__description">
                <Breadcrumb
                    options={[
                        {
                            path: RoutesStructure.Index,
                            label: "Главная",
                        },
                        {
                            label: "Коллекция",
                        },
                        {
                            label: name,
                        },
                    ]}
                />
                <Typo type="h3">{name}</Typo>
                <span>{beautifyCost(cost)}</span>
                <p>{description}</p>
                <ColorPicker
                    colors={colors}
                    onIndexChange={(index) => setColorIndex(index)}
                    currentIndex={colorIndex}
                />
                {/* TODO size picker */}
                <div className="coat-page__description__actions">
                    <Button onClick={() => {}}>В Корзину</Button>
                    <ButtonBookmark />
                </div>
            </div>
        </div>
    );
};

export default CoatPage;
