export const categoryListStyle = theme => {
    return ({
        container: {
            display: "flex",
            justifyContent: "center"
        }
        ,
        formControl: {
            width: "10rem",
            display: "none",
            "@media (max-width: 600px)": {
                display: "block"
            }
        },
        select: {
            width: "100%"
        },
        cardsCategories: {
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
            "@media (max-width: 600px)": {
                display: "none"
            }
        }
})};