export const itemListStyle = theme => {
    return ({
        container: {
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "0 1rem",
            "& h1": {
                fontSize: 30
            }
        }
    })};