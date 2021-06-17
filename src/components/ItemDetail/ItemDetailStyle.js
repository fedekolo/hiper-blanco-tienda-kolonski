export const itemDetailStyle = theme => {
    return ({
        container: {
            height: "17rem",
            width: "12rem",
            backgroundColor: "var(--color-A)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: '1px 1px 10px var(--color-B)',
            borderRadius: "5px",
            padding: ".5rem",
            transition: ".1s ease",
            "& img": {
                width: "90%",
                height: "auto"
            },
            "& h3": {
                margin: ".5rem auto"
            },
            "&:hover": {
                boxShadow: '1px 1px 15px var(--color-B)',
                cursor: "pointer"
            }
        }
    })};