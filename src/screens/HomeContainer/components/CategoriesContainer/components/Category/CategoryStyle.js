export const categoryStyle = theme => {
    return ({
        container: {
            width: "10rem",
            height: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& img": {
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                opacity: ".7",
                boxSizing: "border-box"
            },
            "& span": {
                position: "relative",
                bottom: "2.3rem",
                fontWeight: "bold",
                color: "var(--color-C)",
                textShadow: "2px 1px 2px var(--color-A)"
            },
            "&:hover img": {
                opacity: "1"
            }
        },
        imgView: {
            border: "4px solid var(--color-C)"
        },
        imgHidden: {
            border: "none"
        }
    })};