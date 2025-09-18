"use client";

import React from "react";
import styles from "./BackgroundRipple.module.css";

export default function BackgroundRipple({
    children,
    className = "",
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`${styles.rippleWrapper} ${className}`}>
            <div className={styles.ripple} aria-hidden />
            <div className={styles.ripple} aria-hidden />
            <div className={styles.ripple} aria-hidden />
            <div className={styles.content}>{children}</div>
        </div>
    );
}
