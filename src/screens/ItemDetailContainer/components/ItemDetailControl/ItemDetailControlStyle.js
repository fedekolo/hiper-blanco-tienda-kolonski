export const itemDetailControlStyle = theme => {
    return ({
        container: {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            "& > div": {
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
            },
            "& > Button": {
                backgroundColor: "var(--color-C)",
                color: "white",
                width: "100%"
            },
            "@media (max-width: 1000px)": {
                gap: "1rem",
                "& > div": {
                    flexDirection: "column",
                    alignItems: "center",
                    gap: ".5rem"
                }
            },
            "@media (max-width: 850px)": {
                "& > div": {
                    flexDirection: "row"
                }
            },
            "@media (max-width: 430px)": {
                "& > div": {
                    flexDirection: "column"
                }
            }
        },
        formControl: {
            width: "8rem"
        }
    })};