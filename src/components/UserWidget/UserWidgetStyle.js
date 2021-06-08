export const userWidgetStyle = theme => {
    return ({
        container: {
            display: 'flex',
            gap: '8px'
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
        }
    })
}