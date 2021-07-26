export const userHugeStyle = theme => {
    return ({
        container: {
            display: 'flex',
            gap: '8px',
            minWidth: "5rem"
        },
        btn: {
            '&:hover': {
                color: 'var(--color-C)',
                cursor: 'pointer',
                transform: 'scale(1.1)'
            }
        },
        btnMenu: {
            display: 'none',
            '&:hover': {
                color: 'var(--color-C)',
                cursor: 'pointer',
                transform: 'scale(1.1)'
            },
            '@media (max-width: 625px)': {
                display: 'block'
            }
        },
        btnCart: {
            position: "relative",
            bottom: ".6rem",
            '@media (max-width: 625px)': {
                bottom: 0
            }
        }
    })
}