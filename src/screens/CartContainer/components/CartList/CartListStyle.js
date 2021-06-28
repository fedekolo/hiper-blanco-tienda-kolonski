export const cartListStyle = theme => {
    return ({
        container: {
            height: "auto",
            width: "90vw",
            backgroundColor: "var(--color-A)",
            display: "flex",
            alignItems: "center",
            boxShadow: '1px 1px 10px var(--color-B)',
            borderRadius: "5px",
            padding: "1rem",
            flexDirection: "column",
            boxSizing: "border-box",
            // padding: "3rem 5rem",
            gap: "2rem",
            "& > div": {
                width: "100%"
            }
    }
})};