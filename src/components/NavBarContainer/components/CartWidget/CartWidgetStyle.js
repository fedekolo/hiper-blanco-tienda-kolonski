export const cartWidgetStyle = theme => {
    return ({
        btn: {
            '&:hover': {
                color: 'var(--color-C)',
                cursor: 'pointer',
                transform: 'scale(1.1)'
            }
        },
        container: {
            position: "absolute"
        },
        fewProducts: {
            position: "relative",
            bottom: "2rem",
            left: ".5rem" 
        },
        highProducts: {
            position: "relative",
            bottom: "2rem",
            left: ".2rem" 
        }
    })
};