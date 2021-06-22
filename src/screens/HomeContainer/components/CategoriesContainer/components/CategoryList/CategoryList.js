import { makeStyles } from '@material-ui/core';
import { categoryListStyle } from './CategoryListStyle';
import { Category } from '../Category/Category';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => categoryListStyle(theme));

export const CategoryList = ({ categories }) => {
    const classes = useStyles();
    
    return <section className={classes.container}>
        {categories.map((category,i) => 
            <Link to={`/`}>
                <Category 
                    key={i}
                    category={category}
                />
            </Link>
        )}
    </section>

}
