export const navBarStyle = theme => {
    return ({
        container: {
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: 'var(--color-A)',
            width: '100vw',
            heigth: '2rem',
            alignItems: 'center',
            boxShadow: '1px 1px 10px var(--color-B)',
            position: 'fixed',
            top: '0',
            zIndex: "999",
            '& > div': {
            display: 'flex',
            gap: '.5rem',
                '& img': {
                    height: '2.5rem',
                    width: 'auto'
                },
                '& div': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    fontWeight: 'bold'
                },
                '@media (max-width: 625px)': {
                    marginLeft: "2rem"
                }
            },
            '& > ul': {
                listStyle: 'none',
                display: 'flex',
                gap: '2rem',
                '& > li': {
                    borderBottom: '3px var(--color-A) solid',
                    borderTop: '3px var(--color-A) solid',
                    '&:hover': {
                        borderBottom: '3px var(--color-C) solid',
                        cursor: 'pointer'                      
                    }
                }
            },
            '@media (max-width: 625px)': {
                boxSizing: 'border-box',
                justifyContent: 'space-between',
                '& > ul': {
                    display: 'none'
                }
            }
        }
    })
}