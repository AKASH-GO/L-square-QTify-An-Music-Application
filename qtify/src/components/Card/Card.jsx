import React from "react";
import styles from "./Card.module.css";
import { Tooltip, Chip } from "@mui/material";

function Card({ data, type }) {
  const { image, title, follows, slug } = data;
  return (
    // eslint-disable-next-line no-undef
    <Tooltip title={`${songs.length}songs`} placement="top" arrow>
      <a href={` /album/${slug}`}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={image} alt="album" loading="lazy" />
            <div className={styles.banner}>
              <Chip label={`${follows} Follows`} size="small" className="" />
            </div>
          </div>
          <div className={styles.titleWrapper}>
            <p>{title}</p>
          </div>
        </div>
      </a>
    </Tooltip>
  );
}

export default Card;