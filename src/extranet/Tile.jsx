import React from "react";
import { motion } from "framer-motion";
import '../sass/extranet/Tile.scss';

export default function Tile(props) {
    const { id, picture, partner, name, description, status, category } = props;

    return (
        <motion.div
            className="tile"
            key={id}
            href="#"
            layoutId={`tile-${id}`}
        >
            <div className="tile__header">
                <motion.img
                    src={`project/${picture}`}
                    alt="project"
                    className="tile__header__picture"
                    layoutId={`picture-${id}`}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.img
                    src={`project/${partner}`}
                    alt="partner"
                    className="tile__header__partnership"
                    layoutId={`partner-${id}`}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <div className="tile__content">
                <h3 className="tile__content__title">{name}</h3>
                <p className="tile__content__description">{description}</p>
                <p className="tile__content__more">Learn more</p>
                <div className="tile__content__tags">
                    <div className="tile__content__tags__status" data-status={status}></div>
                    <div className="tile__content__tags__type">{category}</div>
                </div>
            </div>
        </motion.div>
    );
}