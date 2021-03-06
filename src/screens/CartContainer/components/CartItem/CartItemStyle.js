export const cartItemStyle = theme => {
    return ({
        container: {
            display: "flex",
            width: "100%",
            height: "15rem",
            justifyContent: "space-between",
            borderBottom: "2px solid var(--color-B)",
            "@media (max-width: 600px)": {
                flexDirection: "column",
                height: "fit-content"
            }
        },
        info: {
            display: "flex",
            gap: "3rem",
            marginLeft: "3rem",
            "@media (max-width: 600px)": {
                flexDirection: "column",
                textAlign: "center",
                gap: "1rem",
                marginLeft: 0
            }
        },
        img: {
            width: "10rem",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '& img': {
                width: "auto",
                height: "90%",
                boxShadow: '1px 1px 10px var(--color-B)'
            },
            "@media (max-width: 600px)": {
                width: "90%",
                height: "15rem",
                margin: "auto"
            }
        },
        priceAction: {
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
            marginRight: "2rem",
            justifyContent: "flex-start",
            "& > h2": {
                marginBottom: 0
            },
            "@media (max-width: 600px)": {
                alignItems: "center",
                width: "100%",
                marginBottom: "1rem",
                "& h2": {
                    margin: ".5rem"
                },
                "& h3": {
                    margin: "0 0 .5rem 0"
                },
            }
        },
        btnDelete: {
            transform: 'scale(1.3)',
            '&:hover': {
                color: 'var(--color-C)',
                cursor: 'pointer',
                transform: 'scale(1.4)'
            }
        },
        infoDetail: {
            "& h4": {
                "@media (max-width: 600px)": {
                    display: "none"
                }
            },
            "& h2": {
                "@media (max-width: 600px)": {
                    margin: 0
                }
            }
        }
    })};