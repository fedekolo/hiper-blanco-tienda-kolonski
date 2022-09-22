export const userHugeStyle = theme => {
    return ({
        container: {
            display: 'flex',
            gap: '8px',
            width: 'auto'
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
            alignSelf: 'center',
            width: '2rem',
            '@media (max-width: 625px)': {
                bottom: 0
            }
        }
    })
}