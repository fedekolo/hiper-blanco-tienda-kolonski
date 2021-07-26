export const itemDetailStyle = theme => {
    return ({
        container: {
            height: "80vh",
            width: "90vw",
            backgroundColor: "var(--color-A)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            boxShadow: '1px 1px 10px var(--color-B)',
            borderRadius: "5px",
            padding: "1rem",
            transition: ".1s ease",
            gap: "2rem",
            boxSizing: "border-box",
            "& h3": {
                margin: ".5rem auto"
            },
            "& div": {
                display: "flex"
            },
            "@media (max-width: 850px)": {
                flexDirection: "column",
                height: "auto"
            }
        },
        img: {
            width: "60%",
            height: "90%",
            display: "flex",
            justifyContent: "center",
            "& img": {
                height: "100%",
                width: "auto"
            },
            "@media (max-width: 850px)": {
                height: "50vh",
                width: "100%"
            },
            "@media (max-width: 430px)": {
                height: "40vh"
            }
        },
        infoProduct: {
            display: "flex",
            flexDirection: "column",
            width: "40%",
            height: "100%",
            alignItems: "flex-start",
            border: "2px solid var(--color-B)",
            borderRadius: "10px",
            padding: "2rem",
            boxSizing: "border-box",
            justifyContent: "space-between",
            "& > div": {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                "& > h2": {
                    fontSize: "35px",
                    color: "var(--color-C)",
                    margin: ".2rem auto"
                },
                "& > p": {
                    margin: ".2rem 0"
                },
                "& > span": {
                    fontSize: "30px",
                    color: "var(--color-C)",
                    marginTop: "2rem"
                }
            },
            "@media (max-width: 850px)": {
                width: "90%",
                height: "auto"
            },
            "@media (max-width: 430px)": {
                "& div > h2": {
                    fontSize: "25px"
                },
                "& div > span": {
                    fontSize: "20px"
                }
            }
        },
        itemDetailControl: {
            width: "100%",
            paddingTop: "2rem",
            borderTop: "2px solid var(--color-B)",
            "@media (max-width: 850px)": {
                marginTop: "2rem"
            }
        },
        noFind: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& img": {
                width: "50%",
                margin: "1rem auto"
            },
            "& h1": {
                fontSize: 40,
                margin: 0
            }
        }
    })};