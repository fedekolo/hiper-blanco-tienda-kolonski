export const contactFormStyle = theme => {
    return ({
        container: {
            width: '50%',
            '& Button': {
                backgroundColor: 'var(--color-B)',
                color: 'var(--color-C)',
                marginTop: '1rem'
            },
            "@media (max-width: 600px)": {
                width: '100%',
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginBottom: "2rem"
            }
        }
    })
}