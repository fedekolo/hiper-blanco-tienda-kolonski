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
            marginBottom: "2rem",
            // padding: "3rem 5rem",
            gap: "2rem",
            "& > div": {
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                borderTop: "3px solid var(--color-B)",
                alignItems: "center",
                "& > h2": {
                    textAlign: "center"
                },
                "& > div": {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem"
                }
            },
            "& > h1": {
                fontSize: "30px",
                marginBottom: 0
            }
    }
})};