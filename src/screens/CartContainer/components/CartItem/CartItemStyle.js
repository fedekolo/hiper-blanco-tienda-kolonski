export const cartItemStyle = theme => {
    return ({
        container: {
            display: "flex",
            width: "100%",
            height: "15rem",
            justifyContent: "space-between",
            borderTop: "2px solid var(--color-B)",
            paddingTop: "2rem",
        },
        info: {
            display: "flex"
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
                marginRight: "2rem"
            }
        },
        priceAction: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
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