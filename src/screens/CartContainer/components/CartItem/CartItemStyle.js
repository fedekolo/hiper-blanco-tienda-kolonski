export const cartItemStyle = theme => {
    return ({
        container: {
            display: "flex",
            width: "100%",
            height: "15rem",
            justifyContent: "space-between",
            borderBottom: "2px solid var(--color-B)",
            // "@media (max-width: 800px)": {
            //     flexDirection: "column"
            // }
        },
        info: {
            display: "flex",
            gap: "3rem",
            marginLeft: "3rem",
            // "@media (max-width: 800px)": {
            //     flexDirection: "column"
            // }
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
            // "@media (max-width: 800px)": {
            //     width: "100%",
            //     height: "20rem",
            //     "& img": {
            //         width: "auto",
            //         height: "90%",
            //     }
            // }
        },
        priceAction: {
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
            marginRight: "2rem",
            justifyContent: "flex-start",
            "& > h2": {
                marginBottom: 0
            }
        },
        btnDelete: {
            transform: 'scale(1.3)',
            '&:hover': {
                color: 'var(--color-C)',
                cursor: 'pointer',
                transform: 'scale(1.4)'
            }
        }
    })};